"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingEdgeBar() {
  const [isClient, setIsClient] = useState(true);

  const cartItems = [{},{}]

  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 hidden md:flex md:z-40">
      <div className="bg-primary-background text-primary-foreground shadow-lg border-l border-white/10 w-[110px] md:w-14">
        <ul className="flex flex-col items-center justify-center divide-y divide-white/10">
          <li className="w-full relative">
            <Link
              href="/dashboard/checkout"
              className="flex flex-col text-primary-foreground items-center justify-center py-3 w-full"
              aria-label="Cart"
              title="Cart"
            >
              <ShoppingCart size={24} />
              <span className="text-[10px] mt-1 hidden md:block">Cart</span>
              {isClient && cartItems.length > 0 && (
                <span className="absolute -top-1 -left-2 h-5 min-w-5 px-1 rounded-full text-[10px] bg-primary-background text-primary-foreground flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}