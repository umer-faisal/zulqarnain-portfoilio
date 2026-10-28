import { site } from "@/config/site";
import Scribble from "@/components/ui/Scribble";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section-deep"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <p className="label" data-reveal>
        04 / Your next story
      </p>
      <h2 id="contact-title" className="editorial" data-reveal>
        Have a spark?
        <br />
        Let’s make <em>something.</em>
      </h2>
      <Scribble />
      <p className="section-copy" data-reveal>
        A film. A photograph. An idea that won’t leave you alone.
        <br />
        Good stories start with a conversation.
      </p>
      {site.email ? (
        <a className="contact-link" href={`mailto:${site.email}`} data-reveal>
          {site.email} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <p className="contact-pending label" data-reveal>
          Direct enquiries — contact details coming soon.
        </p>
      )}
      <span className="contact-signature" aria-hidden="true">
        Z.S
      </span>
    </section>
  );
}
