type ProjectLearnedProps = {
  title: string;
  lessons: string[];
};

export default function ProjectLearned({
  title,
  lessons,
}: ProjectLearnedProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <div className="mt-8 space-y-4">

          {lessons.map((lesson) => (
            <div
              key={lesson}
              className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-blue-500"
            >
              <span className="text-blue-400 text-xl">💡</span>

              <p className="leading-7 text-zinc-300">
                {lesson}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}