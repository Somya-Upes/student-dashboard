"use client";

import { BookOpen, Home, Settings, Trophy } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex min-h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-2xl font-bold mb-10">
        LearnOS
      </h2>

      <nav className="space-y-3">
        <a className="flex items-center gap-3 rounded-xl bg-blue-500/10 px-4 py-3 text-blue-400">
          <Home size={20} />
          Dashboard
        </a>

        <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 hover:bg-zinc-900">
          <BookOpen size={20} />
          Courses
        </a>

        <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 hover:bg-zinc-900">
          <Trophy size={20} />
          Progress
        </a>

        <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 hover:bg-zinc-900">
          <Settings size={20} />
          Settings
        </a>
      </nav>
    </aside>
  );
}