"use client";

import MainMenu from "../../shared/menubar/MainMenu";
import CategorySidebar from "./CategorySidebar";
import FloatingEdgeBar from "../../shared/floatingEdgeBar/FloatingEdgeBar";
import HomepagePopup from "./HomePagePopup";
import BannerSlider from "./BannerSlider";
import FeatureMoreBar from "./FeaturedMoreBar";
import CategoryRail from "./CategoryRail";
import CategoryProductCards from "./CategoryProductsCard";
import TopReviewed from "./TopReviewed";
import MobileBottomNav from "../../shared/navbar/MobileBottomNav";
import Discount from "./Discount";
import ProductSixGrid from "./ProductSixGrid";

export default function ClientHome() {
  const discounted = [
  {
    "id": "prod-001",
    "title": "Premium Wireless Earbuds",
    "image": "https://unsplash.com",
    "price": 4500,
    "salePrice": 3999
  },
  {
    "id": "prod-002",
    "title": "Mechanical Gaming Keyboard",
    "image": "https://unsplash.com",
    "price": 6200,
    "salePrice": 5500
  },
  {
    "id": "prod-003",
    "title": "Ergonomic Optical Mouse",
    "image": "https://unsplash.com",
    "price": 2500,
    "salePrice": 2250
  },
  {
    "id": "prod-004",
    "title": "Ultra-Wide 4K Monitor",
    "image": "https://unsplash.com",
    "price": 35000,
    "salePrice": 32000
  },
  {
    "id": "prod-005",
    "title": "Smart Fitness Watch",
    "image": "https://unsplash.com",
    "price": 8900,
    "salePrice": 8000
  },
  {
    "id": "prod-006",
    "title": "Noise Cancelling Headphones",
    "image": "https://unsplash.com",
    "price": 12000,
    "salePrice": 10800
  }
]

console.log(discounted)
    const discountLoading = false
    const discountError = false

   const topReviewed = 
[
  {
    "_id": "prod_001",
    "name": "Premium Cotton T-Shirt",
    "image": "/new-arrival-1.png",
    "shopId": "shop_001",
    "featuredImg": "/new-arrival-1.png",
    "gallery": [
      "/new-arrival-1.png",
      "/mens.png"
    ],
    "brandAndCategories": {
      "brand": {
        "name": "Urban Style"
      },
      "categories": [
        {
          "name": "Men's Fashion"
        },
        {
          "name": "T-Shirts"
        }
      ],
      "tags": [
        {
          "name": "Cotton"
        },
        {
          "name": "Casual"
        }
      ]
    },
    "description": {
      "name": "Premium Cotton T-Shirt",
      "slug": "premium-cotton-t-shirt",
      "unit": "piece",
      "description": "A comfortable premium cotton T-shirt designed for everyday wear.",
      "status": "ACTIVE"
    },
    "productType": "PHYSICAL",
    "productInfo": {
      "price": 1200,
      "salePrice": 950,
      "quantity": 45,
      "sku": "TSH-001",
      "width": "30",
      "height": "2",
      "length": "25"
    },
    "specifications": [
      {
        "key": "Material",
        "value": "100% Cotton"
      },
      {
        "key": "Color",
        "value": "Black"
      },
      {
        "key": "Available Sizes",
        "value": "M, L, XL"
      }
    ],
    "rating": 4.9,
    "createdAt": "2026-10-24T10:00:00.000Z",
    "updatedAt": "2026-10-24T10:00:00.000Z"
  },
  {
    "_id": "prod_002",
    "name": "Classic Analog Watch",
    "image": "/new-arrival-4.png",
    "shopId": "shop_001",
    "featuredImg": "/new-arrival-4.png",
    "gallery": [
      "/new-arrival-4.png"
    ],
    "brandAndCategories": {
      "brand": "TimeCraft",
      "categories": [
        {
          "name": "Accessories"
        },
        {
          "name": "Watches"
        }
      ],
      "tags": [
        {
          "name": "Classic"
        },
        {
          "name": "Formal"
        }
      ]
    },
    "description": {
      "name": "Classic Analog Watch",
      "slug": "classic-analog-watch",
      "unit": "piece",
      "description": "A minimalist analog watch suitable for formal and casual occasions.",
      "status": "ACTIVE"
    },
    "productType": "PHYSICAL",
    "productInfo": {
      "price": 2800,
      "salePrice": 2200,
      "quantity": 25,
      "sku": "WAT-002",
      "width": "4",
      "height": "1",
      "length": "4"
    },
    "specifications": [
      {
        "key": "Display",
        "value": "Analog"
      },
      {
        "key": "Movement",
        "value": "Quartz"
      },
      {
        "key": "Strap",
        "value": "Leather"
      }
    ],
    "rating": 4.8,
    "createdAt": "2026-10-23T10:00:00.000Z",
    "updatedAt": "2026-10-23T10:00:00.000Z"
  },
  {
    "_id": "prod_003",
    "name": "Smart Watch Pro",
    "image": "/man-model.png",
    "shopId": "shop_002",
    "featuredImg": "/man-model.png",
    "gallery": [
      "/man-model.png"
    ],
    "brandAndCategories": {
      "brand": {
        "name": "TechGear"
      },
      "categories": [
        {
          "name": "Electronics"
        },
        {
          "name": "Smart Watches"
        }
      ],
      "tags": [
        {
          "name": "Smart"
        },
        {
          "name": "Fitness"
        }
      ]
    },
    "description": {
      "name": "Smart Watch Pro",
      "slug": "smart-watch-pro",
      "unit": "piece",
      "description": "A modern smartwatch for notifications, activity tracking, and everyday convenience.",
      "status": "ACTIVE"
    },
    "productType": "PHYSICAL",
    "productInfo": {
      "price": 3500,
      "salePrice": 2990,
      "quantity": 18,
      "sku": "SWT-003",
      "width": "4",
      "height": "1",
      "length": "4"
    },
    "specifications": [
      {
        "key": "Display",
        "value": "Touchscreen"
      },
      {
        "key": "Connectivity",
        "value": "Bluetooth"
      },
      {
        "key": "Battery Life",
        "value": "Up to 7 days"
      }
    ],
    "rating": 4.7,
    "createdAt": "2026-10-22T10:00:00.000Z",
    "updatedAt": "2026-10-22T10:00:00.000Z"
  },
  {
    "_id": "prod_004",
    "name": "Everyday Sneakers",
    "image": "/mens.png",
    "shopId": "shop_001",
    "featuredImg": "/mens.png",
    "gallery": [
      "/mens.png"
    ],
    "brandAndCategories": {
      "brand": {
        "name": "StreetWalk"
      },
      "categories": [
        {
          "name": "Footwear"
        },
        {
          "name": "Sneakers"
        }
      ],
      "tags": [
        {
          "name": "Casual"
        },
        {
          "name": "Comfort"
        }
      ]
    },
    "description": {
      "name": "Everyday Sneakers",
      "slug": "everyday-sneakers",
      "unit": "pair",
      "description": "Comfortable everyday sneakers with a lightweight design and cushioned sole.",
      "status": "ACTIVE"
    },
    "productType": "PHYSICAL",
    "productInfo": {
      "price": 3800,
      "salePrice": 3200,
      "quantity": 32,
      "sku": "SNK-004",
      "width": "12",
      "height": "10",
      "length": "30"
    },
    "specifications": [
      {
        "key": "Material",
        "value": "Synthetic Mesh"
      },
      {
        "key": "Sole",
        "value": "Rubber"
      },
      {
        "key": "Color",
        "value": "White"
      }
    ],
    "rating": 4.6,
    "createdAt": "2026-10-21T10:00:00.000Z",
    "updatedAt": "2026-10-21T10:00:00.000Z"
  },
  {
    "_id": "prod_005",
    "name": "Casual Slim Fit Pants",
    "image": "/new-arrival-3.png",
    "shopId": "shop_001",
    "featuredImg": "/new-arrival-3.png",
    "gallery": [
      "/new-arrival-3.png"
    ],
    "brandAndCategories": {
      "brand": "Urban Style",
      "categories": [
        {
          "name": "Men's Fashion"
        },
        {
          "name": "Trousers"
        }
      ],
      "tags": [
        {
          "name": "Casual"
        },
        {
          "name": "Slim Fit"
        }
      ]
    },
    "description": {
      "name": "Casual Slim Fit Pants",
      "slug": "casual-slim-fit-pants",
      "unit": "piece",
      "description": "Versatile slim-fit pants designed for comfort and a clean everyday look.",
      "status": "ACTIVE"
    },
    "productType": "PHYSICAL",
    "productInfo": {
      "price": 1800,
      "salePrice": 1450,
      "quantity": 40,
      "sku": "PNT-005",
      "width": "32",
      "height": "2",
      "length": "100"
    },
    "specifications": [
      {
        "key": "Fit",
        "value": "Slim Fit"
      },
      {
        "key": "Material",
        "value": "Cotton Blend"
      },
      {
        "key": "Color",
        "value": "Navy Blue"
      }
    ],
    "rating": 4.5,
    "createdAt": "2026-10-20T10:00:00.000Z",
    "updatedAt": "2026-10-20T10:00:00.000Z"
  },
  {
    "_id": "prod_006",
    "name": "Portable Folding Chair",
    "image": "/new-arrival-1.png",
    "shopId": "shop_002",
    "featuredImg": "/new-arrival-1.png",
    "gallery": [
      "/new-arrival-1.png"
    ],
    "brandAndCategories": {
      "brand": {
        "name": "Outdoor Living"
      },
      "categories": [
        {
          "name": "Home & Living"
        },
        {
          "name": "Outdoor Furniture"
        }
      ],
      "tags": [
        {
          "name": "Portable"
        },
        {
          "name": "Outdoor"
        }
      ]
    },
    "description": {
      "name": "Portable Folding Chair",
      "slug": "portable-folding-chair",
      "unit": "piece",
      "description": "A lightweight folding chair suitable for camping, outdoor events, and travel.",
      "status": "ACTIVE"
    },
    "productType": "PHYSICAL",
    "productInfo": {
      "price": 1900,
      "salePrice": 1500,
      "quantity": 15,
      "sku": "CHR-006",
      "width": "50",
      "height": "80",
      "length": "50"
    },
    "specifications": [
      {
        "key": "Frame",
        "value": "Metal"
      },
      {
        "key": "Foldable",
        "value": "Yes"
      },
      {
        "key": "Usage",
        "value": "Outdoor"
      }
    ],
    "rating": 4.4,
    "createdAt": "2026-10-19T10:00:00.000Z",
    "updatedAt": "2026-10-19T10:00:00.000Z"
  }
]

  const topLoading = false
  const topError = false;
  
 return (
    <main className="bg-white w-full">
      <HomepagePopup />
      <MainMenu />

      {/* Hero */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-4 lg:px-6 mt-4">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <CategorySidebar />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <BannerSlider />
          </div>
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <FloatingEdgeBar />
          </div>
        </div>
      </section>

      {/* FEATURED / MORE */}
      <section className="mt-4">
        <FeatureMoreBar
          left={{ label: "FEATURED", href: "/featured" }}
          right={{ label: "More...", href: "/more" }}
        />
        <CategoryRail />
        <div className="mt-3">
          <CategoryProductCards />
        </div>
      </section>

      {/* ✅ DISCOUNTED PRODUCTS — এখন Discount.tsx ব্যবহার করছি */}
      <section className="mt-6">
        <FeatureMoreBar
          left={{ label: "DISCOUNTED PRODUCTS", href: "/discounts" }}
          right={{ label: "More...", href: "/discounts" }}
        />
        <div className="mt-3">
          <Discount
            // data={discounted}
            loading={discountLoading}
            error={discountError}
            title="Discounted Products"
            limit={6}
          />
        </div>
      </section>

      {/* TODAY'S DEAL */}
      <section className="mt-6">
        <FeatureMoreBar
          left={{ label: "TODAY'S DEAL", href: "/deals" }}
          right={{ label: "More...", href: "/deals" }}
        />
        <div className="mt-3">
          <ProductSixGrid title="Today's Deal" />
        </div>
      </section>

      {/* TOP REVIEWED */}
     <section className="mt-6">
  <FeatureMoreBar
    left={{ label: "TOP REVIEWED", href: "/reviews" }}
    right={{ label: "More...", href: "/reviews" }}
  />
  <div className="mt-3">
    <TopReviewed
      data={topReviewed}
      loading={topLoading}
      error={topError}
      title="Top Reviewed Products"
      limit={6}
    />
  </div>
</section>

      <MobileBottomNav />
    </main>
  );
}