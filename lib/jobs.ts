/**
 * lib/jobs.ts — Unified data layer for job listings.
 *
 * Strategy:
 *   • Production (KV_REST_API_URL + KV_REST_API_TOKEN set): reads/writes via @vercel/kv
 *   • Development / fallback:                               reads/writes data/jobs.json
 *
 * All exports are async and work in both environments.
 *
 * NOTE: Static top-level imports are intentional.
 * This file is ONLY ever imported by server components and server actions,
 * so `fs`, `path`, and `@vercel/kv` are all safe to import at the module level.
 * Using `await import(...)` inside functions would force webpack to create
 * async dynamic chunks that the SSR webpack-runtime cannot resolve synchronously
 * at startup, causing "Cannot find module './898.js'" style errors.
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { kv } from "@vercel/kv";
import type { Job } from "@/types/jobs";

// ── Constants ────────────────────────────────────────────────────────────────

const KV_KEY     = "zinoit:jobs";
const JSON_PATH  = join(process.cwd(), "data", "jobs.json");

function isKvAvailable(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

// ── JSON file layer (dev / fallback) ─────────────────────────────────────────

function readJsonFile(): Job[] {
  try {
    return JSON.parse(readFileSync(JSON_PATH, "utf-8")) as Job[];
  } catch {
    return [];
  }
}

function writeJsonFile(jobs: Job[]): void {
  writeFileSync(JSON_PATH, JSON.stringify(jobs, null, 2), "utf-8");
}

// ── KV layer (production) ────────────────────────────────────────────────────

async function kvGetJobs(): Promise<Job[]> {
  const data = await kv.get<Job[]>(KV_KEY);
  if (!data) {
    // First run: seed KV from the checked-in JSON file
    const seed = readJsonFile();
    await kv.set(KV_KEY, seed);
    return seed;
  }
  return data;
}

async function kvSetJobs(jobs: Job[]): Promise<void> {
  await kv.set(KV_KEY, jobs);
}

// ── Public API ───────────────────────────────────────────────────────────────

/** Returns all jobs sorted newest-first. */
export async function getAllJobs(): Promise<Job[]> {
  const jobs = isKvAvailable() ? await kvGetJobs() : readJsonFile();
  return [...jobs].sort(
    (a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime()
  );
}

/** Returns up to `limit` featured jobs for the homepage hero card. */
export async function getFeaturedJobs(limit = 4): Promise<Job[]> {
  const all = await getAllJobs();
  return all.filter((j) => j.featured).slice(0, limit);
}

/** Creates a new job and persists it. Returns the created job. */
export async function createJob(data: Omit<Job, "id" | "posted">): Promise<Job> {
  const all  = await getAllJobs();
  const job: Job = {
    ...data,
    id:     `job-${Date.now()}`,
    posted: new Date().toISOString().split("T")[0],
  };
  const updated = [job, ...all];
  if (isKvAvailable()) {
    await kvSetJobs(updated);
  } else {
    writeJsonFile(updated);
  }
  return job;
}

/** Removes a job by id. Returns true if found and removed. */
export async function deleteJob(id: string): Promise<boolean> {
  const all  = await getAllJobs();
  const next = all.filter((j) => j.id !== id);
  if (next.length === all.length) return false;
  if (isKvAvailable()) {
    await kvSetJobs(next);
  } else {
    writeJsonFile(next);
  }
  return true;
}

/** Toggles the featured flag on a job. Returns the updated job or null. */
export async function toggleFeatured(id: string): Promise<Job | null> {
  const all = await getAllJobs();
  const idx = all.findIndex((j) => j.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], featured: !all[idx].featured };
  if (isKvAvailable()) {
    await kvSetJobs(all);
  } else {
    writeJsonFile(all);
  }
  return all[idx];
}
