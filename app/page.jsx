"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/constants/data";
import Navbar    from "@/components/Navbar";
import Footer    from "@/components/Footer";
import Home      from "@/components/sections/Home";
import About     from "@/components/sections/About";
import Skills    from "@/components/sections/Skills";
import Services  from "@/components/sections/Services";
import Projects  from "@/components/sections/Projects";
import Contact   from "@/components/sections/Contact";

export default function Page() {
  const [active, setActive] = useState("home");

  // ── Smooth scroll helper ──
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  // ── Track active section on scroll ──
  useEffect(() => {
    const onScroll = () => {
      for (const sec of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(sec.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sec.toLowerCase());
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar active={active} scrollTo={scrollTo} />

      <main>
        <Home      scrollTo={scrollTo} />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
