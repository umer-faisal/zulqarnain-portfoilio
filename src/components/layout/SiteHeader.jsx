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
    <header className="site-header fixed inset-x-0 top-0 z-50 h-[4.5rem] md:h-[5.5rem] flex items-center justify-between md:justify-start px-5 md:px-8 gap-4 bg-brand-blue bg-[url('/images/nav-texture.jpg')] bg-cover bg-center bg-no-repeat text-brand-white font-label uppercase border-b border-white/12 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <a
        href="#home"
        className="wordmark inline-flex items-center gap-2 md:gap-2.5 text-xs md:text-sm font-label tracking-wide whitespace-nowrap text-brand-white hover:text-brand-yellow transition-colors"
        aria-label="ZS.Productions home"
        onClick={() => setOpen(false)}
      >
        <BrandLogo priority />
        <span>ZS.Productions</span>
      </a>
      <span className="studio-badge hidden min-[1001px]:flex items-center gap-2 border border-white/25 rounded-full px-3 py-1 text-[0.72rem] lowercase tracking-normal text-brand-white">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" /> Shoot. Edit. Create.
      </span>
      <button
        ref={toggle}
        className="menu-toggle md:hidden bg-transparent p-2.5 font-label text-sm uppercase tracking-wider text-brand-white cursor-pointer"
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
        className={
          open
            ? "main-nav is-open fixed inset-x-0 top-[4.5rem] bottom-0 flex flex-col gap-4 p-8 bg-brand-blue bg-[url('/images/nav-texture.jpg')] bg-cover bg-center text-3xl font-label uppercase z-50 md:static md:inset-auto md:ml-auto md:flex md:flex-row md:gap-7 md:p-0 md:bg-none md:text-sm"
            : "main-nav hidden md:ml-auto md:flex md:flex-row md:gap-7 text-sm font-label uppercase text-brand-white"
        }
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={close}
            className="group relative py-2.5 md:py-2 flex justify-between md:inline-flex items-center border-b border-white/25 md:border-b-0 hover:text-brand-yellow transition-colors"
          >
            {item.label}
            <span aria-hidden="true" className="inline md:hidden text-brand-yellow">
              ↗
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}
