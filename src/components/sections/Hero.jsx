import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative min-h-screen w-full flex flex-col justify-between overflow-hidden text-center bg-[#263314]"
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
          className="object-cover object-[55%_center] md:object-center select-none pointer-events-none"
        />

        {/* 2. Subtle top-down dark gradient overlay for text readability without darkening subject */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* 3. Top-Centered Typography Composition (positioned cleanly above subject's head) */}
      <div className="hero-content relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center pt-20 md:pt-24 px-4 pointer-events-auto">
        {/* Eyebrow Text */}
        <p
          className="hero-overline font-body text-[clamp(0.65rem,1.1vw,0.95rem)] uppercase tracking-[0.25em] text-[#F3F0B5] text-center font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] m-0 mb-2 sm:mb-2.5"
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
            className="hero-title font-japanese text-[#D91E18] uppercase tracking-[0.12em] text-[clamp(2rem,6.5vw,6.5rem)] leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] m-0 p-0 text-center whitespace-nowrap"
          >
            ZS.PRODUCTION
          </h1>

          {/* Split Sub-Taglines directly below main headline */}
          <div className="hero-subtitles w-full flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 mt-2 sm:mt-2.5 font-body text-[#FFFFFF] text-[clamp(0.75rem,1.25vw,1.1rem)] tracking-[0.12em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="subtitle-left text-center sm:text-left whitespace-nowrap">
              Capturing stories
            </span>
            <span className="subtitle-right text-center sm:text-right whitespace-nowrap">
              Creating feelings
            </span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Scroll Cue */}
      <div
        className="hero-footer relative z-20 w-full flex flex-col items-center pb-6 mt-auto pointer-events-auto"
        data-hero
      >
        <a
          className="scroll-cue inline-flex items-center gap-2 font-body text-xs md:text-sm uppercase tracking-widest text-[#FFFFFF] hover:text-[#fff21f] transition-colors drop-shadow"
          href="#about"
        >
          Scroll to step inside <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
