import AnimatedCourseCard from "./AnimatedCourseCard";
import { getCourses } from "@/lib/getCourses";

export default async function CoursesGrid() {
  const courses = await getCourses();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {courses.map((course) => (
        <AnimatedCourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}