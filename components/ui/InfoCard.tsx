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
    <div className="border-b border-r border-blue-400/15 bg-[#04101d]/70 p-7 transition-colors hover:bg-blue-950/30">
      <div className="font-mono text-xs font-bold tracking-[0.2em] text-blue-400">{icon}</div>

      <h3 className="mt-8 text-lg font-black uppercase tracking-[-0.02em] text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}
