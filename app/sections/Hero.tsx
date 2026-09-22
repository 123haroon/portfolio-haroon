import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#09090b]"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs font-medium text-zinc-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Frontend Web Developer
          </div>

          <p className="mb-3 text-sm font-medium text-cyan-400 sm:text-base">
            Hi, I&apos;m Haroon
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
            I build modern and
            <span className="block text-zinc-400">
              responsive web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I&apos;m a frontend developer focused on building clean, responsive
            and interactive web applications using React, Next.js, TypeScript
            and modern frontend technologies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              View Projects
              <HiArrowRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>React.js</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
