"use client";

import { SKILLS, EXTRA_SKILLS } from "@/constants/data";

export default function Skills() {
  return (
    <section id="skills" className="pf-section">
      <div className="pf-wrap">

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="pf-sec-label">What I Know</p>
          <h2 className="pf-sec-title">My Skills</h2>
          <div className="pf-divider pf-divider-center" />
        </div>

        {/* ── Skill Bars ── */}
        <div className="pf-skills-grid">
          {SKILLS.map(({ name, level }) => (
            <div key={name}>
              <div
                style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}
              >
                <span style={{ fontSize: 13.5, fontWeight: 500 }}>{name}</span>
                <span style={{ fontSize: 12.5, color: "#C8A86A", fontWeight: 600 }}>
                  {level}%
                </span>
              </div>
              <div
                style={{ height: 3.5, background: "#E5E3DC", borderRadius: 2 }}
              >
                <div
                  style={{
                    width: `${level}%`,
                    height: "100%",
                    borderRadius: 2,
                    background: "#1A1A1A",
                    // Tip: animate this with useEffect + IntersectionObserver
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Extra Skills Tags ── */}
        <p
          style={{
            fontSize: 11,
            color: "#AAA",
            letterSpacing: 2.5,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Also familiar with
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {EXTRA_SKILLS.map((t) => (
            <span key={t} className="pf-tag">
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
