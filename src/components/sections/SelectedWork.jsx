"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import ReelsCarousel from "@/components/ui/ReelsCarousel";

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
      className="work-section relative px-5 sm:px-8 py-16 md:py-24 bg-brand-yellow text-brand-dark"
      tabIndex={-1}
      aria-labelledby="work-title"
    >
      <span className="font-label text-xs md:text-sm uppercase tracking-wider text-brand-dark/80" data-reveal>
        02 / The work
      </span>
      <h2 id="work-title" className="mega work-title font-label font-bold text-[15vw] md:text-[clamp(3.8rem,10.8vw,13rem)] leading-none uppercase tracking-tighter my-4" data-reveal>
        Selected work
      </h2>
      <div className="work-intro flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-label text-base md:text-xl font-light leading-relaxed text-brand-dark" data-reveal>
        <p className="m-0">
          Films, photographs and the stories in between.
          <br />A closer look at the world through our lens.
        </p>
        <span className="font-label text-xs uppercase tracking-wider font-normal">A ZS.Productions collection</span>
      </div>

      {/* Instagram Live Reels Carousel */}
      <ReelsCarousel />

      {projects.length > 0 && (
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-24">
          {projects.map((project) => (
            <button
              className="project-card text-left bg-transparent p-0 border-0 cursor-pointer group"
              key={project.id}
              onClick={() => setSelected(project)}
              data-reveal
            >
              <span className="project-meta flex justify-between gap-4 font-label text-xs md:text-sm uppercase tracking-wider mb-2 text-brand-dark font-medium">
                <span>{project.title}</span>
                <span>{project.category} ↗</span>
              </span>
              <div className="project-image rounded-xl overflow-hidden border border-brand-dark bg-brand-dark/10">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialog}
        className="project-dialog fixed inset-0 m-auto w-[min(60rem,92vw)] max-h-[90svh] p-6 md:p-8 bg-brand-deep text-brand-white border border-white/25 rounded-2xl shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm overflow-y-auto"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        aria-labelledby="project-dialog-title"
      >
        {selected && (
          <div>
            <button
              className="dialog-close block ml-auto mb-4 bg-transparent border-0 font-label text-xs md:text-sm uppercase tracking-wider text-brand-white hover:text-brand-yellow cursor-pointer"
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
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 id="project-dialog-title" className="font-label text-2xl uppercase tracking-wide my-2">{selected.title}</h3>
            <p className="text-white/80 leading-relaxed">{selected.description}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
