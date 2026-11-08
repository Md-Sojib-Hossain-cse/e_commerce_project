/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import QuantityCounter from "../shared/components/QuantityCounter"
import { ListChecks } from "lucide-react"

interface CheckoutCartProps {
  cartItems: any[]
}

export default function CheckoutCart({ cartItems }: CheckoutCartProps) {
  return (
    <section>
      <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
        <ListChecks className="h-9 w-9 rounded-full bg-primary-background/5 p-2" />
        <span>Your Items: ({cartItems.length})</span>
      </h2>

      <div className="max-h-130 space-y-4 overflow-y-auto pr-2">
        {cartItems.map((item, index) => (
          <div
            key={item._id ?? index}
            className="flex flex-wrap items-center gap-4 rounded-md bg-gray-50 p-4 sm:flex-nowrap"
          >
            {/* Product image and information */}
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <div className="size-16 shrink-0 rounded-md bg-orange-100">
                {/* Add product image here */}
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Product price</p>
                <p className="text-sm text-gray-500">Selected variants</p>
              </div>
            </div>

            {/* Quantity and price controls */}
            <div className="flex items-center gap-4">
              <QuantityCounter limit={20} />

              <span className="text-sm">৳ 450.00</span>

              <Button className="bg-transparent text-lg text-destructive-background hover:bg-destructive-background/5">
                x
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
