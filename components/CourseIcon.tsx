import * as Icons from "lucide-react";

interface CourseIconProps {
  name: string;
}

export default function CourseIcon({ name }: CourseIconProps) {
  const Icon = Icons[name as keyof typeof Icons];

  if (!Icon) {
    return <Icons.BookOpen size={24} />;
  }

  return <Icon size={24} />;
}