"use client";

import { useState } from "react";
import { ABOUT_META, RESUME_URL, RESUME_DOWNLOAD_NAME } from "@/constants/data";
export default function About() {
  const [open, setOpen] = useState(false);
  return (
    <section id="about" className="pf-section pf-bg-white">
      <div className="pf-wrap">
        <div className="pf-about-grid">
          {/* ── Image Placeholder ── */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 200,
                height: 260,
                borderRadius: 20,
                background: "linear-gradient(155deg, #CCC 0%, #1A1A1A 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 80,
                fontWeight: 800,
                color: "rgba(255,255,255,0.88)",
                position: "relative",
              }}
            >
              P
              <div
                style={{
                  position: "absolute",
                  inset: -10,
                  borderRadius: 26,
                  border: "1.5px dashed rgba(200,168,106,0.4)",
                }}
              />
            </div>
          </div>
          {/* ── Text Content ── */}
          <div>
            <p className="pf-sec-label">Get To Know Me</p>
            <h2 className="pf-sec-title">About Me</h2>
            <div className="pf-divider" />
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: 15, marginBottom: 18 }}>
              Hey! I'm <strong>Prabha</strong>, a Developer from Chennai, Tamil Nadu.
              I love building clean, performant web applications and ML models that solve real problems.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: 15, marginBottom: 32 }}>
              Versatile Software Engineer with expertise across AI/ML, software development, full-stack engineering, 
              and hands-on experience in banking data engineering and ETL operations. Experienced in building 
              intelligent models, scalable applications, and data-driven systems, with a strong interest in 
              solving real-world problems through software, automation, and innovation..
            </p>
            {/* Meta Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 32,
              }}
            >
              {ABOUT_META.map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: 11, color: "#AAA" }}>{label}</p>
                  <p style={{ fontSize: 14.5 }}>{value}</p>
                </div>
              ))}
            </div>
            {/* Buttons */}
            <div className="pf-about-btns">
              <button className="pf-btn-dark" onClick={() => setOpen(true)}>
                Preview CV 👁
              </button>
              <a
                href={RESUME_URL}
                download={RESUME_DOWNLOAD_NAME}
                className="pf-btn-outline"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ── Modal ── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div className="pf-cv-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#000",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                borderRadius: 6,
              }}
            >
              ✕
            </button>
            {/* PDF Preview */}
            {/* Phones often can't show PDFs inside a page → offer a new tab */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="pf-cv-newtab"
            >
              Open in new tab ↗
            </a>
            <iframe
              src={RESUME_URL}
              title="Resume preview"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}