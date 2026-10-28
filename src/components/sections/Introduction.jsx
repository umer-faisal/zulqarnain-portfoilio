import Scribble from "@/components/ui/Scribble";

export default function Introduction() {
  return (
    <>
      <section
        id="about"
        className="statement intro section-yellow"
        tabIndex={-1}
        aria-labelledby="intro-title"
      >
        <span className="section-index label">01 / The studio</span>
        <h2 id="intro-title" className="mega" data-reveal>
          Hi, we’re Z.S.
        </h2>
        <p className="section-copy" data-reveal>
          A creative video and photography production studio.
          <br />
          We turn ideas into images, moments into stories,
          <br />
          and stories into something you can feel.
        </p>
      </section>
      <section
        className="statement section-blue stories-statement"
        aria-labelledby="stories-title"
      >
        <div>
          <p className="label statement-lead" data-reveal>
            We create
          </p>
          <h2 id="stories-title" className="mega" data-reveal>
            Stories.
          </h2>
        </div>
        <p className="section-copy" data-reveal>
          An idea becomes a shot. A shot becomes a sequence.
          <br />A sequence becomes a story that stays with you.
        </p>
      </section>
      <section
        className="statement craft-statement section-deep"
        aria-labelledby="craft-title"
      >
        <div data-reveal>
          <p className="label">One studio. From start to finish.</p>
          <h2 id="craft-title" className="editorial-display">
            Shoot. Edit. Create.
          </h2>
          <Scribble />
          <p className="statement-lead label">
            Always curious. Always creating.
          </p>
        </div>
      </section>
    </>
  );
}
