type InfoCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function InfoCard({
  icon,
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}