import { Squiggle } from "./Doodles";
import Reveal from "./Reveal";

const BIRTH_YEAR = 2006;
const START_YEAR = 2022;

const yearsSince = (from: number) => new Date().getFullYear() - from;

const About = () => {
  const age = yearsSince(BIRTH_YEAR);
  const years = yearsSince(START_YEAR);

  return (
    <Reveal as="section" className="scroll-mt-24 py-14 md:py-20">
      <span id="about" className="block -mt-24 pt-24" aria-hidden="true" />
      <h2 className="font-[Kalam] text-[clamp(1.7rem,5.5vw,2.9rem)] font-bold">
        <span className="pen-underline">About me</span>
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.6fr_1fr] md:items-start">
        <div className="space-y-5 text-[19px] leading-8 md:text-[23px]">
          <p>
            I'm a {age}-year-old software engineer. I've been writing code since{" "}
            {START_YEAR}, so {years} years of turning ideas into things you can
            actually open in a browser and use.
          </p>
          <p>
            Most of what I build leans real-time: chat that doesn't lag, a
            drawing canvas shared between strangers, a payroll dashboard that
            stays correct when the pay cycle is weird. I care about the state
            being right more than the animation being smooth, though I'd like
            both.
          </p>
          <p>
            Right now I'm going deeper on{" "}
            <span className="highlighter-pink highlighter">
              cloud architecture
            </span>{" "}
            and AI integration, and building side projects that are slightly
            beyond what I know how to do yet.
          </p>
        </div>

        <aside className="sticky-note relative -rotate-2 p-6 md:mt-4">
          <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
          <h3 className="font-[Kalam] text-[22px] font-bold">Quick facts</h3>
          <ul className="mt-3 space-y-2 text-[18px]">
            <li>Based in UK, open to remote</li>
            <li>{years}+ years building for the web</li>
            <li>4 shipped side projects</li>
            <li>Co-founded 1 startup</li>
            <li>Happiest in TypeScript</li>
          </ul>
          <Squiggle className="mt-4 h-2 w-full text-ink/35" />
        </aside>
      </div>
    </Reveal>
  );
};

export default About;
