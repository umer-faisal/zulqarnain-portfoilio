import { stories } from "@/data/studio";
import Scribble from "@/components/ui/Scribble";

export default function StudioStory() {
  return (
    <div className="section-deep">
      {stories.map((story) => (
        <section
          className="story-panel"
          key={story.number}
          aria-labelledby={`story-${story.number}`}
        >
          <div className="story-content">
            <span className="label story-number" data-reveal>
              Behind the frame / {story.number}
            </span>
            <h2 id={`story-${story.number}`} className="editorial" data-reveal>
              {story.title}
            </h2>
            <p className="body-copy" data-reveal>
              {story.body}
            </p>
          </div>
        </section>
      ))}
      <section
        className="manifesto statement"
        aria-labelledby="manifesto-title"
      >
        <p className="editorial manifesto-intro" data-reveal>
          Some stories ask to be seen.
          <br />
          The best ones ask to be felt.
        </p>
        <h2 id="manifesto-title" className="mega" data-reveal>
          Never{" "}
          <span>
            ordinary.
            <Scribble />
          </span>
        </h2>
        <p className="section-copy" data-reveal>
          We believe in images with intention. In a point of view.
          <br />
          In the details that turn a passing glance
          <br />
          into a lasting impression.
        </p>
      </section>
      <section
        className="invitation statement"
        aria-labelledby="invitation-title"
      >
        <span className="orbit-star star-left" aria-hidden="true" data-float>
          ✦
        </span>
        <span className="orbit-star star-right" aria-hidden="true" data-float>
          ✳
        </span>
        <h2 id="invitation-title" className="editorial" data-reveal>
          That’s what we see.
          <br />
          That’s what we make.
        </h2>
        <p className="section-copy" data-reveal>
          If you have a story that deserves to be remembered,
          <br />
          let’s bring it into focus.
        </p>
        <a className="text-link label" href="#contact" data-reveal>
          Start a conversation ↗
        </a>
      </section>
    </div>
  );
}
