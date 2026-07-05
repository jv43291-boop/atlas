type ProjectFeaturesProps = {
  title: string;
  features: string[];
};

export default function ProjectFeatures({
  title,
  features,
}: ProjectFeaturesProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-blue-500"
            >
              <span className="text-xl">✅</span>

              <p className="text-zinc-300">
                {feature}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}