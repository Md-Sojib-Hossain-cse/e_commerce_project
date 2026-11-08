"use client"

import { use } from "react"

const wait = new Promise<void>((resolve) => {
  setTimeout(resolve, 3000)
})

export default function SuspenseTest() {
  use(wait)

  return (
    <div className="rounded-lg bg-green-100 p-4 text-green-800">
      Suspense test completed!
    </div>
  )
}
