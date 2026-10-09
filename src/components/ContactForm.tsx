"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Button } from "./Button";
import styles from "./ui.module.css";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: "", email: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  function validate(next: Fields): Errors {
    const e: Errors = {};
    if (!next.name.trim()) e.name = "Name is required.";
    if (!next.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) e.email = "Enter a valid email.";
    if (!next.message.trim()) e.message = "Message is required.";
    else if (next.message.trim().length < 10) e.message = "Add a bit more detail (10+ characters).";
    return e;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const subject = encodeURIComponent(`Lumenden: message from ${fields.name}`);
    const body = encodeURIComponent(`${fields.message}\n\n${fields.name}\n${fields.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={fields.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={errors.name ? styles.fieldError : undefined}
          disabled={status === "loading"}
          onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
        />
        {errors.name ? (
          <p id="name-error" className={styles.errorText} role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? styles.fieldError : undefined}
          disabled={status === "loading"}
          onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
        />
        {errors.email ? (
          <p id="email-error" className={styles.errorText} role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={errors.message ? styles.fieldError : undefined}
          disabled={status === "loading"}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
        />
        {errors.message ? (
          <p id="message-error" className={styles.errorText} role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? "Opening mail…" : "Send message"}
      </Button>

      {status === "sent" ? (
        <p className={styles.formNote} role="status">
          Your mail client should open with the message ready. If it doesn&apos;t, email{" "}
          <a href={site.links.email}>{site.email}</a> directly.
        </p>
      ) : (
        <p className={styles.formNote}>
          Submits via your email client to {site.email}.
        </p>
      )}
    </form>
  );
}
