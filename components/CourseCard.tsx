import ProgressRing from "./ProgressRing";
import CourseIcon from "./CourseIcon";
import ProgressBar from "./ProgressBar";
import { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            {course.title}
          </h2>

          <ProgressBar progress={course.progress} />

          <div className="mt-4 text-blue-400">
            <CourseIcon name={course.icon_name} />
          </div>
        </div>

        <ProgressRing progress={course.progress} />
      </div>
    </div>
  );
}