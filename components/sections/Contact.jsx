"use client";

import { useState } from "react";
import { CONTACT_INFO } from "@/constants/data";

// Web3Forms emails every submission to the address the key was created for.
// Get a free key at https://web3forms.com and put it in .env.local:
//   NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
// (This key is meant to be public — it can only send TO your inbox.)
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg("Contact form isn't set up yet. Please email me directly.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "Portfolio Contact Form",
          subject: `Portfolio: ${form.subject || "New message"} — from ${form.name}`,
          name: form.name,
          email: form.email,       // lets you hit "Reply" in Gmail
          replyto: form.email,
          message: form.message,
          botcheck: e.target.botcheck.checked, // honeypot: bots tick it, humans never see it
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(EMPTY);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="pf-section pf-bg-white">
      <div className="pf-wrap">
        <div className="pf-contact-grid">

          {/* ── Contact Info ── */}
          <div>
            <p className="pf-sec-label">Get In Touch</p>
            <h2 className="pf-sec-title">Contact Me</h2>
            <div className="pf-divider" />

            <p style={{ color: "#666", lineHeight: 1.85, fontSize: 15, marginBottom: 40 }}>
              Have a project in mind or want to chat? I'm always open to new opportunities
              and interesting conversations. Let's build something great together.
            </p>

            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div
                key={label}
                style={{ display: "flex", gap: 18, marginBottom: 28, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "#EEEDEA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#AAA",
                      marginBottom: 5,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ fontSize: 14.5, fontWeight: 500, overflowWrap: "anywhere" }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Contact Form ── */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Honeypot — hidden from people, filled by spam bots */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off"
              style={{ display: "none" }} />

            <input
              className="pf-input"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="pf-input"
              name="email"
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              className="pf-input"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              className="pf-input"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              minLength={10}
              style={{ resize: "vertical" }}
              value={form.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="pf-btn-dark"
              style={{ width: "fit-content", opacity: status === "sending" ? 0.7 : 1 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message ✦"}
            </button>

            {status === "success" && (
              <p className="pf-form-msg pf-form-ok" role="status">
                ✓ Thanks! Your message was sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="pf-form-msg pf-form-err" role="alert">
                {errorMsg}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
