# Student Dashboard

A modern, responsive Student Dashboard built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). It leverages [Supabase](https://supabase.com) as the backend database and authentication service.

## Features

- **Next.js**: Utilizing the App Router for optimal performance and SEO.
- **Tailwind CSS**: Rapid UI development with modern utility classes.
- **Supabase**: Backend-as-a-Service for database and authentication.
- **Framer Motion**: Smooth animations and micro-interactions.
- **Lucide Icons**: Beautiful, consistent iconography.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Somya-Upes/student-dashboard.git
   cd student-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy the example environment file and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```
   Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Runs the built app in production mode.
- `npm run lint`: Runs ESLint to find and fix problems in the code.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
Don't forget to configure your environment variables in your Vercel project settings before deploying.
