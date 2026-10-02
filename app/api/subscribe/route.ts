import { NextResponse } from "next/server";

/**
 * POST /api/subscribe
 * PLACEHOLDER email-capture endpoint.
 *
 * To go live, connect a real provider (e.g. ConvertKit, Mailchimp, Resend,
 * Buttondown) and replace this handler. See README.md "Email capture".
 */
export async function POST(request: Request) {
  let body: { name?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: send { name, email } to your email provider here.
  console.log("[subscribe:placeholder]", { name: body.name ?? "", email: body.email });

  return NextResponse.json(
    {
      error:
        "Email provider not connected yet — the site owner needs to connect ConvertKit/Mailchimp/Resend first (see README). Your details were not saved.",
    },
    { status: 501 }
  );
}
