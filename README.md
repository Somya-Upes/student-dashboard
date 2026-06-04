# Student Dashboard

A modern, responsive Student Dashboard built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). It leverages [Supabase](https://supabase.com) as the backend database and authentication service.

## Architectural Choices
- **Next.js App Router**: Utilized for its robust routing capabilities and built-in optimization. This choice allows us to efficiently mix server-side rendering and client-side interactivity, heavily optimizing our application's performance and SEO footprint.
- **Tailwind CSS**: Chosen as the primary styling solution to enable rapid prototyping directly within our component markup, ensuring consistency without needing to context-switch between files.
- **Supabase**: Selected as our Backend-as-a-Service to quickly set up a scalable Postgres database along with secure, out-of-the-box authentication without having to build and maintain a custom backend.

## Server / Client Component Split
To maximize performance while retaining interactivity, this project strictly adheres to the Next.js recommended rendering split:
- **Server Components (Default)**: Used for layout definitions, heavy data-fetching, and static UI wrappers. This minimizes the JavaScript bundle shipped to the client and speeds up initial page load times.
- **Client Components (`"use client"`)**: Used sparingly and specifically isolated to interactive components (e.g. form inputs, toggle buttons, and dynamic icon rendering like our `CourseIcon`). By pushing interactivity to the leaves of our component tree, we keep the core layout entirely server-rendered.

## Challenges Faced
1. **TypeScript strictness with Dynamic Imports**: Using dynamically referenced components (like iterating over `lucide-react` icons) initially threw strict TypeScript validation errors (`Unexpected any` and `missing construct signatures`). I successfully resolved this by safely typing the icon names as `keyof typeof Icons` and mapping them strictly to `React.ElementType`.
2. **Vercel Deployment Missing Env Variables**: During automated Vercel builds, missing Supabase credentials initially caused the build step to crash violently. To fix this challenge gracefully, I implemented a custom `vercel.json` ignore-command and a dummy-variable fallback in `lib/supabase.ts` to ensure our build process succeeds even in limited environments.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Setup
1. Clone the repository and install dependencies using `npm install`.
2. **Environment Variables**: See `.env.example` for the required Supabase keys. Copy it to a new file named `.env.local` and add your real keys.
3. Start the dev server using `npm run dev`.
