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
      className="reels-container"
      data-reveal
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Carousel Header & Navigation Controls */}
      <div className="reels-header">
        <div className="reels-header-info">
          <span className="label reels-badge">
            <span className="live-dot" /> Live from Instagram
          </span>
          <p className="reels-subhead">
            Selected reels, commercials & visual stories in 9:16.
          </p>
        </div>

        <div className="reels-controls" aria-label="Carousel navigation">
          <button
            type="button"
            className="carousel-btn"
            onClick={() => scroll(-1)}
            aria-label="Previous reel"
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-btn"
            onClick={() => scroll(1)}
            aria-label="Next reel"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div className="reels-track" ref={trackRef} tabIndex={0} aria-label="Reels list">
        {displayReels.map((reel, index) => {
          const reelIndex = (index % reels.length) + 1;
          return (
            <button
              key={`${reel.id}-${index}`}
              type="button"
              className="reel-card"
              onClick={() => openReel(reel)}
              aria-label={`Play reel: ${reel.title}`}
            >
              <div className="reel-card-inner">
                {/* Decorative camera frame corners */}
                <span className="frame-corner corner-tl" aria-hidden="true" />
                <span className="frame-corner corner-tr" aria-hidden="true" />
                <span className="frame-corner corner-bl" aria-hidden="true" />
                <span className="frame-corner corner-br" aria-hidden="true" />

                {/* Top card bar */}
                <div className="reel-card-top">
                  <span className="label reel-index">
                    {String(reelIndex).padStart(2, "0")} {"//"} REEL
                  </span>
                  <span className="reel-pill">INSTAGRAM</span>
                </div>

                {/* Center visual with Play button */}
                <div className="reel-card-center">
                  <div className="play-trigger" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="play-icon"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="watch-cue label">Tap to watch</span>
                </div>

                {/* Bottom card info */}
                <div className="reel-card-bottom">
                  <span className="label reel-category">{reel.category}</span>
                  <h3 className="reel-title">{reel.title}</h3>
                  <p className="reel-desc">{reel.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Video Popup Modal */}
      <dialog
        ref={dialogRef}
        className="reel-modal"
        onClose={() => setActiveReel(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveReel(null);
        }}
        aria-labelledby="reel-modal-title"
      >
        {activeReel && (
          <div className="reel-modal-content">
            {/* Modal Header */}
            <div className="reel-modal-header">
              <div className="reel-modal-title-wrap">
                <span className="label reel-modal-badge">{activeReel.category}</span>
                <h3 id="reel-modal-title" className="reel-modal-title">
                  {activeReel.title}
                </h3>
              </div>

              <div className="reel-modal-actions">
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reel-ext-link label"
                  title="Open on Instagram"
                >
                  Instagram ↗
                </a>
                <button
                  type="button"
                  className="reel-close-btn label"
                  onClick={() => setActiveReel(null)}
                  aria-label="Close video player"
                >
                  Close ×
                </button>
              </div>
            </div>

            {/* Modal Video Frame */}
            <div className="reel-frame-wrap">
              {!iframeLoaded && (
                <div className="reel-skeleton" aria-hidden="true">
                  <div className="spinner" />
                  <span className="label">Loading Reel from Instagram...</span>
                </div>
              )}
              {activeShortcode ? (
                <iframe
                  key={activeShortcode}
                  src={`https://www.instagram.com/reel/${activeShortcode}/embed/`}
                  className={`reel-iframe ${iframeLoaded ? "is-loaded" : ""}`}
                  title={activeReel.title}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  onLoad={() => setIframeLoaded(true)}
                />
              ) : (
                <div className="reel-fallback">
                  <p>Could not load the embedded video player.</p>
                  <a
                    href={activeReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label cta-link"
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
