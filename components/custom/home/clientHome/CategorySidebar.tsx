"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type RemoteCategory = {
  _id?: string; slug?: string; name?: string;
  subCategories?: string[];
};

type UICategory = {
  id: string;
  slug: string;
  label: string;
  subCategories: string[];
};

export default function CategorySidebar() {

  const isSuccess = true; // Replace with actual success check
  const remoteCats: RemoteCategory[] = 
[
  {
    "_id": "cat_001",
    "slug": "mens-fashion",
    "name": "Men's Fashion",
    "subCategories": [
      "T-Shirts",
      "Shirts",
      "Pants & Trousers",
      "Jeans",
      "Jackets",
      "Panjabi"
    ]
  },
  {
    "_id": "cat_002",
    "slug": "womens-fashion",
    "name": "Women's Fashion",
    "subCategories": [
      "Sarees",
      "Kurtis",
      "Dresses",
      "Tops",
      "Pants",
      "Hijabs"
    ]
  },
  {
    "_id": "cat_003",
    "slug": "electronics",
    "name": "Electronics",
    "subCategories": [
      "Smartphones",
      "Headphones",
      "Smart Watches",
      "Chargers",
      "Computer Accessories"
    ]
  },
  {
    "_id": "cat_004",
    "slug": "home-living",
    "name": "Home & Living",
    "subCategories": [
      "Furniture",
      "Home Decor",
      "Kitchen Accessories",
      "Bedding",
      "Lighting"
    ]
  },
  {
    "_id": "cat_005",
    "slug": "shoes",
    "name": "Shoes",
    "subCategories": [
      "Sneakers",
      "Formal Shoes",
      "Sandals",
      "Sports Shoes",
      "Loafers"
    ]
  },
  {
    "_id": "cat_006",
    "slug": "bags-accessories",
    "name": "Bags & Accessories",
    "subCategories": [
      "Backpacks",
      "Handbags",
      "Wallets",
      "Belts",
      "Sunglasses"
    ]
  },
  {
    "_id": "cat_007",
    "slug": "beauty-personal-care",
    "name": "Beauty & Personal Care",
    "subCategories": [
      "Skincare",
      "Makeup",
      "Hair Care",
      "Perfumes",
      "Personal Hygiene"
    ]
  },
  {
    "_id": "cat_008",
    "slug": "sports-outdoors",
    "name": "Sports & Outdoors",
    "subCategories": [
      "Fitness Equipment",
      "Sportswear",
      "Camping Gear",
      "Outdoor Accessories"
    ]
  }
]

  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const cats: UICategory[] =
    isSuccess && Array.isArray(remoteCats) && remoteCats.length
      ? (remoteCats as RemoteCategory[]).map((c) => ({
          id: c._id ?? "",
          slug: c.slug ?? "",
          label: c.name ?? "Category",
          subCategories: c.subCategories ?? [],
        }))
      : [];

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

  return (
    <aside className="hidden md:block md:col-span-3 lg:col-span-2">
      <div className="border rounded-lg overflow-hidden h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96">
        <div className="px-3 bg-primary-background py-2 font-medium border-b text-primary-foreground">Categories</div>
        <div className="overflow-y-auto h-full">
          <ul className="divide-y">
            {cats.map((c) => (
              <li key={c.id} className="text-sm">
                <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-50">
                  <Link href={`/category?slug=${encodeURIComponent(c.slug)}`} className="flex-1">
                    {c.label}
                  </Link>
                  {c.subCategories.length > 0 && (
                    <button
                      onClick={() => toggleCategory(c.id)}
                      className="p-1 hover:bg-gray-200 rounded"
                      aria-label={`Toggle ${c.label} subcategories`}
                    >
                      {expandedCategories.has(c.id) ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </button>
                  )}
                </div>
                {c.subCategories.length > 0 && expandedCategories.has(c.id) && (
                  <ul className="ml-4 border-l bg-gray-50">
                    {c.subCategories.map((sc, index) => (
                      <li key={`${sc}-${index}`}>
                        <Link
                          href={`/category?slug=${encodeURIComponent(c.slug)}&sub=${encodeURIComponent(sc)}`}
                          className="block px-3 py-1.5 hover:bg-gray-100 text-[13px]"
                        >
                          {sc}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
