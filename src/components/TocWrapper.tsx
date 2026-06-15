"use client";

import React, { useState, useEffect } from "react";
import { TOC_ITEMS } from "@/content/data";
import { Menu, X } from "lucide-react";

export function TocWrapper() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ids = TOC_ITEMS.map((item) => item.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
        if (isBottom) {
          setActiveSection(ids[ids.length - 1]);
          return;
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isBottom) {
        setActiveSection(ids[ids.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50); // Small delay for mobile menu close
  };

  const tocList = (
    <ul className="space-y-0.5">
      {TOC_ITEMS.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`toc-link ${item.level === 3 ? "toc-link-sub" : ""} ${activeSection === item.id ? "active" : ""}`}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="toc-sidebar hidden xl:block w-64 shrink-0">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-4 pb-2"
            style={{
              color: "var(--color-burgundy)",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              borderBottom: "1px solid var(--color-parchment-darker)",
            }}
          >
            Mục Lục
          </p>
          {tocList}
        </div>
      </nav>

      {/* Mobile FAB */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="xl:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 border text-cream shadow-xl"
        style={{
          background: "linear-gradient(135deg, rgba(123, 45, 59, 0.85), rgba(92, 26, 40, 0.9))",
          borderColor: "rgba(212, 175, 55, 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        aria-label="Mở mục lục"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Drawer */}
      <div className={`mobile-toc-overlay fixed inset-0 z-50 xl:hidden ${mobileMenuOpen ? "open" : ""}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div
          className="mobile-toc-panel absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto shadow-2xl p-6 pt-8 bg-parchment text-charcoal"
        >
          <div className="flex items-center justify-between mb-6">
            <p
              className="text-xs uppercase tracking-[0.2em] font-semibold text-burgundy font-display"
            >
              Mục Lục
            </p>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-parchment-dark transition-colors" aria-label="Đóng mục lục">
              <X className="w-5 h-5" />
            </button>
          </div>
          {tocList}
        </div>
      </div>
    </>
  );
}
