"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/data/studio";

export default function Hero() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (number) => {
    setOpenItem((prev) => (prev === number ? null : number));
  };

  const activeService = services.find((s) => s.number === openItem);

  return (
    <section
      id="home"
      className="hero relative min-h-screen md:min-h-[calc(100vh-5.5rem)] mt-18 md:mt-22 w-full flex flex-col justify-between overflow-hidden text-center bg-[#263314] scroll-mt-0"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      {/* 1. Full-bleed Single Background Image with Responsive Framing */}
      <div className="hero-bg-layer absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/bg.png"
          alt="ZS.Production Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_top] md:object-top select-none pointer-events-none"
        />

        {/* 2. Subtle top-down dark gradient overlay for text readability without darkening subject */}
        <div
          className="absolute inset-0 bg-linear-to-b from-black/55 via-black/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* 3. Top-Centered Typography Composition (positioned cleanly above subject's head) */}
      <div className="hero-content relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center pt-4 md:pt-6 px-4 pointer-events-auto">
        {/* Eyebrow Text */}
        <p
          className="hero-overline font-body text-[clamp(0.65rem,1.1vw,0.95rem)] uppercase tracking-[0.25em] text-[#F3F0B5] text-center font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] m-0 mb-1.5 sm:mb-2"
          data-hero
        >
          INSIDE THE WORLD OF
        </p>

        {/* Main Headline & Sub-Taglines Container */}
        <div
          className="hero-name w-fit max-w-full mx-auto flex flex-col items-stretch text-center"
          data-hero
        >
          <h1
            id="hero-title"
            className="hero-title font-japanese text-[#D91E18] uppercase tracking-[0.12em] text-[clamp(1.8rem,5.2vw,4.8rem)] leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] m-0 p-0 text-center whitespace-nowrap"
          >
            ZS.PRODUCTION
          </h1>

          {/* Split Sub-Taglines directly below main headline - side-by-side on all screens */}
          <div className="hero-subtitles flex flex-row items-center justify-between w-full max-w-[92vw] sm:max-w-2xl mx-auto mt-2 font-body text-white text-[11px] sm:text-sm md:text-base tracking-[0.12em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="subtitle-left text-left whitespace-nowrap">
              Capturing stories
            </span>
            <span className="subtitle-right text-right whitespace-nowrap">
              Creating feelings
            </span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Glassmorphic Process Bar (Low-profile, full-width, 3-column on all screens) */}
      <div
        className="hero-process-bar relative z-20 w-full mt-auto bg-black/55 backdrop-blur-md border-t border-white/15 pointer-events-auto"
        data-hero
      >
        {/* Expanded Description Drawer (opens cleanly above the 3-column bar) */}
        {activeService && (
          <div className="w-full bg-black/75 backdrop-blur-md border-b border-white/15 px-4 sm:px-6 py-3 text-left transition-all">
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="font-label font-bold text-xs sm:text-sm text-brand-yellow">
                  {activeService.number}
                </span>
                <span className="font-label font-bold text-xs sm:text-sm uppercase tracking-wide text-white">
                  {activeService.title}
                </span>
                <span className="hidden sm:inline font-label text-[0.68rem] tracking-wider uppercase text-white/60 ml-1.5">
                  — {activeService.detail}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpenItem(null)}
                className="text-white/70 hover:text-brand-yellow font-label text-sm sm:text-base leading-none p-1 cursor-pointer transition-colors"
                aria-label="Close details"
              >
                ×
              </button>
            </div>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-white/90 m-0 max-w-3xl">
              {activeService.description}
            </p>
            {activeService.items && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {activeService.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block text-[0.6rem] sm:text-xs font-label uppercase tracking-wider text-brand-yellow/90 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3-Column Bar (Always side-by-side in a single row on mobile, tablet & desktop) */}
        <div className="grid grid-cols-3 divide-x divide-white/15 w-full">
          {services.map((service) => {
            const isOpen = openItem === service.number;
            return (
              <div
                key={service.number}
                className={`flex flex-col justify-center transition-colors ${
                  isOpen ? "bg-white/8" : "hover:bg-white/4"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(service.number)}
                  className="w-full text-left px-2 py-2.5 sm:px-5 sm:py-3.5 flex items-center justify-between gap-1.5 sm:gap-3 cursor-pointer select-none bg-transparent border-0 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-yellow/50 group"
                  aria-expanded={isOpen}
                >
                  {/* Left: Yellow index number + bold white title */}
                  <div className="flex items-center gap-1 sm:gap-2.5 min-w-0">
                    <span className="font-label font-bold text-[11px] sm:text-xs md:text-sm text-brand-yellow shrink-0">
                      {service.number}
                    </span>
                    <span className="font-label font-bold text-[10px] sm:text-xs md:text-sm leading-tight tracking-wide uppercase text-white truncate">
                      {service.title}
                    </span>
                  </div>

                  {/* Right: Small uppercase micro-label (hidden on mobile, visible on desktop) + a + / × toggle button */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-1">
                    <span className="hidden lg:inline font-label text-[0.62rem] sm:text-[0.68rem] tracking-wider uppercase text-white/60">
                      {service.detail}
                    </span>
                    <span
                      className="font-label text-xs sm:text-base md:text-lg leading-none font-light text-white/75 group-hover:text-brand-yellow w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center transition-colors"
                      aria-hidden="true"
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
