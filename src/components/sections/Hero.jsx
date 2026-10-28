import Image from "next/image";
import { site } from "@/config/site";
import HeroContact from "@/components/ui/HeroContact";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero section-blue"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <p className="hero-overline label" data-hero>
        Inside the world of
      </p>
      <div className="hero-name" data-hero>
        <span className="frame-corner corner-tl" aria-hidden="true" />
        <span className="frame-corner corner-tr" aria-hidden="true" />
        <h1 id="hero-title">Z.S Productions</h1>
        <span className="frame-corner corner-bl" aria-hidden="true" />
        <span className="frame-corner corner-br" aria-hidden="true" />
      </div>
      <div className="hero-subtitle" data-hero>
        <span>Capturing stories.</span>
        <span>Creating feelings.</span>
      </div>
      <div className="hero-stage">
        <div className="hero-stamp" data-float>
          <span className="label">A little light. A little magic.</span>
          <span>Something worth feeling.</span>
        </div>
        <div className="hero-portrait" data-hero>
          <Image
            {...site.portrait}
            alt={site.portrait.alt}
            sizes="(max-width: 760px) 80vw, 360px"
            priority
            className="portrait-image"
          />
          <HeroContact />
        </div>
        <span className="hero-star" data-float aria-hidden="true">
          ✳
        </span>
        <span className="frame-note label" aria-hidden="true">
          Scene 01 / The beginning
        </span>
      </div>
      <a className="scroll-cue label" href="#about">
        Scroll to step inside <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
