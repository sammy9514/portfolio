import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "ogunyemiayomide700@gmail.com";

/** Set VITE_FORMSPREE_ID to post the form; otherwise it opens the user's mail client. */
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null;

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-b-2 border-ink/35 bg-transparent pb-2 text-[19px] transition-colors hover:border-ink focus:border-ballpoint focus:outline-none md:text-[21px]";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "I'd like to know who you are.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";
    if (message.length < 10) next.message = "A little more detail, please.";
    setErrors(next);
    if (Object.keys(next).length) return;

    if (!FORM_ENDPOINT) {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        `Portfolio message from ${name}`,
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-14 md:py-20">
      <h2 className="font-[Kalam] text-[30px] font-bold md:text-[46px]">
        <span className="pen-underline">Let's build something</span>
      </h2>
      <p className="mt-4 text-[19px] text-pencil md:text-[23px]">
        Open to internships, junior roles and freelance work. Fastest reply is{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-ballpoint underline decoration-dotted underline-offset-4"
        >
          email
        </a>
        .
      </p>

      <Reveal className="no-print mt-10">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="sketch-box space-y-8 p-6 md:p-10"
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-[17px] text-pencil">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={field}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-[15px] text-redpen">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-[17px] text-pencil">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={field}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-[15px] text-redpen">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-[17px] text-pencil">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${field} resize-none`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-[15px] text-redpen">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 rounded-md bg-ballpoint px-8 py-3 font-[Kalam] text-[20px] font-bold text-white transition-colors hover:bg-[#163f99] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send note"}
            <Send size={17} aria-hidden="true" />
          </button>

          <p aria-live="polite" className="text-[17px]">
            {status === "sent" && (
              <span className="flex items-center gap-1.5 text-green-700">
                <Check size={17} aria-hidden="true" />
                Thanks — I'll get back to you.
              </span>
            )}
            {status === "error" && (
              <span className="text-redpen">
                That didn't send. Email me at{" "}
                <a href={`mailto:${EMAIL}`} className="underline">
                  {EMAIL}
                </a>
                .
              </span>
            )}
          </p>
        </div>
      </form>
      </Reveal>
    </section>
  );
};

export default Contact;
