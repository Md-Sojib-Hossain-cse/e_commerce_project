"use client"

import { selectCartTotalItems } from "@/redux/features/cart/cartSlice"
import { useAppSelector } from "@/redux/hook"
import { ShoppingCart, Search, Heart } from "lucide-react"
import { useState } from "react"

const NavbarActions = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartItemCount = useAppSelector(selectCartTotalItems)

  return (
    <>
      <div className="flex items-center gap-3">
        <Search size={18} />
        <div
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative cursor-pointer"
        >
          <ShoppingCart size={18} />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-orange-500 p-0 text-xs text-white hover:bg-orange-600">
              <span className="p-1">{cartItemCount || 0}</span>
            </span>
          )}
          <Heart size={18} />
        </div>
      </div>
      {/* <CartSidebar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={customerCartItems}
      /> */}
    </>
  )
}

export default NavbarActions
