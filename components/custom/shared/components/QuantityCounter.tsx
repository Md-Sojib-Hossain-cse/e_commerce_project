"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const QuantityCounter = (props: { limit: number }) => {
  const [quantity, setQuantity] = useState(0)
  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
        className="rounded-lg border border-primary-background/10 bg-primary-white px-3 py-2 text-primary-background hover:bg-primary-background/5"
      >
        −
      </Button>
      <span className="min-w-4 text-center">{quantity}</span>
      <Button
        disabled={quantity >= props.limit}
        onClick={() => setQuantity(quantity + 1)}
        className="rounded-lg border border-primary-background/10 bg-primary-white px-3 py-2 text-primary-background hover:bg-primary-background/5"
      >
        +
      </Button>
    </div>
  )
}

export default QuantityCounter
