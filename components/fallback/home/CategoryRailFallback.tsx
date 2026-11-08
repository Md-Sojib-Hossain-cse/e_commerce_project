export default function CategoryRailFallback() {
  return (
    <section className="w-full animate-pulse">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between px-1">
        <div className="h-6 w-44 rounded-md bg-muted" />

        {/* Navigation arrows */}
        <div className="hidden gap-2 md:flex">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="h-8 w-8 rounded-full bg-muted" />
        </div>
      </div>

      {/* Category buttons skeleton */}
      <div className="flex gap-2 overflow-hidden pb-2">
        <div className="h-10 w-16 shrink-0 rounded-full bg-muted" />
        <div className="h-10 w-32 shrink-0 rounded-full bg-muted" />
        <div className="h-10 w-36 shrink-0 rounded-full bg-muted" />
        <div className="h-10 w-28 shrink-0 rounded-full bg-muted" />
        <div className="h-10 w-24 shrink-0 rounded-full bg-muted" />
        <div className="h-10 w-32 shrink-0 rounded-full bg-muted" />
      </div>
    </section>
  )
}
