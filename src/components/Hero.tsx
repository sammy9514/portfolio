import { ArrowDown, Mail } from "lucide-react";
import { ArrowScribble } from "./Doodles";
import Reveal from "./Reveal";

const Hero = () => (
  <section id="top" className="relative pt-10 pb-16 md:pt-16 md:pb-24">
    <Reveal onMount as="p" className="text-[20px] text-pencil md:text-[24px]">
      Hello, I'm
    </Reveal>

    <Reveal
      onMount
      delay={0.06}
      as="h1"
      className="mt-1 font-[Kalam] text-[clamp(1.9rem,8.5vw,4.5rem)] leading-[1.15] font-bold"
    >
      <span className="highlighter -rotate-1 inline-block">Ayomide Ogunyemi</span>
    </Reveal>

    <Reveal
      onMount
      delay={0.12}
      as="p"
      className="mt-3 rotate-[0.6deg] font-[Kalam] text-[clamp(1.3rem,5vw,2.25rem)] text-pencil"
    >
      I build things people imagine.
    </Reveal>

    <Reveal
      onMount
      delay={0.18}
      as="p"
      className="mt-6 max-w-[34ch] text-[19px] leading-[2rem] md:max-w-[46ch] md:text-[23px]"
    >
      Software engineer working in React, TypeScript and Node. I like real-time
      systems, awkward edge cases, and shipping things that actually work.
    </Reveal>

    <Reveal
      onMount
      delay={0.24}
      className="no-print mt-8 flex flex-wrap items-center gap-x-5 gap-y-4"
    >
      <a
        href="#contact"
        className="-rotate-2 rounded-md bg-ballpoint px-8 py-3 font-[Kalam] text-[20px] font-bold text-white shadow-md transition-all duration-300 hover:rotate-0 hover:bg-[#163f99]"
      >
        Hire me
      </a>
      <a
        href="#projects"
        className="flex items-center gap-2 rounded-md border-2 border-ink/45 px-6 py-3 font-[Kalam] text-[20px] font-bold transition-colors hover:bg-ink/5"
      >
        See my work <ArrowDown size={18} aria-hidden="true" />
      </a>
      <a
        href="mailto:ogunyemiayomide700@gmail.com"
        className="flex items-center gap-2 text-[17px] break-all text-ballpoint underline decoration-dotted underline-offset-4"
      >
        <Mail size={17} aria-hidden="true" />
        ogunyemiayomide700@gmail.com
      </a>
    </Reveal>

    <ArrowScribble className="pointer-events-none absolute right-[5%] bottom-[10%] hidden w-24 -scale-x-100 text-redpen/50 lg:block" />
  </section>
);

export default Hero;
