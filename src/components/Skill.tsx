import { useMemo } from "react";
import { skillGroups, learning } from "../data/skills";
import Reveal from "./Reveal";

/** Stable per-skill tilt: derived from the name, so it never changes on re-render. */
const tiltFor = (label: string) => {
  const sum = [...label].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return ((sum % 7) - 3) * 0.8;
};

const Skill = () => {
  const groups = useMemo(() => skillGroups, []);

  return (
    <section id="skills" className="scroll-mt-24 py-14 md:py-20">
      <h2 className="font-[Kalam] text-[clamp(1.7rem,5.5vw,2.9rem)] font-bold">
        <span className="pen-underline">Skills &amp; tools</span>
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.06}
            className={`sketch-box p-6 ${i % 2 ? "sketch-box-alt" : ""}`}
          >
            <h3 className="font-[Kalam] text-[24px] font-bold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    backgroundColor: group.color,
                    transform: `rotate(${tiltFor(skill)}deg)`,
                  }}
                  className="rounded-full border-2 border-ink/25 px-3.5 py-1 text-[16px] font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="sticky-note mt-10 inline-block -rotate-2 px-5 py-4 transition-transform duration-300 hover:rotate-0">
        <p className="font-[Kalam] text-[19px] font-bold">
          Currently learning: {learning.join(" · ")}
        </p>
      </div>
    </section>
  );
};

export default Skill;
