import Scribble from "@/components/ui/Scribble";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Introduction() {
  return (
    <section
      id="about"
      className="statement stories-statement relative min-h-[75svh] md:min-h-[calc(100svh-5.5rem)] px-5 sm:px-6 py-16 md:py-24 flex flex-col items-center justify-center text-center bg-[#0052B4] text-white"
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <ScrollReveal delay={0}>
        <span className="section-index absolute top-6 left-5 md:top-8 md:left-8 font-label text-xs md:text-sm uppercase tracking-wider text-white/80">
          01 / About
        </span>
      </ScrollReveal>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Eyebrow */}
        <ScrollReveal delay={0}>
          <p className="statement-lead font-label text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-white/90 font-medium mb-2 sm:mb-3">
            ABOUT ME
          </p>
        </ScrollReveal>

        {/* Main Display Headline */}
        <ScrollReveal delay={100}>
          <h2
            id="about-title"
            className="mega font-label font-bold text-[clamp(2.2rem,8.5vw,7.5rem)] leading-[0.95] uppercase tracking-tight text-white m-0 text-center"
          >
            <span className="inline-block">ZULQARNAIN</span>{" "}
            <span className="inline-block">SAYA.</span>
          </h2>
        </ScrollReveal>

        {/* Yellow Wave Divider */}
        <ScrollReveal delay={150}>
          <Scribble className="my-4! sm:my-6!" />
        </ScrollReveal>

        {/* About Bio Block */}
        <ScrollReveal delay={200}>
          <p className="section-copy font-body font-normal text-sm sm:text-base md:text-[1.05rem] leading-relaxed text-white/90 max-w-2xl mx-auto mt-2">
            I am Zulqarnain Saya, a filmmaker, videographer, and editor behind
            ZS.Productions. From planning the first frame to the final cut, I focus
            on capturing real moments and turning them into visuals that actually
            make people feel something. Whether it is brand films, event coverage,
            or short-form reels, every project is built with intent, rhythm, and
            clean storytelling.
          </p>
        </ScrollReveal>

        {/* Highlight Pills */}
        <ScrollReveal delay={250}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 max-w-2xl mx-auto">
            <span className="inline-flex items-center border border-white/25 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-label tracking-wide text-white/90 bg-white/5">
              Direction &amp; Cinematography
            </span>
            <span className="inline-flex items-center border border-white/25 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-label tracking-wide text-white/90 bg-white/5">
              Video Editing &amp; Color
            </span>
            <span className="inline-flex items-center border border-white/25 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-label tracking-wide text-white/90 bg-white/5">
              Brand &amp; Event Films
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
