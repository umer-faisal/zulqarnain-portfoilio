import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden text-center bg-[#263314]"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      {/* 1. Base Background Layer (Nature park trees & grass) */}
      <div className="hero-bg-layer absolute inset-x-0 top-0 bottom-[-60px] translate-y-[25px] md:translate-y-[40px] z-0 select-none pointer-events-none">
        <Image
          src="/images/bg.png"
          alt="ZS.Production Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top] select-none pointer-events-none"
        />
      </div>

      {/* 2. Content Layer: Unobscured typography matching reference image */}
      <div className="hero-content relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center pt-[calc(var(--header-height)+0.5rem)] sm:pt-[calc(var(--header-height)+0.8rem)] px-4 pointer-events-auto">
        <p
          className="hero-overline mb-1.5 sm:mb-2 font-label text-[0.78rem] md:text-[clamp(0.85rem,1.25vw,1.15rem)] font-medium tracking-[0.16em] md:tracking-[0.22em] uppercase text-center text-brand-yellow drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          data-hero
        >
          Inside the world of
        </p>

        {/* Title and Side Subtitles */}
        <div className="hero-name relative w-full max-w-4xl mx-auto flex flex-col items-center text-center" data-hero>
          <h1
            id="hero-title"
            className="hero-title font-label font-extrabold text-[clamp(1.6rem,7.5vw,2.7rem)] md:text-[clamp(2.4rem,6.4vw,6.2rem)] leading-[1.15] tracking-[0.12em] md:tracking-[0.16em] uppercase m-0 p-0 text-[#ef4444] text-center whitespace-nowrap drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)]"
          >
            ZS.Production
          </h1>

          {/* Subtitles flanking either side of the filmmaker's head */}
          <div className="hero-subtitles w-full flex justify-between items-center mt-1 sm:mt-1.5 px-1 sm:px-6 md:px-14 font-editorial text-[clamp(0.72rem,3.2vw,0.95rem)] md:text-[clamp(0.95rem,1.7vw,1.55rem)] leading-snug tracking-wide text-brand-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            <span className="subtitle-left text-left">Creat with me</span>
            <span className="subtitle-right text-right">Creat with me</span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Scroll Cue */}
      <div className="hero-footer relative z-20 w-full flex flex-col items-center pb-6 mt-auto pointer-events-auto">
        <a
          className="scroll-cue inline-flex items-center gap-2 font-label text-xs md:text-sm uppercase tracking-widest text-brand-white hover:text-brand-yellow transition-colors drop-shadow"
          href="#about"
        >
          Scroll to step inside <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
