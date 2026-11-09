/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import QuantityCounter from "../shared/components/QuantityCounter"
import { ListChecks } from "lucide-react"
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import {
  removeFromCart,
  selectCartTotalItems,
} from "@/redux/features/cart/cartSlice"

interface CheckoutCartProps {
  cartItems: any[]
}

export default function CheckoutCart({ cartItems }: CheckoutCartProps) {
  const cartItemCount = useAppSelector(selectCartTotalItems)
  const dispatch = useAppDispatch()

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId))
  }

  return (
    <section>
      <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
        <ListChecks className="h-9 w-9 rounded-full bg-primary-background/5 p-2" />
        <span>Your Items: ({cartItemCount || cartItems.length || 0})</span>
      </h2>

      <div className="space-y-4 overflow-y-auto pr-2">
        {cartItems.map((item, index) => (
          <div
            key={item.productId ?? index}
            className="flex flex-col flex-wrap items-start gap-4 rounded-md bg-gray-50 p-4 sm:flex-nowrap md:flex-row md:items-center"
          >
            {/* Product image and information */}
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-orange-100">
                <Image
                  src={
                    item.image ||
                    "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg"
                  }
                  alt={item.name || "product"}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold">
                  {item.name || "Unknown Product"}
                </h3>
                <p className="text-sm text-gray-500">৳{item.unitPrice}</p>
                <p className="text-sm text-gray-500">Selected variants</p>
              </div>
            </div>

            {/* Quantity and price controls */}
            <div className="flex flex-row items-center gap-4">
              <QuantityCounter
                quantity={item.quantity || 1}
                limit={20}
                type="cartItem"
                productId={item.productId}
              />

              <span className="w-16 text-center text-sm">
                ৳ {item.totalAmount || item.unitPrice * item.quantity}
              </span>

              <Button
                onClick={() => handleRemoveItem(item.productId)}
                className="bg-transparent text-lg text-destructive-background hover:bg-destructive-background/5"
              >
                x
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
