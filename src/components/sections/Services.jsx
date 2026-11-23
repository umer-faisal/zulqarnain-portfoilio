import { site } from "@/config/site";
import Scribble from "@/components/ui/Scribble";
import BrandLogo from "@/components/ui/BrandLogo";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  const capabilities = [
    "Concept",
    "Direction",
    "Film",
    "Photography",
    "Editing",
    "Colour",
    "Sound",
  ];

  return (
    <section
      id="services"
      className="services-contact-section relative px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-[#0052B4] text-brand-white scroll-mt-0 overflow-hidden flex flex-col items-center justify-center text-center"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      {/* Anchor for Navbar Contact link */}
      <div
        id="contact"
        className="absolute top-0 left-0 scroll-mt-18 md:scroll-mt-22 pointer-events-none"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <ScrollReveal delay={0}>
          <p className="font-label text-xs md:text-sm uppercase tracking-wider text-brand-yellow mb-4 md:mb-6 block">
            03 / The craft &amp; your next story
          </p>
        </ScrollReveal>

        {/* Studio Disciplines / Capabilities Strip */}
        <ScrollReveal delay={100}>
          <div
            className="capabilities flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 md:mb-12 font-label text-xs sm:text-sm uppercase tracking-wider"
            aria-label="Studio disciplines"
          >
            {capabilities.map((item) => (
              <span
                key={item}
                className="border border-white/25 rounded-full px-4 py-1.5 bg-white/5 text-white/90 transition-colors hover:border-brand-yellow hover:text-brand-yellow"
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Main Display Headline */}
        <ScrollReveal delay={150}>
          <h2
            id="contact-title"
            className="editorial font-editorial font-normal text-[clamp(2.6rem,7.5vw,6rem)] leading-tight tracking-tight m-0 text-white"
          >
            Have a spark?
            <br />
            Let’s make <em className="not-italic text-brand-yellow">something.</em>
          </h2>
        </ScrollReveal>

        {/* Yellow Wave Divider */}
        <ScrollReveal delay={180}>
          <Scribble className="my-4! sm:my-6!" />
        </ScrollReveal>

        {/* Descriptive Subtext */}
        <ScrollReveal delay={220}>
          <p className="section-copy font-body font-normal text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto text-white/90 m-0">
            A film. A photograph. An idea that won’t leave you alone.
            <br className="hidden sm:inline" /> Good stories start with a conversation. Let’s bring yours into focus.
          </p>
        </ScrollReveal>

        {/* Action CTAs */}
        <ScrollReveal delay={250}>
          <div className="contact-actions flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 md:mt-10">
            <a
              href="https://wa.me/923061060224?text=Hi%20Zulqarnain%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ZS.Productions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-yellow text-brand-dark font-label text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-lg hover:bg-amber-200 hover:text-[#0052B4] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Start a conversation</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zulqarnain-saya-0b6a96241/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 border border-white/40 bg-transparent text-white font-label text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-amber-200 hover:border-amber-200 hover:text-[#0052B4] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Connect on LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Social Links Strip */}
        {site.socials && site.socials.length > 0 && (
          <ScrollReveal delay={300}>
            <div className="contact-socials flex items-center justify-center gap-6 mt-8 font-label text-xs uppercase tracking-wider text-white/70">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Subtle Signature Emblem */}
        <ScrollReveal delay={350}>
          <span
            className="contact-signature block mt-10 md:mt-12 -mb-4 font-editorial text-brand-yellow/30 text-5xl md:text-7xl select-none"
            aria-hidden="true"
          >
            <BrandLogo priority />
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}
