"use server";

import { revalidatePath } from "next/cache";
import { createJob, deleteJob, toggleFeatured } from "@/lib/jobs";
import type { Job, JobType, Vertical } from "@/types/jobs";

// ── Create ────────────────────────────────────────────────────────────────────

export async function createJobAction(
  formData: FormData
): Promise<{ job?: Job; error?: string }> {
  const title    = (formData.get("title")    as string | null)?.trim();
  const type     = formData.get("type")     as JobType | null;
  const location = (formData.get("location") as string | null)?.trim();
  const vertical = formData.get("vertical") as Vertical | null;
  const featured = formData.get("featured") === "true";

  if (!title || !location) {
    return { error: "Title and location are required." };
  }

  const validTypes: JobType[]   = ["Contract", "C2H", "Direct"];
  const validVerts: Vertical[]  = [
    "Information Technology",
    "Life Sciences & Biotech",
    "Insurance",
  ];

  if (!type || !validTypes.includes(type)) {
    return { error: "Invalid job type." };
  }
  if (!vertical || !validVerts.includes(vertical)) {
    return { error: "Invalid vertical." };
  }

  const job = await createJob({ title, type, location, vertical, featured });
  revalidatePath("/");
  revalidatePath("/admin/jobs");
  return { job };
}

// ── Delete ────────────────────────────────────────────────────────────────────

export async function deleteJobAction(
  id: string
): Promise<{ success: boolean; error?: string }> {
  if (!id) return { success: false, error: "No id provided." };
  const ok = await deleteJob(id);
  if (!ok) return { success: false, error: "Job not found." };
  revalidatePath("/");
  revalidatePath("/admin/jobs");
  return { success: true };
}

// ── Toggle featured ───────────────────────────────────────────────────────────

export async function toggleFeaturedAction(
  id: string
): Promise<{ job?: Job; error?: string }> {
  if (!id) return { error: "No id provided." };
  const job = await toggleFeatured(id);
  if (!job) return { error: "Job not found." };
  revalidatePath("/");
  revalidatePath("/admin/jobs");
  return { job };
}
