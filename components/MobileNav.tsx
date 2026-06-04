"use client";

import { BookOpen, Home, Settings, Trophy } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-zinc-800 bg-black/90 p-3 backdrop-blur-md md:hidden">
      <a className="flex flex-col items-center gap-1 text-blue-400">
        <Home size={20} />
        <span className="text-xs">Home</span>
      </a>

      <a className="flex flex-col items-center gap-1 text-zinc-400">
        <BookOpen size={20} />
        <span className="text-xs">Courses</span>
      </a>

      <a className="flex flex-col items-center gap-1 text-zinc-400">
        <Trophy size={20} />
        <span className="text-xs">Progress</span>
      </a>

      <a className="flex flex-col items-center gap-1 text-zinc-400">
        <Settings size={20} />
        <span className="text-xs">Settings</span>
      </a>
    </nav>
  );
}