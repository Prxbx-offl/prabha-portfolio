"use client";

import { useState } from "react";
import { SERVICES } from "@/constants/data";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="services" className="pf-section pf-bg-white">
      <div className="pf-wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="pf-sec-label">What I Offer</p>
          <h2 className="pf-sec-title">My Services</h2>
          <div className="pf-divider pf-divider-center" />
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map(({ icon, title, desc, example }, i) => (
            <div key={i} className="pf-card">
              
              <div style={{ fontSize: 28, color: "#C8A86A", marginBottom: 18 }}>
                {icon}
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 12 }}>
                {title}
              </h3>

              <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.8 }}>
                {desc}
              </p>

              {/* 👇 Show example only when clicked */}
              {activeIndex === i && (
                <ul
                  style={{
                    marginTop: 12,
                    paddingLeft: 18,
                    color: "#444",
                  }}
                >
                  {example.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: 13,
                        marginBottom: 6,
                        listStyleType: "none",
                        position: "relative",
                        paddingLeft: 14,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 6,
                          width: 6,
                          height: 6,
                          background: "#C8A86A",
                          borderRadius: "50%",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Toggle Button */}
              <p
                onClick={() => toggleCard(i)}
                style={{
                  marginTop: 20,
                  fontSize: 13,
                  color: "#C8A86A",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {activeIndex === i ? "Show less ↑" : "Learn more →"}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}