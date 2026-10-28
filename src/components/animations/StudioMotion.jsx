"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StudioMotion() {
  useEffect(() => {
    const media = gsap.matchMedia();
    let alive = true;
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero]", {
        y: 44,
        opacity: 0,
        duration: 1.3,
        stagger: 0.16,
        ease: "power3.out",
        clearProps: "all",
      });
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 48,
          opacity: 0.15,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 94%",
            toggleActions: "play none none none",
          },
          clearProps: "all",
        });
      });
      gsap.utils.toArray("[data-draw]").forEach((path) => {
        const length = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.3,
            ease: "power2.inOut",
            scrollTrigger: { trigger: path, start: "top 85%" },
          },
        );
      });
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true },
      });
    });
    media.add(
      "(min-width: 761px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.utils.toArray("[data-float]").forEach((element, index) => {
          gsap.to(element, {
            y: -45,
            rotation: index % 2 ? 12 : -5,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });
        gsap.to(".hero-portrait", {
          y: 65,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      },
    );
    const refresh = () => ScrollTrigger.refresh();
    const details = [...document.querySelectorAll("details")];
    details.forEach((element) => element.addEventListener("toggle", refresh));
    document.fonts.ready.then(() => {
      if (alive) refresh();
    });
    return () => {
      alive = false;
      details.forEach((element) =>
        element.removeEventListener("toggle", refresh),
      );
      media.revert();
    };
  }, []);
  return <div className="scroll-progress" aria-hidden="true" />;
}
