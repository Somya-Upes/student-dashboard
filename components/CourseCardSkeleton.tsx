export default function CourseCardSkeleton() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 animate-pulse">
      <div className="h-6 w-2/3 rounded bg-zinc-800 mb-6" />

      <div className="h-3 w-full rounded-full bg-zinc-800 mb-4" />

      <div className="h-4 w-24 rounded bg-zinc-800 mb-6" />

      <div className="h-8 w-8 rounded bg-zinc-800" />
    </div>
  );
}