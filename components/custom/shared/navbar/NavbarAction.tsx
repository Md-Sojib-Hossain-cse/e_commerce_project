"use client";

import { ShoppingCart, Search, Heart } from "lucide-react";
import { useState } from "react";

const NavbarActions = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = 5;

  return (
    <>
      <div className="flex items-center gap-3">
        <Search size={18} />
        <div
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative cursor-pointer"
        >
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full p-0 flex items-center justify-center text-xs bg-orange-500 hover:bg-orange-600 text-white">
              <span className="p-1">{cartCount}</span>
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
  );
};

export default NavbarActions;
