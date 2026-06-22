"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-mobile-wrapper">
      <button
        className="nav-mobile-toggle"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`nav-hamburger ${open ? "nav-hamburger-open" : ""}`} />
      </button>

      {open && (
        <nav className="nav-mobile-panel" aria-label="Navigation principale">
          {mainNav.map((section) => (
            <details key={section.href} className="nav-mobile-section">
              <summary className="nav-mobile-summary">
                {section.label}
              </summary>
              <div className="nav-mobile-links">
                {section.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="nav-mobile-link"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </nav>
      )}
    </div>
  );
}
