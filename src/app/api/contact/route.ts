import { NextResponse } from "next/server";

// This API route is not used by the contact form (the form is handled
// client-side) and is not compatible with static export (`output: "export"`).
// It's kept as a static-export-friendly placeholder so the build doesn't fail.
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
