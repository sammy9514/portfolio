import { useId, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { projects, type Project as ProjectType } from "../data/projects";

const Card = ({ project, index }: { project: ProjectType; index: number }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const tilt = index % 2 === 0 ? 1.4 : -1.6;

  return (
    <Reveal delay={(index % 2) * 0.08} className="flex">
    <article
      style={{ rotate: open ? "0deg" : `${tilt}deg` }}
      className="paper-card flex w-full flex-col p-3 transition-[rotate,transform] duration-300 hover:rotate-0 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] overflow-hidden bg-ink/5">
        <img
          src={project.img}
          alt={`Screenshot of ${project.name}, a ${project.tagline.toLowerCase()} app`}
          loading="lazy"
          decoding="async"
          width={640}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-[Kalam] text-[24px] font-bold">{project.name}</h3>
          <span className="shrink-0 text-[15px] text-pencil">{project.tagline}</span>
        </div>

        <p className="mt-2 text-[17px] leading-[1.6rem]">{project.blurb}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded border border-ink/20 bg-ink/[0.04] px-2 py-0.5 text-[14px] font-bold text-pencil"
            >
              {t}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="overflow-hidden"
            >
              <h4 className="mt-4 font-[Kalam] text-[18px] font-bold">
                What I built
              </h4>
              <ul className="mt-2 space-y-1.5 text-[16px] leading-[1.55rem]">
                {project.built.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true" className="text-redpen">
                      &rarr;
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="no-print mt-auto flex flex-wrap items-center gap-4 pt-5 pb-1">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex items-center gap-1 font-bold text-ballpoint underline decoration-dotted underline-offset-4"
          >
            {open ? "Hide details" : "View details"}
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 font-bold text-ballpoint underline decoration-dotted underline-offset-4"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live
              <span className="sr-only"> demo of {project.name}</span>
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 font-bold text-ballpoint underline decoration-dotted underline-offset-4"
            >
              <Github size={16} aria-hidden="true" />
              Code
              <span className="sr-only"> for {project.name}</span>
            </a>
          )}
        </div>
      </div>
    </article>
    </Reveal>
  );
};

const Project = () => (
  <section id="projects" className="scroll-mt-24 py-14 md:py-20">
    <h2 className="font-[Kalam] text-[30px] font-bold md:text-[46px]">
      <span className="pen-underline">Things I've built</span>
    </h2>
    <p className="mt-4 text-[19px] text-pencil md:text-[22px]">
      Four projects, all shipped. Open the details to see what the hard part was.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10">
      {projects.map((project, i) => (
        <Card key={project.name} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default Project;
