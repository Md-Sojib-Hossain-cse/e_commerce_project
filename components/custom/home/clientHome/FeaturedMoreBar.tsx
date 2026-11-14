"use client"

import Link from "next/link"

type Edge = { label: string; href?: string }
type Props = {
  left?: Edge // default: { label: "Featured" }
  right?: Edge // default: { label: "More..." }
  className?: string
}

export default function FeatureMoreBar({
  left = { label: "Featured" },
  right = { label: "More..." },
  className = "",
}: Props) {
  const Left = left.href ? (
    <Link
      href={left.href}
      className="rounded-sm font-bold text-primary-foreground hover:underline focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
    >
      {left.label}
    </Link>
  ) : (
    <span className="font-bold text-primary-foreground">{left.label}</span>
  )

  const rightBase =
    "font-medium rounded-md bg-primary-foreground px-6 py-2 text-primary-background bg-primary-background hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"

  const Right = right.href ? (
    <Link href={right.href} className={rightBase}>
      {right.label}
    </Link>
  ) : (
    <span className={rightBase}>{right.label}</span>
  )

  return (
    <nav
      role="navigation"
      aria-label="Feature bar"
      className={`my-4 w-full bg-primary-background py-2 ${className}`}
    >
      <div className="container mx-auto px-3 md:px-4 xl:px-6">
        <div className="flex h-10 items-center justify-between">
          {Left}
          {Right}
        </div>
      </div>
    </nav>
  )
}
