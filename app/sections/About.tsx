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
            <span className="block text-zinc-500">
              Full Stack Web Developer
            </span>
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
          <p>
            I&apos;m Haroon, a Computer Science graduate and Full Stack Web
            Developer passionate about building modern, responsive, and
            user-friendly web applications. I work with React.js, Next.js,
            TypeScript, JavaScript, and Tailwind CSS to create clean and
            interactive frontend experiences.
          </p>

          <p>
            Beyond frontend development, I have hands-on experience with
            Node.js, Express.js, PostgreSQL, and Sequelize ORM. I enjoy
            developing REST APIs, implementing authentication, integrating
            databases, and connecting frontend applications with backend
            services.
          </p>

          <p>
            I have built full-stack projects like MarketStore, an e-commerce
            marketplace featuring user authentication, product management,
            shopping cart, checkout, order management, and an admin dashboard.
            My focus is on writing maintainable code, building reusable
            components, solving real-world problems, and continuously improving
            my development skills.
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
                Full Stack Development
              </p>
            </div>

            <div className="col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 sm:col-span-1">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Core Stack
              </p>

              <p className="mt-2 font-semibold text-white">
                Next.js + Node.js + PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
