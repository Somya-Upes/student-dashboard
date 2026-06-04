interface ProgressRingProps {
  progress: number;
}

export default function ProgressRing({
  progress,
}: ProgressRingProps) {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (progress / 100) * circumference;

  return (
    <div className="relative h-20 w-20">
      <svg
        className="rotate-[-90deg]"
        width="80"
        height="80"
      >
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#27272a"
          strokeWidth="8"
          fill="transparent"
        />

        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#3b82f6"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
        {progress}%
      </div>
    </div>
  );
}