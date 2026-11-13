import { site } from "@/config/site";
import Scribble from "@/components/ui/Scribble";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative min-h-[85svh] md:min-h-[95svh] overflow-hidden text-center px-5 py-20 md:py-28 bg-brand-deep text-brand-white flex flex-col items-center justify-center"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <p className="font-label text-xs md:text-sm uppercase tracking-wider text-brand-yellow mb-8 md:mb-12 block" data-reveal>
        04 / Your next story
      </p>
      <h2 id="contact-title" className="editorial font-editorial font-normal text-[11vw] md:text-[clamp(3rem,7vw,8rem)] leading-tight tracking-tight m-0" data-reveal>
        Have a spark?
        <br />
        Let’s make <em className="not-italic text-brand-yellow">something.</em>
      </h2>
      <Scribble />
      <p className="section-copy font-label font-light text-base md:text-[clamp(1.05rem,1.5vw,1.6rem)] leading-relaxed max-w-[43rem] mx-auto mt-6 text-white/90" data-reveal>
        A film. A photograph. An idea that won’t leave you alone.
        <br className="hidden md:inline" /> Good stories start with a conversation.
      </p>
      {site.email ? (
        <a className="contact-link inline-block mt-8 p-2 font-label text-xl sm:text-2xl md:text-[clamp(1.25rem,3vw,2.5rem)] uppercase border-b border-current hover:text-brand-yellow transition-colors break-all" href={`mailto:${site.email}`} data-reveal>
          {site.email} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <p className="contact-pending font-label text-sm uppercase tracking-wider mt-12 text-white/70" data-reveal>
          Direct enquiries — contact details coming soon.
        </p>
      )}
      <span className="contact-signature block mt-12 -mb-16 font-editorial text-brand-yellow text-6xl md:text-8xl select-none" aria-hidden="true">
        Z.S
      </span>
    </section>
  );
}
