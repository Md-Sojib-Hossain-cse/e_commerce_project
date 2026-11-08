/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UICategory = { id: string; slug?: string; label: string; image?: string };

// ----- safe helpers (no any) -----
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


type TCategory = {
  _id?: string;
  slug?: string;
  name: string;
  image?: string;
  icon?: {
    name?: string;
    url?: string;
  };
};

export default function CategoryRail() {
  
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const current = search.get("category") ?? "";
  const railRef = useRef<HTMLDivElement>(null);
  
const data : TCategory[] = [
  {
    "_id": "cat_001",
    "slug": "mens-fashion",
    "name": "Men's Fashion",
    "image": "/categories/mens-fashion.png",
    "icon": {
      "name": "shirt",
      "url": "/categories/mens-fashion.png"
    }
  },
  {
    "_id": "cat_002",
    "slug": "womens-fashion",
    "name": "Women's Fashion",
    "image": "/categories/womens-fashion.png",
    "icon": {
      "name": "shopping-bag",
      "url": "/categories/womens-fashion.png"
    }
  },
  {
    "_id": "cat_003",
    "slug": "electronics",
    "name": "Electronics",
    "image": "/categories/electronics.png",
    "icon": {
      "name": "smartphone",
      "url": "/categories/electronics.png"
    }
  },
  {
    "_id": "cat_004",
    "slug": "home-living",
    "name": "Home & Living",
    "image": "/categories/home-living.png",
    "icon": {
      "name": "house",
      "url": "/categories/home-living.png"
    }
  },
  {
    "_id": "cat_005",
    "slug": "shoes",
    "name": "Shoes",
    "image": "/categories/shoes.png",
    "icon": {
      "name": "footprints",
      "url": "/categories/shoes.png"
    }
  },
  {
    "_id": "cat_006",
    "slug": "bags-accessories",
    "name": "Bags & Accessories",
    "image": "/categories/bags-accessories.png",
    "icon": {
      "name": "briefcase",
      "url": "/categories/bags-accessories.png"
    }
  },
  {
    "_id": "cat_007",
    "slug": "beauty-personal-care",
    "name": "Beauty & Personal Care",
    "image": "/categories/beauty-personal-care.png",
    "icon": {
      "name": "heart",
      "url": "/categories/beauty-personal-care.png"
    }
  },
  {
    "_id": "cat_008",
    "slug": "sports-outdoors",
    "name": "Sports & Outdoors",
    "image": "/categories/sports-outdoors.png",
    "icon": {
      "name": "dumbbell",
      "url": "/categories/sports-outdoors.png"
    }
  },
  {
    "_id": "cat_009",
    "slug": "watches",
    "name": "Watches",
    "image": "/categories/watches.png",
    "icon": {
      "name": "watch",
      "url": "/categories/watches.png"
    }
  },
  {
    "_id": "cat_010",
    "slug": "kids-fashion",
    "name": "Kids' Fashion",
    "image": "/categories/kids-fashion.png",
    "icon": {
      "name": "baby",
      "url": "/categories/kids-fashion.png"
    }
  }
]


  const cats = useMemo<UICategory[]>(() => {
    const raw : TCategory[] = Array.isArray(data) ? data : [];
    return raw.map((c) => {
      const id = String((c._id ?? c.slug ?? "") || "");
      const slug = typeof c.slug === "string" ? c.slug : undefined;
      const label = String(getStr(c, "name") ?? getStr(c, "label") ?? "Category");
      const icon = getProp(c, "icon");
      const iconUrl = isRecord(icon) ? getStr(icon, "url") : undefined;
      const image = iconUrl ?? getStr(c, "image") ?? undefined;
      return { id, slug, label, image };
    });
  }, [data]);

  const setCategory = (cat?: UICategory) => {
    const params = new URLSearchParams(search.toString());
    if (!cat) params.delete("category");
    else params.set("category", cat.slug ?? cat.id); // ✅ slug first
    router.push(`${pathname}?${params.toString()}`);
  };

  const scrollBy = (dx: number) => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: dx, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full">
      <div className="mb-2 flex items-center justify-between px-1">
        <h3 className="font-semibold text-base md:text-lg text-primary-background">Browse by Category</h3>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scrollBy(-240)} 
            className="w-8 h-8 flex items-center justify-center rounded-full border border-primary-background transition-colors text-primary-background active:scale-90 hover:scale-105"
            aria-label="Previous categories"
          >
            ‹
          </button>
          <button 
            onClick={() => scrollBy(240)} 
            className="w-8 h-8 flex items-center justify-center rounded-full border border-primary-background transition-colors text-primary-background active:scale-90 hover:scale-105"
            aria-label="Next categories"
          >
            ›
          </button>
        </div>
      </div>

      <div ref={railRef} className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          onClick={() => setCategory(undefined)}
          className={`whitespace-nowrap px-3 py-2 rounded-full border border-neutral ${current ? "bg-accent text-primary-background hover:bg-section" : "bg-secondary text-primary-background"}`}
          aria-pressed={!current}
        >
          All
        </button>

        {cats.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c)}
            className={`whitespace-nowrap px-3 py-2 rounded-full border border-neutral transition ${
              current && current === (c.slug ?? c.id)
                ? "bg-primary-background text-primary-foreground"
                : "bg-accent text-primary-background hover:bg-section"
            }`}
            aria-pressed={current === (c.slug ?? c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
    </section>
  );
}
