"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useAppSelector } from "@/redux/hook"
import { selectCartTotalItems } from "@/redux/features/cart/cartSlice"

export default function FloatingEdgeBar() {
  const [isClient, setIsClient] = useState(true)
  const cartItemCount = useAppSelector(selectCartTotalItems)

  return (
    <aside className="fixed top-1/2 right-0 hidden -translate-y-1/2 md:z-40 md:flex">
      <div className="w-[110px] border-l border-white/10 bg-primary-background text-primary-foreground shadow-lg md:w-14">
        <ul className="flex flex-col items-center justify-center divide-y divide-white/10">
          <li className="relative w-full">
            <Link
              href="/dashboard/checkout"
              className="flex w-full flex-col items-center justify-center py-3 text-primary-foreground"
              aria-label="Cart"
              title="Cart"
            >
              <ShoppingCart size={24} />
              <span className="mt-1 hidden text-[10px] md:block">Cart</span>
              {isClient && cartItemCount > 0 && (
                <span className="absolute -top-1 -left-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-background px-1 text-[10px] text-primary-foreground">
                  {cartItemCount || 0}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
