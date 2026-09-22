import { skillGroups } from "../data/portfolio";
import { technologies } from "../data/portfolio";
import TechMarquee from "../components/layout/ui/TechMarquee";
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-w-0 overflow-hidden bg-zinc-900/60 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-sm sm:tracking-[0.3em]">
          Technologies
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Skills & Technologies
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          Technologies and tools I use to build modern, responsive and
          interactive web applications.
        </p>
      </div>

      <div className="mt-10 w-full min-w-0 overflow-hidden">
        <TechMarquee />
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              {group.title}
            </h3>

            <div className="mt-5 flex min-w-0 flex-wrap gap-2 sm:gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="max-w-full break-words rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-400 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
