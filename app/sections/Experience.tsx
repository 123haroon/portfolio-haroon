import { experiences } from "../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="bg-zinc-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Professional Experience
        </h2>

        <div className="mt-12 space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-zinc-400">{experience.company}</p>
                </div>

                <p className="text-sm text-zinc-500">{experience.duration}</p>
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
