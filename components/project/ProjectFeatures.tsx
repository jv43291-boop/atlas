type ProjectFeaturesProps = {
  title: string;
  features: string[];
};

export default function ProjectFeatures({
  title,
  features,
}: ProjectFeaturesProps) {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">

        <h2 className="text-4xl text-white">
          {title}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature}
              className="atlas-panel flex items-center gap-4 p-5 transition hover:border-blue-400/60"
            >
              <span className="font-mono text-xs font-bold text-blue-400">{"//"}</span>

              <p className="text-slate-300">
                {feature}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
