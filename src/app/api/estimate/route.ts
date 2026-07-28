import { NextResponse } from "next/server";
import { validateEstimateForm, MAX_PHOTOS, MAX_PHOTO_SIZE_MB } from "@/lib/validation";

export const runtime = "nodejs";

/**
 * Handles submissions from the "Free In-Home Estimate" form.
 *
 * TODO before going live: this currently validates the submission and logs it
 * server-side, but does NOT send an email or persist the lead anywhere durable
 * — there is no email provider configured yet. Before launch, wire this up to
 * a transactional email service such as Resend (https://resend.com) or
 * SendGrid: send the parsed fields + photo attachments to `info@trademarkflooring.ca`
 * (see src/lib/site.ts), using an API key stored in a Vercel environment
 * variable (never commit it). Until then, leads submitted through this form
 * will NOT reach anyone — the call and email CTA buttons are fully functional
 * in the meantime.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const values = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      address: String(formData.get("address") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      description: String(formData.get("description") ?? ""),
    };

    const errors = validateEstimateForm(values);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const photos = formData.getAll("photos").filter((p): p is File => p instanceof File && p.size > 0);

    if (photos.length > MAX_PHOTOS) {
      return NextResponse.json(
        {
          ok: false,
          errors: { photos: `Please attach up to ${MAX_PHOTOS} photos.` },
        },
        { status: 400 }
      );
    }

    const maxBytes = MAX_PHOTO_SIZE_MB * 1024 * 1024;
    const oversized = photos.find((p) => p.size > maxBytes);
    if (oversized) {
      return NextResponse.json(
        {
          ok: false,
          errors: {
            photos: `"${oversized.name}" is over ${MAX_PHOTO_SIZE_MB}MB. Please use smaller files.`,
          },
        },
        { status: 400 }
      );
    }

    // Placeholder for the real lead notification (see TODO above).
    console.log("[estimate-request] New lead received:", {
      ...values,
      photoCount: photos.length,
      photoNames: photos.map((p) => p.name),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[estimate-request] Failed to process submission:", error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
