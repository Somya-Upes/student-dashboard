"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Course } from "@/lib/types";

interface AnimatedCourseCardProps {
  course: Course;
}

export default function AnimatedCourseCard({
  course,
}: AnimatedCourseCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.02,
      }}
    >
      <CourseCard course={course} />
    </motion.div>
  );
}