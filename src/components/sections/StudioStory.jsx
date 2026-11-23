import { stories } from "@/data/studio";
import Scribble from "@/components/ui/Scribble";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StudioStory() {
  return (
    <div className="bg-brand-deep text-brand-white">
      {stories.map((story) => (
        <section
          className="story-panel min-h-[75svh] md:min-h-[90svh] flex items-center px-6 py-20 md:py-28"
          key={story.number}
          aria-labelledby={`story-${story.number}`}
        >
          <div className="story-content w-full max-w-244 mx-auto">
            <ScrollReveal delay={0}>
              <span className="story-number block font-label text-xs md:text-sm uppercase tracking-wider text-brand-yellow mb-6 md:mb-8">
                Behind the frame / {story.number}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2
                id={`story-${story.number}`}
                className="editorial font-editorial font-normal text-[clamp(2.6rem,9vw,4rem)] md:text-[clamp(2.75rem,5.5vw,6.5rem)] leading-[1.2] md:leading-[1.18] tracking-tight m-0"
              >
                {story.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-copy font-label font-light text-base md:text-[clamp(1.15rem,1.75vw,1.9rem)] leading-relaxed max-w-152 mt-6 md:mt-8 text-white/75">
                {story.body}
              </p>
            </ScrollReveal>
          </div>
        </section>
      ))}
      <section
        className="manifesto statement min-h-[75svh] md:min-h-[90svh] px-6 py-20 md:py-28 flex flex-col items-center justify-center text-center relative"
        aria-labelledby="manifesto-title"
      >
        <ScrollReveal delay={0}>
          <p className="manifesto-intro font-editorial font-normal text-2xl sm:text-3xl md:text-[clamp(2rem,3.3vw,4rem)] mb-8 leading-snug">
            Some stories ask to be seen.
            <br />
            The best ones ask to be felt.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2
            id="manifesto-title"
            className="mega font-label font-bold text-[12vw] md:text-[clamp(3rem,9.5vw,12rem)] leading-none uppercase tracking-tighter m-0"
          >
            Never{" "}
            <span className="relative inline-block">
              ordinary.
              <span className="absolute inset-x-0 top-1/4 w-full block">
                <Scribble className="my-0! w-full!" />
              </span>
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="section-copy font-label font-light text-base md:text-[clamp(1.05rem,1.5vw,1.6rem)] leading-relaxed max-w-172 mx-auto mt-8 md:mt-12 text-white/90">
            We believe in images with intention. In a point of view.
            <br />
            In the details that turn a passing glance
            <br />
            into a lasting impression.
          </p>
        </ScrollReveal>
      </section>
      <section
        className="invitation statement min-h-[85svh] px-6 py-20 md:py-28 flex flex-col items-center justify-center text-center relative overflow-hidden"
        aria-labelledby="invitation-title"
      >
        <span
          className="orbit-star star-left absolute top-[9%] left-[7%] md:top-[15%] md:left-[10%] text-brand-yellow text-4xl md:text-7xl select-none pointer-events-none"
          aria-hidden="true"
          data-float
        >
          ✦
        </span>
        <span
          className="orbit-star star-right absolute bottom-[10%] right-[8%] md:bottom-[15%] md:right-[9%] text-brand-yellow text-4xl md:text-7xl select-none pointer-events-none"
          aria-hidden="true"
          data-float
        >
          ✳
        </span>
        <ScrollReveal delay={0}>
          <h2
            id="invitation-title"
            className="editorial font-editorial font-normal text-[10vw] md:text-[clamp(3rem,6.8vw,8rem)] leading-tight tracking-tight m-0"
          >
            That’s what we see.
            <br />
            That’s what we make.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="section-copy font-label font-light text-base md:text-[clamp(1.05rem,1.5vw,1.6rem)] leading-relaxed max-w-172 mx-auto mt-8 md:mt-12 text-white/90">
            If you have a story that deserves to be remembered,
            <br />
            let’s bring it into focus.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a
            className="text-link inline-block py-3 mt-8 font-label text-sm uppercase tracking-wider text-brand-yellow hover:underline underline-offset-8 transition-all"
            href="#contact"
          >
            Start a conversation ↗
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}
