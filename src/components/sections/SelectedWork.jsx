"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    const previous = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previous;
    };
  }, [selected]);
  return (
    <section
      id="work"
      className="work-section section-yellow"
      tabIndex={-1}
      aria-labelledby="work-title"
    >
      <span className="label" data-reveal>
        02 / The work
      </span>
      <h2 id="work-title" className="mega work-title" data-reveal>
        Selected work
      </h2>
      <div className="work-intro" data-reveal>
        <p>
          Films, photographs and the stories in between.
          <br />A closer look at the world through our lens.
        </p>
        <span className="label">A Z.S Productions collection</span>
      </div>
      {projects.length ? (
        <div className="project-grid">
          {projects.map((project) => (
            <button
              className="project-card"
              key={project.id}
              onClick={() => setSelected(project)}
              data-reveal
            >
              <span className="project-meta">
                <span>{project.title}</span>
                <span>{project.category} ↗</span>
              </span>
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="archive-preview" data-reveal>
          <div className="archive-frame">
            <span className="label">The moving image / 01</span>
            <span className="archive-word">Films.</span>
            <span className="label">Stories in motion</span>
          </div>
          <div className="archive-frame still-frame">
            <span className="label">The still image / 02</span>
            <span className="archive-word">Stills.</span>
            <span className="label">A moment, held</span>
          </div>
          <p className="archive-note label">
            The collection is being prepared. Watch this space.
          </p>
        </div>
      )}
      <dialog
        ref={dialog}
        className="project-dialog"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        aria-labelledby="project-dialog-title"
      >
        {selected && (
          <div>
            <button
              className="dialog-close label"
              onClick={() => setSelected(null)}
            >
              Close ×
            </button>
            <Image
              src={selected.image}
              alt={selected.alt}
              width={1200}
              height={800}
              sizes="90vw"
            />
            <h3 id="project-dialog-title">{selected.title}</h3>
            <p>{selected.description}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
