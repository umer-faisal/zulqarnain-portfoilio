import { site } from "@/config/site";

export default function HeroContact() {
  return (
    <div className="hero-contact" aria-labelledby="hero-contact-title">
      <h2 id="hero-contact-title">Get in touch</h2>
      {site.email && <a className="hero-email" href={`mailto:${site.email}`}>{site.email}</a>}
      <ul className="hero-socials" aria-label="Social profiles and CV">
        {site.socials.map(({ label, url }) => (
          <li key={label}>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a> : <span aria-disabled="true">{label}<small>Coming soon</small></span>}
          </li>
        ))}
        <li>
          {site.cv.url ? <a href={site.cv.url} download>{site.cv.label} ↓</a> : <span aria-disabled="true">{site.cv.label}<small>Coming soon</small></span>}
        </li>
      </ul>
    </div>
  );
}
