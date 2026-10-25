"use client";

import Link from "next/link";
import Image from "next/image";

import { ShoppingCart, LogOut } from "lucide-react";

export default function MainMenu() {

    const currentUser ={
        id : 1,
        name : "John doe",
        email : "text@gmail.com",
        image : "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041522/cld-sample-2.jpg"
    }
    const cartCount = 10



  const isLoggedIn = Boolean(currentUser?.id);
  const displayName =
    currentUser?.name ??
    (currentUser?.email ? currentUser.email.split("@")[0] : undefined);

  // User image URL - API থেকে আসা image বা fallback avatar
  const userImage = currentUser?.image || "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041522/cld-sample-2.jpg";

  // User image debugging removed

  // 🚪 লগআউট হ্যান্ডলার: NextAuth + Redux + ব্যাকএন্ড ক্লিন
  const handleLogout = async () => {
  };

  return (
    <div className="relative hidden lg:block left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#facf35]">
      <div className="container mx-auto w-full px-3 md:px-6 lg:px-36">
        <div className="flex items-center justify-between py-2 h-10">
          {/* Left menu */}
          <nav className="flex items-center gap-5 text-sm text-[#2e2e2e] pl-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/product-listing" className="hover:underline">Product</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact-us" className="hover:underline">Contact</Link>
          </nav>

          {/* Right: Account + Cart */}
          <div className="flex items-center gap-4 text-[#2e2e2e]">
            {!isLoggedIn ? (
              // 🔓 লগইন না থাকলে - Login/Register link
              <Link href="/auth/login" className="text-sm hover:underline">
                Login / Register
              </Link>
            ) : (
              // 🔒 লগইন থাকলে: ড্যাশবোর্ড + ইউজার ইমেজ + নাম + Logout
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="hidden sm:inline-flex items-center gap-2 text-sm hover:underline group"
                >
                  {/* User Image - Always show image, fallback to avatar icon if image fails */}
                  <div className="relative">
                    <Image
                      src={userImage}
                      alt={displayName || "User avatar"}
                      width={28}
                      height={28}
                      className="rounded-full object-cover border-2 border-white/30 group-hover:border-white/60 transition-colors"
                      sizes="28px"
                      priority
                      onError={(e) => {
                        // যদি image load না হয়, তাহলে fallback হিসেবে avatar icon show করবে
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                
                    
                  </div>
                  <span className="max-w-24 truncate">{displayName ?? "Account"}</span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  aria-label="Logout"
                  className="inline-flex items-center gap-1 rounded-md border border-white/30 px-2 py-1 text-sm hover:bg-white/10 disabled:opacity-60 transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}

            {/* Cart with count */}
            <Link 
              href="/dashboard/checkout" 
              className="relative inline-flex p-2 rounded-md hover:bg-white/10 transition-colors" 
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full text-xs bg-orange-500 text-[#2e2e2e] flex items-center justify-center font-medium">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}