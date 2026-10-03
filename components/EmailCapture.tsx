"use client";

import { useState } from "react";

/**
 * Email capture. POSTs to /api/subscribe.
 *
 * The form stays hidden until an email provider is wired up
 * (set NEXT_PUBLIC_EMAIL_ENABLED=true AND connect a real provider
 * in app/api/subscribe/route.ts). A form that errors on submit
 * must never be visible to the public.
 */
export default function EmailCapture({
  heading = "Get tax-season reminders",
  subheading = "We'll email you before the filing deadline with a checklist for claiming this deduction. No spam, unsubscribe anytime.",
}: {
  heading?: string;
  subheading?: string;
}) {
  if (process.env.NEXT_PUBLIC_EMAIL_ENABLED !== "true") return null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("done");
        setMessage(json.message ?? "You're on the list!");
      } else {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Try again later.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again later.");
    }
  }

  if (status === "done") {
    return (
      <div className="card my-10 border-emerald-200 bg-emerald-50 p-6">
        <p className="font-semibold text-emerald-900">You're in! ✅</p>
        <p className="mt-1 text-sm text-emerald-800">{message}</p>
      </div>
    );
  }

  return (
    <section className="card my-10 p-6" aria-label="Email signup">
      <h2 className="text-xl font-bold text-neutral-900">{heading}</h2>
      <p className="mt-2 text-sm text-neutral-600">{subheading}</p>
      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="ec-name">Name</label>
        <input
          id="ec-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 rounded-md border border-neutral-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
        />
        <label className="sr-only" htmlFor="ec-email">Email</label>
        <input
          id="ec-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md border border-neutral-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 disabled:opacity-50"
        >
          {status === "sending" ? "Joining…" : "Notify me"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-700">{message}</p>
      )}
      <p className="mt-2 text-xs text-neutral-500">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </section>
  );
}
