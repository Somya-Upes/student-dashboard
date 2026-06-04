export default function ActivityTile() {
  const cells = Array.from({ length: 35 });

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-2xl font-bold mb-4">
        Weekly Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {cells.map((_, index) => (
          <div
            key={index}
            className={`h-8 rounded-md ${
              index % 4 === 0
                ? "bg-blue-500"
                : index % 3 === 0
                ? "bg-blue-700"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </section>
  );
}