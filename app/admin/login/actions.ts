"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME  = "zinoit_admin_session";
const COOKIE_VALUE = "authenticated";
// Max-age 8 hours in seconds
const MAX_AGE      = 60 * 60 * 8;

export async function loginAction(formData: FormData): Promise<{ error: string } | never> {
  const password = formData.get("password") as string | null;
  const from     = (formData.get("from") as string | null) || "/admin/jobs";

  const adminPassword =
    process.env.ADMIN_PASSWORD || "zinoit2024";

  if (!password || password !== adminPassword) {
    return { error: "Incorrect password. Please try again." };
  }

  cookies().set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge:   MAX_AGE,
    path:     "/",
  });

  redirect(from);
}

export async function logoutAction(): Promise<never> {
  cookies().delete(COOKIE_NAME);
  redirect("/admin/login");
}
