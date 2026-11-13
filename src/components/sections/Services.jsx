import { services } from "@/data/studio";

export default function Services() {
  return (
    <section
      id="services"
      className="services-section px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-brand-blue text-brand-white"
      tabIndex={-1}
      aria-labelledby="services-title"
    >
      <div className="services-heading max-w-4xl">
        <p className="font-label text-xs md:text-sm uppercase tracking-wider text-brand-yellow mb-4 md:mb-6 block" data-reveal>
          03 / The craft
        </p>
        <h2 id="services-title" className="editorial font-editorial font-normal text-[clamp(2.6rem,7vw,5.5rem)] leading-tight tracking-tight m-0" data-reveal>
          It’s the little things
          <br />
          that make the
          <br />
          <em className="not-italic text-brand-yellow">whole story.</em>
        </h2>
        <p className="body-copy font-label font-light text-base md:text-xl leading-relaxed max-w-[38rem] mt-6 text-white/75" data-reveal>
          From the first conversation to the final frame, we connect the
          thinking, the making and the finishing. One considered process. One
          clear vision.
        </p>
      </div>
      <div className="services-list mt-12 md:mt-16 border-t border-white/25">
        {services.map((service) => (
          <details
            key={service.number}
            className="service-row border-b border-white/25 group"
            open={service.number === "01"}
          >
            <summary className="flex items-center gap-4 md:gap-6 py-6 md:py-8 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
              <span className="font-label text-xs md:text-sm uppercase tracking-wider text-brand-yellow">{service.number}</span>
              <h3 className="font-label font-normal text-xl sm:text-2xl md:text-[clamp(1.5rem,2.4vw,2.5rem)] m-0 flex-1">{service.title}</h3>
              <span className="service-detail hidden md:inline ml-auto font-label text-xs uppercase tracking-wider text-white/70">{service.detail}</span>
              <span className="service-toggle relative w-4 h-4 ml-auto md:ml-4 shrink-0 before:content-[''] before:absolute before:inset-x-0 before:top-1/2 before:h-[1px] before:bg-current after:content-[''] after:absolute after:inset-y-0 after:left-1/2 after:w-[1px] after:bg-current group-open:after:opacity-0 after:transition-opacity" aria-hidden="true" />
            </summary>
            <div className="service-body grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 pb-8 pl-0 md:pl-10 text-sm md:text-base leading-relaxed text-white/90">
              <p className="m-0 max-w-[30rem]">{service.description}</p>
              <ul className="list-none m-0 p-0 text-brand-yellow space-y-1">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
      <div className="capabilities flex flex-wrap gap-2 mt-8 font-label text-xs uppercase tracking-wider" aria-label="Studio disciplines">
        <span className="border border-white/25 rounded px-3 py-1.5">Concept</span>
        <span className="border border-white/25 rounded px-3 py-1.5">Direction</span>
        <span className="border border-white/25 rounded px-3 py-1.5">Film</span>
        <span className="border border-white/25 rounded px-3 py-1.5">Photography</span>
        <span className="border border-white/25 rounded px-3 py-1.5">Editing</span>
        <span className="border border-white/25 rounded px-3 py-1.5">Colour</span>
        <span className="border border-white/25 rounded px-3 py-1.5">Sound</span>
      </div>
    </section>
  );
}
