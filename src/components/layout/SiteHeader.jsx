"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/studio";
import BrandLogo from "@/components/ui/BrandLogo";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nav.current?.querySelector("a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const first = toggle.current;
        const last = [...nav.current.querySelectorAll("a")].at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const media = window.matchMedia("(min-width: 761px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    media.addEventListener("change", resize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  const close = (event) => {
    setOpen(false);
    document
      .querySelector(event.currentTarget.hash)
      ?.focus({ preventScroll: true });
  };
  return (
    <header className="site-header">
      <a href="#home" className="wordmark" aria-label="Z.S Productions home" onClick={() => setOpen(false)}>
        <BrandLogo priority />
        <span>Z.S Productions</span>
      </a>
      <span className="studio-badge">
        <span /> Shoot. Edit. Create.
      </span>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        ref={nav}
        id="main-nav"
        aria-label="Main navigation"
        className={open ? "main-nav is-open" : "main-nav"}
      >
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={close}>
            {item.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
