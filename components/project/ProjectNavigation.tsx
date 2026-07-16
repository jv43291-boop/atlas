import Link from "next/link";

type ProjectNavigationProps = {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

export default function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto flex max-w-6xl justify-between gap-6">

        {previous ? (
          <Link
            href={previous.href}
            className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
          >
            <p className="text-sm text-zinc-500">
              ← Projeto anterior
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <Link
            href={next.href}
            className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-right transition hover:border-blue-500"
          >
            <p className="text-sm text-zinc-500">
              Próximo projeto →
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {next.title}
            </h3>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

      </div>
    </section>
  );
}