import { ContactForm } from "@/components/ContactForm";
import { ContactIcon } from "@/components/ContactIcon";
import { Reveal } from "@/components/Reveal";
import { contacts, profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mt-16 scroll-mt-8"
    >
      <Reveal>
        <h2 id="contact-heading" className="text-lg font-medium">
          Contact
        </h2>
        <p className="mt-2 text-sm text-muted">
          Have a project in mind or just want to say hi? Send a message.
        </p>

        <div className="mt-6 space-y-10">
          <div>
            <ContactForm email={profile.email} />
          </div>

          <ul className="grid gap-4 sm:grid-cols-2" aria-label="Social links">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  {...(contact.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 rounded text-sm transition-transform duration-200 hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-foreground/10 text-muted transition duration-200 group-hover:scale-110 group-hover:border-accent group-hover:text-accent motion-reduce:transform-none motion-reduce:transition-none">
                    <ContactIcon name={contact.icon} className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-muted">{contact.label}</span>
                    <span className="break-words underline-offset-4 group-hover:text-accent group-hover:underline">
                      {contact.handle}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
