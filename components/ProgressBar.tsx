interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}