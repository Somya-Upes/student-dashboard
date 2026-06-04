import { Suspense } from "react";
import CoursesGrid from "@/components/CoursesGrid";
import MobileNav from "@/components/MobileNav";
import ActivityTile from "@/components/ActivityTile";
import Sidebar from "@/components/Sidebar";
import HeroStats from "@/components/HeroStats";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white md:flex">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 pb-24">
        <HeroStats
          totalCourses={4}
          averageProgress={49}
        />

        <ActivityTile />

        <Suspense
          fallback={
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              Loading Courses...
            </div>
          }
        >
          <CoursesGrid />
        </Suspense>
      </main>

      <MobileNav />
    </div>
  );
}