/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import Link from "next/link";
import {
  Menu,
  Phone,
  Search,
  Headphones,
  ShoppingCart,
  LogOut,
  User as UserIcon,
  ChevronDown,
  ChevronRight,
  Heart,
} from "lucide-react";
import Image from "next/image";
import SmartSearch from "@/components/custom/search/SmartSearch";
import { useRouter } from "next/navigation";




// ----- safe helpers -----
function isRecord(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === "object";
}
function getProp(o: unknown, k: string): unknown {
  return isRecord(o) && k in o ? (o as Record<string, unknown>)[k] : undefined;
}
function getStr(o: unknown, k: string): string | undefined {
  const v = getProp(o, k);
  return typeof v === "string" ? v : undefined;
}





export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const router = useRouter();

  const settings = {
    logo: "https://res.cloudinary.com/dikjzg7df/image/upload/v1792817904/logo_puciyl.jpg",
  }

  const cartItems = []; // Replace with actual cart items from your state or context

  const isLoggedIn = false; // Replace with actual login state from your auth context or state

  const isLogoutLoading = false; // Replace with actual logout loading state from your auth context or state




  // Transform categories for UI
  const categories = useMemo(() => {
    const raw: any[] =  [];

    return raw.map((c) => {
      const id = String((c._id ?? c.id ?? c.slug ?? "") || "");
      const slug = typeof c.slug === "string" ? c.slug : undefined;
      const label = String(
        getStr(c, "name") ?? getStr(c, "label") ?? "Category"
      );
      const subCategories = Array.isArray(c.subCategories) ? c.subCategories : (Array.isArray(c.children) ? c.children.map((child: unknown) => getStr(child, "name") ?? getStr(child, "label") ?? "Subcategory") : []);

      return { id, slug, label, subCategories };
    });
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleLogout = async () => {
  };

  return (
    <>
      {/* ===== Desktop/Large Screen ===== */}
      <div className="hidden lg:block w-full bg-white border-b border-neutral shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 w-full md:px-6 lg:px-36">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3 shrink-0">
              <Link
                href="/"
                className="flex items-center"
                aria-label="Go to homepage"
              >
                {settings?.logo ? (
                  <Image
                    src={settings.logo}
                    alt="Dressen Logo"
                    width={120}
                    height={40}
                    className="h-10"
                    style={{ width: 'auto' }}
                  />
                ) : (
                  <span className="font-extrabold text-3xl text-primary">
                    Dressen
                  </span>
                )}
              </Link>
            </div>

            {/* Search Area */}
            <div className="flex-1 flex justify-center lg:ml-30">
              <div className="flex items-center gap-2 w-full max-w-2xl">
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-2xl">
                    <SmartSearch />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center text-accent gap-2 px-3 py-2 rounded-md border border-neutral hover:bg-secondary bg-primary"
                aria-label="contact"
              >
                <Headphones size={18} />
              </Link>

              <Link
                href="/dashboard/wishlist"
                className="relative inline-flex items-center justify-center h-10 w-10 rounded-md border border-neutral hover:bg-primary hover:text-secondary"
                aria-label="cart"
              >
                <Heart size={18} />
                {isClient && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 min-w-5 px-1 rounded-full text-xs bg-secondary text-accent flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <Link
                href="/dashboard/checkout"
                className="relative inline-flex items-center justify-center h-10 w-10 rounded-md border border-neutral hover:bg-primary hover:text-secondary"
                aria-label="cart"
              >
                <ShoppingCart size={18} />
                {isClient && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 min-w-5 px-1 rounded-full text-xs bg-secondary text-accent flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleLogout}
                    aria-label="Logout"
                    disabled={isLogoutLoading}
                    className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 disabled:opacity-60"
                  >
                    <LogOut size={16} />
                    {isLogoutLoading ? "Logging out..." : "Logout"}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile/Small Screen ===== */}
      <div className="lg:hidden sticky top-0 z-30 bg-primary text-accent w-full">
        <div className="container mx-auto px-4 py-3">
          {/* Normal State */}
          {!isSearchActive && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                  aria-label="Menu"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu size={20} />
                </button>
                <Link href="/" className="flex items-center">
                  {/* {settings?.logo ? (
                    <Image
                      src={settings.logo}
                      alt="Dressen Logo"
                      width={80}
                      height={32}
                      className="h-8 w-auto"
                    />
                  ) : ( */}
                    <span className="font-bold text-xl text-accent">
                      Dressen
                    </span>
                  {/* )} */}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-lg bg-primary-foreground text-primary-background hover:bg-accent/90 transition-colors"
                  aria-label="Search"
                  onClick={() => setIsSearchActive(true)}
                >
                  <Search size={18} />
                </button>

                <Link
                  href="/contact-us"
                  className="p-2 rounded-lg bg-primary-foreground text-primary-background hover:bg-accent/90 transition-colors"
                  aria-label="Contact"
                >
                  <Phone size={18} />
                </Link>

                <Link
                  href="/dashboard/checkout"
                  className="relative p-2 rounded-lg bg-primary-foreground text-primary-background hover:bg-accent/90 transition-colors"
                  aria-label="Cart"
                >
                  <ShoppingCart size={18} />
                  {isClient && cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full text-xs bg-primary-foreground text-primary-background flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>

                {!isLoggedIn ? (
                  <Link
                    href="/auth/login"
                    className="p-2 rounded-lg bg-primary-foreground text-primary-background hover:bg-accent/90 transition-colors"
                    aria-label="Login/Register"
                  >
                    <UserIcon size={18} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={handleLogout}
                    aria-label="Logout"
                    disabled={isLogoutLoading}
                    className="p-2 rounded-lg bg-accent text-secondary hover:bg-accent/90 transition-colors disabled:opacity-60"
                  >
                    <LogOut size={18} />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Search Active State */}
          {isSearchActive && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchActive(false)}
                className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors shrink-0"
                aria-label="Close search"
              >
                <Menu size={20} />
              </button>

              <div className="flex-1">
                <SmartSearch
                  placeholder="Search Product..."
                  className="w-full"
                  onSearch={(q) => {
                    // ডিফল্ট রাউটিং
                    router.push(
                      `/product-listing?search=${encodeURIComponent(q)}`
                    );
                    setIsSearchActive(false);
                  }}
                />
                smart search
              </div>

              {/* ডানপাশে আলাদা বোতাম লাগবে না—SmartSearch নিজেই সার্চ করতে পারে */}
            </div>
          )}

          {/* Categories Menu */}
          {isMenuOpen && !isSearchActive && (
            <div className="mt-3 bg-accent/10 rounded-lg p-3">
              <nav className="space-y-2">
                <Link
                  href="/product-listing"
                  className="block py-2 px-3 hover:bg-accent/10 rounded transition-colors text-primary-background bg-primary-foreground lg:bg-primary-background lg:text-primary-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Categories
                </Link>

                {categories.map((category) => (
                  <div key={category.id}>
                    <div className="flex items-center justify-between py-2 px-3 hover:bg-accent/10 rounded transition-colors">
                      <Link
                        href={`/category?slug=${encodeURIComponent(category.slug ?? category.id)}`}
                        className="flex-1 text-black"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.label}
                      </Link>
                      {category.subCategories && category.subCategories.length > 0 && (
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="p-3 hover:bg-accent/20 rounded min-w-[100px] min-h-[44px] flex items-center justify-center"
                          aria-label={`Toggle ${category.label} subcategories`}
                        >
                          {expandedCategories.has(category.id) ? (
                            <ChevronDown size={20} className="text-black" />
                          ) : (
                            <ChevronRight size={20} className="text-black" />
                          )}
                        </button>
                      )}
                    </div>
                    {category.subCategories && category.subCategories.length > 0 && expandedCategories.has(category.id) && (
                      <div className="ml-4 space-y-1">
                        {category.subCategories.map((subCat: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: any) => (
                          <Link
                            key={`${subCat}-${index}`}
                            href={`/category?slug=${encodeURIComponent(category.slug ?? category.id)}&sub=${encodeURIComponent(String(subCat ?? ""))}`}
                            className="block py-1.5 px-3 text-sm hover:bg-accent/10 rounded transition-colors text-black"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subCat}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
