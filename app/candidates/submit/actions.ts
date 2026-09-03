"use server";

import { Resend } from "resend";

export type SubmitResult =
  | { success: true }
  | { success: false; error: string };

export async function submitResumeAction(
  formData: FormData
): Promise<SubmitResult> {
  // ── Parse fields ──────────────────────────────────────────────────────────
  const name       = (formData.get("name")       as string | null)?.trim();
  const email      = (formData.get("email")      as string | null)?.trim();
  const phone      = (formData.get("phone")      as string | null)?.trim() || "—";
  const linkedin   = (formData.get("linkedin")   as string | null)?.trim() || "—";
  const vertical   = (formData.get("vertical")   as string | null)?.trim();
  const engType    = (formData.get("engType")    as string | null)?.trim() || "Open to all";
  const background = (formData.get("background") as string | null)?.trim();
  const resumeFile = formData.get("resume") as File | null;

  if (!name || !email || !vertical || !background) {
    return { success: false, error: "Please fill in all required fields." };
  }
  if (!resumeFile || resumeFile.size === 0) {
    return { success: false, error: "Please attach your resume." };
  }
  if (resumeFile.size > 5 * 1024 * 1024) {
    return { success: false, error: "Resume must be under 5 MB." };
  }
  const allowed = ["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (!allowed.includes(resumeFile.type)) {
    return { success: false, error: "Only PDF, DOC, or DOCX files are accepted." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: "Email service is not configured yet. Please email your resume directly to info@zinoit-tech.com" };
  }

  // ── Read resume into buffer ───────────────────────────────────────────────
  const buffer = Buffer.from(await resumeFile.arrayBuffer());

  // ── Build HTML email ──────────────────────────────────────────────────────
  const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">

  <!-- Header -->
  <div style="background:#0f1117;padding:28px 32px;border-radius:12px 12px 0 0;">
    <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#ff5542;">
      New Resume Submission · Zinoit Tech
    </p>
    <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;">${name}</h1>
    <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">${vertical} &nbsp;·&nbsp; ${engType}</p>
  </div>

  <!-- Details table -->
  <div style="padding:28px 32px;background:#f8fafc;border:1px solid #e2e8f0;border-top:none;">
    <table style="width:100%;border-collapse:collapse;font-size:13px;color:#334155;">
      <tr>
        <td style="padding:9px 0;color:#94a3b8;width:120px;vertical-align:top;">Email</td>
        <td style="padding:9px 0;font-weight:600;">
          <a href="mailto:${email}" style="color:#ff5542;text-decoration:none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:9px 0;color:#94a3b8;vertical-align:top;">Phone</td>
        <td style="padding:9px 0;">${phone}</td>
      </tr>
      <tr>
        <td style="padding:9px 0;color:#94a3b8;vertical-align:top;">LinkedIn</td>
        <td style="padding:9px 0;">
          ${linkedin !== "—"
            ? `<a href="${linkedin}" style="color:#ff5542;text-decoration:none;">${linkedin}</a>`
            : "—"}
        </td>
      </tr>
      <tr>
        <td style="padding:9px 0;color:#94a3b8;vertical-align:top;">Sector</td>
        <td style="padding:9px 0;font-weight:600;">${vertical}</td>
      </tr>
      <tr>
        <td style="padding:9px 0;color:#94a3b8;vertical-align:top;">Engagement</td>
        <td style="padding:9px 0;">${engType}</td>
      </tr>
    </table>

    <!-- Background -->
    <div style="margin-top:20px;padding-top:18px;border-top:1px solid #e2e8f0;">
      <p style="margin:0 0 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">
        Background
      </p>
      <p style="margin:0;font-size:14px;line-height:1.75;color:#334155;white-space:pre-wrap;">${background}</p>
    </div>

    <!-- Resume note -->
    <div style="margin-top:20px;padding:14px 16px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;">
      <p style="margin:0;font-size:13px;color:#c2410c;">
        📎 Resume attached: <strong>${resumeFile.name}</strong>
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style="padding:14px 32px;border-radius:0 0 12px 12px;background:#f1f5f9;border:1px solid #e2e8f0;border-top:none;">
    <p style="margin:0;font-size:11px;color:#94a3b8;">
      Submitted via zinoit-tech.com &nbsp;·&nbsp;
      ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles", dateStyle: "medium", timeStyle: "short" })} PT
    </p>
  </div>

</div>`;

  // ── Send via Resend ───────────────────────────────────────────────────────
  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from:        "Zinoit Tech <onboarding@resend.dev>",
      to:          "abhi.singh100631@gmail.com",
      replyTo:     email!,
      subject:     `Resume: ${name} — ${vertical}`,
      html,
      attachments: [
        {
          filename:    resumeFile.name,
          content:     buffer,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send. Please email info@zinoit-tech.com directly." };
    }

    return { success: true };
  } catch (err) {
    console.error("Resend exception:", err);
    return { success: false, error: "Failed to send. Please email info@zinoit-tech.com directly." };
  }
}
