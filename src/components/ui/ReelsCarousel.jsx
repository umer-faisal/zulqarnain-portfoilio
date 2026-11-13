"use client";

import { useEffect, useRef, useState } from "react";
import { reels, extractInstagramId } from "@/data/reels";

export default function ReelsCarousel() {
  const [activeReel, setActiveReel] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const dialogRef = useRef(null);

  // Manage modal open/close & scroll lock
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeReel) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.showModal();

      const onKeyDown = (e) => {
        if (e.key === "Escape") {
          setActiveReel(null);
        }
      };
      window.addEventListener("keydown", onKeyDown);

      return () => {
        window.removeEventListener("keydown", onKeyDown);
        dialog.close();
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeReel]);

  // Auto-advance carousel
  useEffect(() => {
    if (activeReel || isPaused) return;

    const interval = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const card = track.querySelector(".reel-card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 24; // width + gap
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScroll - 12) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [activeReel, isPaused]);

  const openReel = (reel) => {
    setIframeLoaded(false);
    setActiveReel(reel);
  };

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.querySelector(".reel-card")?.offsetWidth || 300;
    const scrollAmount = (cardWidth + 24) * direction;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const activeShortcode = activeReel ? extractInstagramId(activeReel.url) : null;
  // Duplicate reels so carousel flows continuously across large viewports
  const displayReels = [...reels, ...reels];

  return (
    <div
      className="reels-container mt-12 md:mt-16 relative"
      data-reveal
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Carousel Header & Navigation Controls */}
      <div className="reels-header flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div className="reels-header-info">
          <span className="reels-badge inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-dark text-brand-yellow rounded-full text-[0.72rem] font-label tracking-wide uppercase">
            <span className="live-dot w-2 h-2 rounded-full bg-[#ff3366] animate-pulse" /> Live from Instagram
          </span>
          <p className="reels-subhead font-label text-xs md:text-sm uppercase tracking-wide text-brand-dark mt-2">
            Selected reels, commercials & visual stories in 9:16.
          </p>
        </div>

        <div className="reels-controls flex gap-2.5 self-end sm:self-auto" aria-label="Carousel navigation">
          <button
            type="button"
            className="carousel-btn w-12 h-12 rounded-full border border-brand-dark bg-transparent text-brand-dark text-xl flex items-center justify-center cursor-pointer hover:bg-brand-dark hover:text-brand-yellow hover:scale-105 transition-all"
            onClick={() => scroll(-1)}
            aria-label="Previous reel"
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-btn w-12 h-12 rounded-full border border-brand-dark bg-transparent text-brand-dark text-xl flex items-center justify-center cursor-pointer hover:bg-brand-dark hover:text-brand-yellow hover:scale-105 transition-all"
            onClick={() => scroll(1)}
            aria-label="Next reel"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div className="reels-track flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={trackRef} tabIndex={0} aria-label="Reels list">
        {displayReels.map((reel, index) => {
          const reelIndex = (index % reels.length) + 1;
          return (
            <button
              key={`${reel.id}-${index}`}
              type="button"
              className="reel-card shrink-0 basis-[clamp(240px,75vw,290px)] md:basis-[clamp(260px,26vw,320px)] aspect-[9/15] snap-start rounded-2xl border border-brand-dark overflow-hidden text-left cursor-pointer p-0 flex flex-col bg-brand-deep text-brand-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand-blue group"
              onClick={() => openReel(reel)}
              aria-label={`Play reel: ${reel.title}`}
            >
              <div className="reel-card-inner relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#141414]/85 to-[#0a0a0a]/98">
                {/* Decorative camera frame corners */}
                <span className="frame-corner corner-tl" aria-hidden="true" />
                <span className="frame-corner corner-tr" aria-hidden="true" />
                <span className="frame-corner corner-bl" aria-hidden="true" />
                <span className="frame-corner corner-br" aria-hidden="true" />

                {/* Top card bar */}
                <div className="reel-card-top flex justify-between items-center relative z-10">
                  <span className="reel-index text-brand-yellow font-label text-xs tracking-wider">
                    {String(reelIndex).padStart(2, "0")} {"//"} REEL
                  </span>
                  <span className="reel-pill font-label text-[0.62rem] tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-brand-white border border-white/15">INSTAGRAM</span>
                </div>

                {/* Center visual with Play button */}
                <div className="reel-card-center flex flex-col items-center justify-center gap-3 relative z-10 my-auto">
                  <div className="play-trigger w-16 h-16 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:ring-8 group-hover:ring-yellow-400/20" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="play-icon w-6 h-6 ml-0.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="watch-cue font-label text-[0.7rem] text-white/70 uppercase tracking-wider group-hover:text-brand-white transition-colors">Tap to watch</span>
                </div>

                {/* Bottom card info */}
                <div className="reel-card-bottom relative z-10">
                  <span className="reel-category font-label text-[0.68rem] text-white/70 uppercase tracking-wide block mb-1">{reel.category}</span>
                  <h3 className="reel-title font-label text-lg leading-snug uppercase tracking-wide text-brand-white mb-1.5">{reel.title}</h3>
                  <p className="reel-desc text-xs text-white/70 leading-relaxed line-clamp-2 m-0">{reel.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Video Popup Modal */}
      <dialog
        ref={dialogRef}
        className="reel-modal fixed inset-0 m-auto w-[min(440px,94vw)] h-fit max-h-[92svh] p-0 bg-[#0d0d0d] text-brand-white border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-[100] backdrop:bg-black/85 backdrop:backdrop-blur-md"
        onClose={() => setActiveReel(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveReel(null);
        }}
        aria-labelledby="reel-modal-title"
      >
        {activeReel && (
          <div className="reel-modal-content flex flex-col h-full">
            {/* Modal Header */}
            <div className="reel-modal-header flex items-center justify-between p-4 bg-[#121212] border-b border-white/10 gap-4">
              <div className="reel-modal-title-wrap min-w-0">
                <span className="reel-modal-badge font-label text-[0.65rem] text-brand-yellow uppercase tracking-wide block mb-1">{activeReel.category}</span>
                <h3 id="reel-modal-title" className="reel-modal-title font-label text-sm uppercase tracking-wide whitespace-nowrap overflow-hidden text-ellipsis m-0">
                  {activeReel.title}
                </h3>
              </div>

              <div className="reel-modal-actions flex items-center gap-3 shrink-0">
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reel-ext-link font-label text-xs text-brand-yellow underline underline-offset-4 hover:text-white transition-colors"
                  title="Open on Instagram"
                >
                  Instagram ↗
                </a>
                <button
                  type="button"
                  className="reel-close-btn font-label text-xs bg-white/10 text-brand-white border border-white/15 px-3 py-1.5 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-colors cursor-pointer"
                  onClick={() => setActiveReel(null)}
                  aria-label="Close video player"
                >
                  Close ×
                </button>
              </div>
            </div>

            {/* Modal Video Frame */}
            <div className="reel-frame-wrap relative w-full aspect-[9/16] max-h-[calc(94svh-4.5rem)] bg-black flex items-center justify-center overflow-hidden">
              {!iframeLoaded && (
                <div className="reel-skeleton absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/70 bg-[#0a0a0a]" aria-hidden="true">
                  <div className="spinner w-8 h-8 rounded-full border-2 border-white/20 border-t-brand-yellow animate-spin" />
                  <span className="font-label text-xs uppercase tracking-wider">Loading Reel from Instagram...</span>
                </div>
              )}
              {activeShortcode ? (
                <iframe
                  key={activeShortcode}
                  src={`https://www.instagram.com/reel/${activeShortcode}/embed/`}
                  className={`reel-iframe w-full h-full border-0 transition-opacity duration-300 ${iframeLoaded ? "opacity-100" : "opacity-0"}`}
                  title={activeReel.title}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  onLoad={() => setIframeLoaded(true)}
                />
              ) : (
                <div className="reel-fallback p-8 text-center">
                  <p className="mb-4">Could not load the embedded video player.</p>
                  <a
                    href={activeReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label text-xs text-brand-yellow uppercase tracking-wider underline underline-offset-4"
                  >
                    Open directly on Instagram ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
