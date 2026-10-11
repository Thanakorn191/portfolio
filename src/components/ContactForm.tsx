"use client";

import type { FormEvent } from "react";

type Props = {
  email: string;
};

const fieldClass =
  "mt-1.5 w-full rounded-md border border-foreground/15 bg-transparent transition-colors hover:border-foreground/30 px-3 py-2 text-sm placeholder:text-muted/60 focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/40";

// No backend: opens the visitor's email app with the message filled in.
export function ContactForm({ email }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n${name}\n${from}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="message" className="text-sm">Message</label>
        <textarea id="message" name="message" rows={5} required className={`${fieldClass} resize-y`} />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition duration-200 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Send message
      </button>
    </form>
  );
}
