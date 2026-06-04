import CourseCardSkeleton from "@/components/CourseCardSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="mb-8 h-56 rounded-3xl bg-zinc-900 animate-pulse" />

      <div className="mb-8 h-64 rounded-3xl bg-zinc-900 animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}