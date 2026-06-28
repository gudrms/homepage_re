"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

type Item = { image: string; label: string };

export default function CertGallery({
  items,
  downloadLabel,
  closeLabel,
}: {
  items: Item[];
  downloadLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const cur = open !== null ? items[open] : null;
  const fileName = cur
    ? `${cur.label}${cur.image.slice(cur.image.lastIndexOf("."))}`
    : "";

  return (
    <>
      <div className="certi-grid">
        {items.map((c, i) => (
          <Reveal key={i} delay={i * 60} className="certi-card">
            <button
              type="button"
              className="certi-open"
              onClick={() => setOpen(i)}
              aria-label={c.label}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.label} loading="lazy" />
            </button>
            <p>{c.label}</p>
          </Reveal>
        ))}
      </div>

      {cur && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={cur.label}
          onClick={() => setOpen(null)}
        >
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setOpen(null)} aria-label={closeLabel}>
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lb-img" src={cur.image} alt={cur.label} />
            <div className="lb-bar">
              <span className="lb-label">{cur.label}</span>
              <a className="lb-dl" href={cur.image} download={fileName}>
                ↓ {downloadLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
