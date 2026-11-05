"use client";

import Image from "next/image";
import { SOCIAL_LINKS, PROFILE_IMAGE } from "@/constants/data";

export default function Home({ scrollTo }) {
  return (
    <section
      id="home"
      style={{ minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", position: "relative" }}
    >
      {/* ── Social Sidebar (hidden on mobile via CSS) ── */}
      <div className="pf-sidebar">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="pf-social">
            {label}
          </a>
        ))}
        <div style={{ width: 1, height: 56, background: "#D5D2CA" }} />
      </div>

      {/* ── Hero Content ── */}
      <div className="pf-wrap" style={{ width: "100%" }}>
        <div className="pf-home-inner">
          {/* Text */}
          <div>
            <p className="pf-sec-label pf-fu">Hello There!</p>

            <h1 className="pf-hero-title pf-fu2">
              I'm Prabha<span style={{ color: "#C8A86A" }}>.</span>
            </h1>

            <p className="pf-hero-role pf-fu3">
              <span style={{ width: 44, height: 1.5, background: "#C8A86A", flexShrink: 0 }} />
              Software Developer
            </p>

            <p className="pf-hero-bio pf-fu3">
              I'm a passionate developer based in Chennai, building web applications and ML solutions.
            </p>

            <div className="pf-hero-btns pf-fu4">
              <button className="pf-btn-dark" onClick={() => scrollTo("contact")}>
                Say Hello ✦
              </button>
              <button className="pf-btn-outline" onClick={() => scrollTo("projects")}>
                View Work
              </button>
            </div>

            {/* Inline social row — replaces the sidebar on tablet + mobile */}
            <div className="pf-hero-social pf-fu4">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="pf-social">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar + Badges */}
          <div className="pf-avatar-wrap pf-fu2">
            <div className="pf-avatar">
              <Image
                src={PROFILE_IMAGE}
                alt="Thillai Prabakar"
                fill
                priority
                sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 210px, 260px"
                style={{ objectFit: "cover", objectPosition: "55% 62%" }}
              />
            </div>

            {/* Badges — sit BELOW the photo so they never cover it */}
            <div className="pf-badges">
              <div className="pf-badge pf-badge-proj">
                <p className="pf-badge-label" style={{ color: "#888" }}>Projects</p>
                <p className="pf-badge-value" style={{ color: "white" }}>10+</p>
              </div>
              <div className="pf-badge pf-badge-exp">
                <p className="pf-badge-label" style={{ color: "#999" }}>Experience</p>
                <p className="pf-badge-value" style={{ color: "#1A1A1A" }}>2+ Yrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Down (hidden on mobile via CSS) ── */}
      <div className="pf-scroll" onClick={() => scrollTo("about")}>
        <div
          style={{
            width: 22,
            height: 36,
            border: "1.5px solid #CCC",
            borderRadius: 11,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "6px 0",
          }}
        >
          <div
            style={{
              width: 3,
              height: 7,
              background: "#BBB",
              borderRadius: 2,
              animation: "scrollBob 1.6s ease infinite",
            }}
          />
        </div>
        Scroll Down
      </div>
    </section>
  );
}
