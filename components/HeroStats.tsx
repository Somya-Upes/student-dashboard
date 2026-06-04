interface HeroStatsProps {
  totalCourses: number;
  averageProgress: number;
}

export default function HeroStats({
  totalCourses,
  averageProgress,
}: HeroStatsProps) {
  return (
    <div className="mb-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-950 p-8 shadow-2xl">
      <h1 className="text-5xl font-bold tracking-tight">
        Welcome Back 👋
      </h1>

      <p className="mt-3 text-zinc-300 text-lg">
        Keep learning and stay consistent.
      </p>

      <div className="mt-6 flex gap-8">
        <div>
          <p className="text-sm text-zinc-500">
            Total Courses
          </p>

          <p className="text-3xl font-bold">
            {totalCourses}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Average Progress
          </p>

          <p className="text-3xl font-bold">
            {averageProgress}%
          </p>

        </div>
      </div>
    </div>
  );
}