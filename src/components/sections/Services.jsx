import { services } from "@/data/studio";

export default function Services() {
  return (
    <section
      id="services"
      className="services-section section-blue"
      tabIndex={-1}
      aria-labelledby="services-title"
    >
      <div className="services-heading">
        <p className="label" data-reveal>
          03 / The craft
        </p>
        <h2 id="services-title" className="editorial" data-reveal>
          It’s the little things
          <br />
          that make the
          <br />
          <em>whole story.</em>
        </h2>
        <p className="body-copy" data-reveal>
          From the first conversation to the final frame, we connect the
          thinking, the making and the finishing. One considered process. One
          clear vision.
        </p>
      </div>
      <div className="services-list">
        {services.map((service) => (
          <details
            key={service.number}
            className="service-row"
            open={service.number === "01"}
          >
            <summary>
              <span className="label">{service.number}</span>
              <h3>{service.title}</h3>
              <span className="service-detail label">{service.detail}</span>
              <span className="service-toggle" aria-hidden="true" />
            </summary>
            <div className="service-body">
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
      <div className="capabilities label" aria-label="Studio disciplines">
        <span>Concept</span>
        <span>Direction</span>
        <span>Film</span>
        <span>Photography</span>
        <span>Editing</span>
        <span>Colour</span>
        <span>Sound</span>
      </div>
    </section>
  );
}
