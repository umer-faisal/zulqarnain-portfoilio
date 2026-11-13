import { site } from "@/config/site";

export default function HeroContact() {
  return (
    <div className="hero-contact relative bg-brand-dark text-brand-white p-6 font-label uppercase" aria-labelledby="hero-contact-title">
      <h2 id="hero-contact-title" className="text-2xl uppercase mb-3">Get in touch</h2>
      {site.email && <a className="hero-email inline-block mb-4 underline break-all hover:text-brand-yellow" href={`mailto:${site.email}`}>{site.email}</a>}
      <ul className="hero-socials flex flex-wrap justify-center gap-4 list-none p-0 m-0 text-xs uppercase" aria-label="Social profiles and CV">
        {site.socials.map(({ label, url }) => (
          <li key={label}>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow underline underline-offset-4">{label} ↗</a> : <span aria-disabled="true" className="text-white/60">{label}<small className="block text-[0.6rem]">Coming soon</small></span>}
          </li>
        ))}
        <li>
          {site.cv.url ? <a href={site.cv.url} download className="hover:text-brand-yellow underline underline-offset-4">{site.cv.label} ↓</a> : <span aria-disabled="true" className="text-white/60">{site.cv.label}<small className="block text-[0.6rem]">Coming soon</small></span>}
        </li>
      </ul>
    </div>
  );
}
