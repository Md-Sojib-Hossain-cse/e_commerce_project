/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {
  useState,
  useMemo,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react"
import Link from "next/link"
import {
  Menu,
  Phone,
  Search,
  Headphones,
  ShoppingCart,
  User as UserIcon,
  ChevronDown,
  ChevronRight,
  Heart,
  Package,
  Grid2X2,
  Home,
  X,
} from "lucide-react"
import Image from "next/image"
import SmartSearch from "@/components/custom/search/SmartSearch"
import { useRouter } from "next/navigation"

// ----- safe helpers -----
function isRecord(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === "object"
}
function getProp(o: unknown, k: string): unknown {
  return isRecord(o) && k in o ? (o as Record<string, unknown>)[k] : undefined
}
function getStr(o: unknown, k: string): string | undefined {
  const v = getProp(o, k)
  return typeof v === "string" ? v : undefined
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)

  const [isClient, setIsClient] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  )
  const router = useRouter()

  const settings = {
    logo: "https://res.cloudinary.com/dikjzg7df/image/upload/v1792817904/logo_puciyl.jpg",
  }

  const cartItems = [{}, {}] // Replace with actual cart items from your state or context

  // Transform categories for UI
  const categories = useMemo(() => {
    const raw: any[] = [
      {
        _id: "cat-001",
        id: "cat-001",
        name: "Men's Fashion",
        slug: "mens-fashion",
        subCategories: [
          "T-Shirts",
          "Shirts",
          "Pants & Trousers",
          "Jeans",
          "Panjabi",
          "Jackets & Hoodies",
          "Men's Shoes",
          "Watches",
        ],
      },
      {
        _id: "cat-002",
        id: "cat-002",
        name: "Women's Fashion",
        slug: "womens-fashion",
        subCategories: [
          "Sarees",
          "Salwar Kameez",
          "Kurtis",
          "Tops & Blouses",
          "Dresses",
          "Jeans & Trousers",
          "Women's Shoes",
          "Handbags",
        ],
      },
      {
        _id: "cat-003",
        id: "cat-003",
        name: "Kids' Fashion",
        slug: "kids-fashion",
        subCategories: [
          "Boys' Clothing",
          "Girls' Clothing",
          "Baby Clothing",
          "Kids' Shoes",
          "School Uniforms",
        ],
      },
      {
        _id: "cat-004",
        id: "cat-004",
        name: "Electronics",
        slug: "electronics",
        subCategories: [
          "Mobile Phones",
          "Headphones & Earphones",
          "Chargers & Cables",
          "Power Banks",
          "Smart Watches",
          "Computer Accessories",
        ],
      },
      {
        _id: "cat-005",
        id: "cat-005",
        name: "Beauty & Personal Care",
        slug: "beauty-personal-care",
        subCategories: [
          "Skin Care",
          "Hair Care",
          "Makeup",
          "Perfumes",
          "Personal Hygiene",
        ],
      },
      {
        _id: "cat-006",
        id: "cat-006",
        name: "Shoes & Footwear",
        slug: "shoes-footwear",
        subCategories: [
          "Sneakers",
          "Formal Shoes",
          "Sandals & Slippers",
          "Sports Shoes",
          "Boots",
        ],
      },
      {
        _id: "cat-007",
        id: "cat-007",
        name: "Bags & Accessories",
        slug: "bags-accessories",
        subCategories: [
          "Backpacks",
          "Handbags",
          "Wallets",
          "Belts",
          "Sunglasses",
          "Caps & Hats",
        ],
      },
      {
        _id: "cat-008",
        id: "cat-008",
        name: "Home & Living",
        slug: "home-living",
        subCategories: [
          "Home Decor",
          "Bed Sheets",
          "Kitchen Accessories",
          "Storage & Organization",
          "Lighting",
        ],
      },
      {
        _id: "cat-009",
        id: "cat-009",
        name: "Sports & Outdoors",
        slug: "sports-outdoors",
        subCategories: [
          "Sportswear",
          "Gym Accessories",
          "Fitness Equipment",
          "Outdoor Accessories",
        ],
      },
      {
        _id: "cat-010",
        id: "cat-010",
        name: "Watches & Jewelry",
        slug: "watches-jewelry",
        subCategories: [
          "Men's Watches",
          "Women's Watches",
          "Necklaces",
          "Bracelets",
          "Rings",
          "Earrings",
        ],
      },
    ]

    return raw.map((c) => {
      const id = String((c._id ?? c.id ?? c.slug ?? "") || "")
      const slug = typeof c.slug === "string" ? c.slug : undefined
      const label = String(
        getStr(c, "name") ?? getStr(c, "label") ?? "Category"
      )
      const subCategories = Array.isArray(c.subCategories)
        ? c.subCategories
        : Array.isArray(c.children)
          ? c.children.map(
              (child: unknown) =>
                getStr(child, "name") ?? getStr(child, "label") ?? "Subcategory"
            )
          : []

      return { id, slug, label, subCategories }
    })
  }, [])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  return (
    <>
      {/* ===== Desktop/Large Screen ===== */}
      <div className="border-neutral sticky top-0 z-50 hidden w-full border-b bg-white shadow-sm lg:block">
        <div className="mx-auto max-w-7xl px-2 md:px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo + Title */}
            <div className="flex shrink-0 items-center space-x-3 pl-2 md:pl-4 lg:pl-8">
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
                    style={{ width: "auto" }}
                  />
                ) : (
                  <span className="text-3xl font-extrabold text-primary">
                    Dressen
                  </span>
                )}
              </Link>
            </div>

            {/* Search Area */}
            <div className="flex flex-1 justify-center lg:ml-30">
              <div className="flex w-full max-w-2xl items-center gap-2">
                <div className="flex flex-1 justify-center">
                  <div className="w-full max-w-2xl">
                    <SmartSearch />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/contact-us"
                className="border-neutral inline-flex items-center gap-2 rounded-md border bg-primary px-3 py-2 text-accent hover:bg-primary-background hover:text-primary-foreground"
                aria-label="contact"
              >
                <Headphones size={18} />
              </Link>

              <Link
                href="/dashboard/wishlist"
                className="border-neutral relative inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-primary hover:text-secondary"
                aria-label="cart"
              >
                <Heart size={18} />
                {isClient && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-xs text-accent">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <Link
                href="/dashboard/checkout"
                className="border-neutral relative inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors delay-0 hover:bg-primary-foreground hover:text-primary-background"
                aria-label="cart"
              >
                <ShoppingCart size={18} />
                {isClient && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-foreground px-1 text-xs text-primary-background">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile/Small Screen ===== */}
      <div className="sticky top-0 z-30 w-full bg-primary text-accent lg:hidden">
        <div className="mx-auto w-full max-w-7xl px-4 py-3">
          {/* Normal State */}
          {!isSearchActive && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={isMenuOpen}
                  className="rounded-lg p-2 transition-colors hover:bg-accent/20"
                >
                  <Menu size={22} />
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
                  <span className="text-xl font-bold text-accent">Dressen</span>
                  {/* )} */}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="rounded-lg bg-primary-foreground p-2 text-primary-background transition-colors hover:bg-accent/90"
                  aria-label="Search"
                  onClick={() => setIsSearchActive(true)}
                >
                  <Search size={18} />
                </button>

                <Link
                  href="/contact-us"
                  className="rounded-lg bg-primary-foreground p-2 text-primary-background transition-colors hover:bg-accent/90"
                  aria-label="Contact"
                >
                  <Phone size={18} />
                </Link>

                <Link
                  href="/dashboard/checkout"
                  className="relative rounded-lg bg-primary-foreground p-2 text-primary-background transition-colors hover:bg-accent/90"
                  aria-label="Cart"
                >
                  <ShoppingCart size={18} />
                  {isClient && cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-foreground px-1 text-xs text-primary-background">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          )}

          {/* Search Active State */}
          {isSearchActive && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchActive(false)}
                className="shrink-0 rounded-lg bg-accent/10 p-2 transition-colors hover:bg-accent/20"
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
                    )
                    setIsSearchActive(false)
                  }}
                />
              </div>

              {/* ডানপাশে আলাদা বোতাম লাগবে না—SmartSearch নিজেই সার্চ করতে পারে */}
            </div>
          )}

          {/* Mobile Navigation Drawer */}
          {isMenuOpen && !isSearchActive && (
            <div className="fixed inset-0 z-20 lg:hidden">
              {/* Backdrop */}
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="absolute inset-0 h-full w-full bg-black/40 backdrop-blur-[1px]"
              />

              {/* Drawer */}
              <aside
                className="absolute top-0 left-0 flex h-dvh w-[min(80%,288px)] animate-in flex-col bg-white text-gray-700 shadow-2xl duration-300 slide-in-from-left"
                aria-label="Mobile navigation"
              >
                {/* Drawer Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-primary-foreground/40 px-6 py-3 text-sm font-bold">
                  <h3
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold text-gray-900"
                  >
                    Menu
                  </h3>

                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    className="rounded-md p-2 text-gray-900 transition-colors hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Scrollable Navigation */}
                <nav className="flex-1 overflow-y-auto px-6 py-4">
                  {/* Home */}
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-md flex items-center gap-5 transition-colors hover:text-black"
                  >
                    <Home size={20} className="shrink-0" />
                    <span>Home</span>
                  </Link>

                  {/* All Products */}
                  <Link
                    href="/shop"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-md flex min-h-[64px] items-center gap-5 transition-colors hover:text-black"
                  >
                    <Grid2X2 size={20} className="shrink-0" />
                    <span>Shop</span>
                  </Link>

                  {/* Categories */}
                  <div className="pb-3">
                    {categories.slice(0, 3).map((category) => {
                      const isExpanded = expandedCategories.has(category.id)
                      const hasSubcategories = category.subCategories.length > 0

                      return (
                        <div key={category.id}>
                          <div className="flex items-center justify-between gap-2">
                            <Link
                              href={`/category?slug=${encodeURIComponent(
                                category.slug ?? category.id
                              )}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex-1 py-3 text-base transition-colors hover:text-black"
                            >
                              {category.label === "Men's Fashion"
                                ? "Men's Collection"
                                : category.label === "Women's Fashion"
                                  ? "Women's Collection"
                                  : category.label === "Kids' Fashion"
                                    ? "Kid's Wear"
                                    : category.label}
                            </Link>

                            {hasSubcategories && (
                              <button
                                type="button"
                                onClick={() => toggleCategory(category.id)}
                                aria-label={`Toggle ${category.label}`}
                                aria-expanded={isExpanded}
                                className="rounded-md p-2 hover:bg-gray-100"
                              >
                                {isExpanded ? (
                                  <ChevronDown size={20} />
                                ) : (
                                  <ChevronRight size={20} />
                                )}
                              </button>
                            )}
                          </div>

                          {/* Expandable Subcategories */}
                          {hasSubcategories && isExpanded && (
                            <div className="mb-2 ml-3 border-l-2 border-gray-200 pl-3">
                              {category.subCategories.map(
                                (subCat: string, index: number) => (
                                  <Link
                                    key={`${subCat}-${index}`}
                                    href={`/category?slug=${encodeURIComponent(
                                      category.slug ?? category.id
                                    )}&sub=${encodeURIComponent(String(subCat))}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2.5 text-sm text-gray-600 transition-colors hover:text-black"
                                  >
                                    {subCat}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200" />

                  {/* Additional Links */}
                  <div className="flex flex-col space-y-5 py-3">
                    <Link
                      href="/track-order"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-md flex items-center gap-5 hover:text-black"
                    >
                      <Package size={20} className="shrink-0" />
                      <span>Track Order</span>
                    </Link>

                    <Link
                      href="/dashboard/wishlist"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-md flex items-center gap-5 hover:text-black"
                    >
                      <Heart size={20} className="shrink-0" />
                      <span>Wishlist</span>
                    </Link>

                    <Link
                      href="/contact-us"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-md flex items-center gap-5 hover:text-black"
                    >
                      <Headphones size={20} className="shrink-0" />
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </nav>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
