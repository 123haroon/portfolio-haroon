import { projects } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="bg-zinc-900/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">Projects</h2>

        {projects.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-zinc-400">Projects will be added soon.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white transition hover:text-zinc-400"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white transition hover:text-zinc-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
