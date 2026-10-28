"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Home, Layers, ShoppingCart, Menu, X } from "lucide-react"
import { ReactNode } from "react"

type NavKey = "home" | "categories" | "cart" | "menu"

type NavItem = {
  key: NavKey
  label: string
  icon: ReactNode
  href?: string
  onClick?: () => void
}

export default function MobileBottomNav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerType, setDrawerType] = useState<"categories" | "menu">("menu")
  const remoteCats = [
    {
      _id: "cat-001",
      id: "cat-001",
      name: "Men's Fashion",
      slug: "mens-fashion",
    },
    {
      _id: "cat-002",
      id: "cat-002",
      name: "Women's Fashion",
      slug: "womens-fashion",
    },
    {
      _id: "cat-003",
      id: "cat-003",
      name: "Electronics",
      slug: "electronics",
    },
    {
      _id: "cat-004",
      id: "cat-004",
      name: "Mobile Phones",
      slug: "mobile-phones",
    },
    {
      _id: "cat-005",
      id: "cat-005",
      name: "Home & Living",
      slug: "home-living",
    },
    {
      _id: "cat-006",
      id: "cat-006",
      name: "Beauty & Personal Care",
      slug: "beauty-personal-care",
    },
    {
      _id: "cat-007",
      id: "cat-007",
      name: "Shoes",
      slug: "shoes",
    },
    {
      _id: "cat-008",
      id: "cat-008",
      name: "Bags & Accessories",
      slug: "bags-accessories",
    },
    {
      _id: "cat-009",
      id: "cat-009",
      name: "Sports & Outdoors",
      slug: "sports-outdoors",
    },
    {
      _id: "cat-010",
      id: "cat-010",
      name: "Kids & Toys",
      slug: "kids-toys",
    },
  ]
  const isSuccess = true // Simulating successful fetch for demonstration

  const items: NavItem[] = useMemo(
    () => [
      { key: "home", label: "Home", icon: <Home size={18} />, href: "/" },
      {
        key: "categories",
        label: "Categories",
        icon: <Layers size={18} />,
        onClick: () => {
          setDrawerType("categories")
          setDrawerOpen(true)
        },
      },
      {
        key: "cart",
        label: "Cart",
        icon: <ShoppingCart size={18} />,
        href: "/dashboard/checkout",
      },
      {
        key: "menu",
        label: "Menu",
        icon: <Menu size={18} />,
        onClick: () => {
          setDrawerType("menu")
          setDrawerOpen(true)
        },
      },
    ],
    []
  )

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <nav className="border-neutral fixed inset-x-0 bottom-0 z-10 border-t bg-primary-background shadow-sm lg:hidden">
        <ul className="grid grid-cols-4">
          {items.map((it) =>
            it.href ? (
              <li key={it.key}>
                <Link
                  href={it.href}
                  className="flex flex-col items-center justify-center py-2 text-secondary"
                >
                  {it.icon}
                  <span className="mt-1 text-[11px]">{it.label}</span>
                </Link>
              </li>
            ) : (
              <li key={it.key}>
                <button
                  type="button"
                  onClick={it.onClick}
                  className="flex w-full flex-col items-center justify-center py-2 text-secondary"
                >
                  {it.icon}
                  <span className="mt-1 text-[11px]">{it.label}</span>
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={closeDrawer} />

          {/* Drawer Content */}
          <div className="border-neutral sm absolute right-0 bottom-0 left-0 max-h-[80vh] overflow-y-auto rounded-t-2xl border-t bg-secondary-background p-4 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {drawerType === "categories" ? "Categories" : "Menu"}
              </h3>
              <button
                onClick={closeDrawer}
                className="hover:bg-neutral rounded-full p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-2">
              {drawerType === "categories" ? (
                // Categories content
                <>
                  {isSuccess &&
                  Array.isArray(remoteCats) &&
                  remoteCats.length > 0 ? (
                    remoteCats.map(
                      (cat: Record<string, unknown>, index: number) => (
                        <Link
                          key={String(cat._id || cat.id || index)}
                          href={`/category?slug=${encodeURIComponent(String(cat.slug || ""))}`}
                          className="hover:bg-neutral block rounded p-3"
                          onClick={closeDrawer}
                        >
                          {String(cat.name || "Category")}
                        </Link>
                      )
                    )
                  ) : (
                    <div className="p-3 text-center text-gray-500">
                      No categories found
                    </div>
                  )}
                </>
              ) : (
                // Menu content
                <>
                  <Link
                    href="/"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/deals"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    Today&apos;s Deals
                  </Link>
                  <Link
                    href="/discounts"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    Discounts
                  </Link>
                  <Link
                    href="/more"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    Featured
                  </Link>
                  <Link
                    href="/reviews"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    Top Reviewed
                  </Link>
                  <Link
                    href="/about"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="hover:bg-neutral block rounded p-3"
                    onClick={closeDrawer}
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
