import Scribble from "@/components/ui/Scribble";

export default function Introduction() {
  return (
    <>
      <section
        id="about"
        className="statement stories-statement relative min-h-[75svh] md:min-h-[calc(100svh-5.5rem)] px-5 py-20 md:py-24 flex flex-col items-center justify-center text-center bg-brand-blue text-brand-white"
        tabIndex={-1}
        aria-labelledby="stories-title"
      >
        <span className="section-index absolute top-6 left-5 md:top-8 md:left-8 font-label text-xs md:text-sm uppercase tracking-wider text-brand-white/80">
          01 / The studio
        </span>
        <div>
          <p className="statement-lead font-label text-lg sm:text-2xl md:text-[clamp(1.5rem,2.5vw,3rem)] leading-snug uppercase tracking-wider mb-2" data-reveal>
            We create
          </p>
          <h2
            id="stories-title"
            className="mega font-label font-bold text-[22vw] md:text-[clamp(5rem,20vw,24rem)] leading-[0.95] md:leading-[1.12] uppercase tracking-tighter m-0"
            data-reveal
          >
            Stories.
          </h2>
        </div>
        <p className="section-copy font-label font-light text-base md:text-[clamp(1.05rem,1.5vw,1.6rem)] leading-relaxed max-w-[43rem] mx-auto mt-8 md:mt-12 text-brand-white/90" data-reveal>
          An idea becomes a shot. A shot becomes a sequence.
          <br className="hidden md:inline" /> A sequence becomes a story that stays with you.
        </p>
      </section>
      <section
        className="statement craft-statement relative min-h-[65svh] md:min-h-[calc(100svh-5.5rem)] px-5 py-20 md:py-24 flex flex-col items-center justify-center text-center bg-brand-deep text-brand-white"
        aria-labelledby="craft-title"
      >
        <div data-reveal className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <p className="font-label text-xs md:text-sm uppercase tracking-wider text-brand-white/80 mb-2">
            One studio. From start to finish.
          </p>
          <h2
            id="craft-title"
            className="editorial-display font-editorial font-normal text-[12vw] md:text-[clamp(3rem,9.3vw,11rem)] leading-tight tracking-tight my-4 md:my-6"
          >
            Shoot. Edit. Create.
          </h2>
          <Scribble />
          <p className="statement-lead font-label text-base sm:text-xl md:text-[clamp(1.25rem,2.5vw,2.7rem)] text-brand-yellow uppercase tracking-wider mt-4">
            Always curious. Always creating.
          </p>
        </div>
      </section>
    </>
  );
}
