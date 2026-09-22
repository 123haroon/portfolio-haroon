import { technologies } from "@/app/data/portfolio";
const TechMarquee = () => {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="overflow-hidden py-8">
      <div className="marquee-track flex w-max items-center gap-6">
        {marqueeItems.map((technology, index) => {
          const Icon = technology.icon;

          return (
            <div
              key={`${technology.id}-${index}`}
              className="flex min-w-max items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-4"
            >
              <Icon className="text-3xl text-white" />

              <span className="text-base font-semibold text-zinc-300">
                {technology.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
