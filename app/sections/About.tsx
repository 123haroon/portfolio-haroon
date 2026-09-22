const About = () => {
  return (
    <section id="about" className="bg-[#0c0c0f] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Haroon
            <span className="block text-zinc-500">Frontend Web Developer</span>
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
          <p>
            I&apos;m Haroon, a Computer Science graduate with a passion for
            modern web development. I completed my BS in Computer Science and
            have been building my skills in frontend development using React,
            Next.js, TypeScript and JavaScript.
          </p>

          <p>
            I enjoy turning ideas into clean, responsive and interactive web
            experiences. My focus is on writing structured code, creating
            reusable components and continuously improving my understanding of
            modern React and frontend development.
          </p>

          <p>
            Along with frontend development, I&apos;m also expanding my
            knowledge of backend fundamentals including Node.js, Express.js,
            APIs, Postman and database connectivity.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Degree
              </p>

              <p className="mt-2 font-semibold text-white">
                BS Computer Science
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Focus
              </p>

              <p className="mt-2 font-semibold text-white">
                Frontend Development
              </p>
            </div>

            <div className="col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 sm:col-span-1">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Core Stack
              </p>

              <p className="mt-2 font-semibold text-white">
                Next.js + TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
