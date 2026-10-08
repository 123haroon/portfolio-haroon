import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#09090b]"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* MAIN CONTAINER */}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* ==========================================
            LEFT CONTENT
        ========================================== */}

        <div className="order-2 text-center lg:order-1 lg:text-left">
          {/* BADGE */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs font-medium text-zinc-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Full Stack Web Developer
          </div>

          {/* INTRO */}

          <p className="mb-3 text-sm font-medium text-cyan-400 sm:text-base">
            Hi, I&apos;m Haroon
          </p>

          {/* HEADING */}

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            I build modern and
            <span className="mt-1 block text-zinc-400">
              scalable web applications.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 lg:mx-0">
            I&apos;m a Full Stack Web Developer specializing in building
            responsive, interactive, and user-friendly web applications. I work
            with React.js, Next.js, TypeScript, Node.js, Express.js, and
            PostgreSQL to develop complete web solutions from frontend
            interfaces to backend APIs and databases.
          </p>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Link
              href="#projects"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
            >
              View Projects
              <HiArrowRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="flex w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
            >
              Contact Me
            </Link>

            <a
              href="/M-Haroon-Full_Stack.pdf"
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400 sm:w-auto"
            >
              Download CV
              <HiDownload size={18} />
            </a>
          </div>

          {/* TECHNOLOGIES */}

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500 lg:justify-start">
            <span>Next.js</span>
            <span>React.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>PostgreSQL</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        {/* ==========================================
            RIGHT IMAGE
        ========================================== */}

        <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            {/* GLOW */}

            <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* IMAGE */}

            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full shadow-2xl shadow-cyan-500/10 sm:h-[300px] sm:w-[300px] md:h-[340px] md:w-[340px] lg:h-[380px] lg:w-[380px] xl:h-[420px] xl:w-[420px]">
              <Image
                src="/Haroon (2).jpeg"
                alt="Haroon - Full Stack Web Developer"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 420px"
                className="object-cover object-center"
              />
            </div>

            {/* SMALL DECORATION */}

            <div className="absolute bottom-4 right-1 h-4 w-4 rounded-full border-4 border-[#09090b] bg-green-400 sm:bottom-6 sm:right-4 sm:h-5 sm:w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
