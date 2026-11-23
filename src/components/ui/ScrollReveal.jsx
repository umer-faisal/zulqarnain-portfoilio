"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal - Zero-dependency bidirectional scroll reveal component
 *
 * Tracks scroll direction and viewport exit/enter:
 * - Scrolling DOWN into view: glides upward (`translate-y-8 opacity-0` -> `translate-y-0 opacity-100`)
 * - Scrolling UP into view: glides downward (`-translate-y-8 opacity-0` -> `translate-y-0 opacity-100`)
 * - Exiting viewport: resets hidden offset based on whether it exited above or below
 * - Respects prefers-reduced-motion: reduce
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState("down"); // "down": glide up into view; "up": glide down into view
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const onChange = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) setIsVisible(true);
    };
    mediaQuery.addEventListener("change", onChange);

    const element = ref.current;
    if (!element) {
      return () => mediaQuery.removeEventListener("change", onChange);
    }

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        lastScrollY = currentScrollY;

        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Element has left the viewport: reset its hidden offset based on whether it exited above or below
          setIsVisible(false);
          if (entry.boundingClientRect.top < 0) {
            // Exited above the viewport -> when scrolling back UP into view, glide downward
            setDirection("up");
          } else {
            // Exited below the viewport -> when scrolling DOWN into view, glide upward
            setDirection("down");
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  const hiddenOffset = direction === "up" ? "-translate-y-8" : "translate-y-8";

  const motionClasses = reducedMotion
    ? "opacity-100 translate-y-0"
    : isVisible
      ? "opacity-100 translate-y-0"
      : `${hiddenOffset} opacity-0`;

  return (
    <Component
      ref={ref}
      className={`transition-all duration-700 ease-out ${motionClasses} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible && !reducedMotion ? `${delay}ms` : "0ms",
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
