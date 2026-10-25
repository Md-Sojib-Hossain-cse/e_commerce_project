
import type { IProduct, ProductData, RemoteProduct } from "@/types/product";

export const demoProducts: IProduct[] = [
  {
    _id: "prod_001",
    name: "Premium Cotton T-Shirt",
    image: "https://placehold.co/600x600?text=Cotton+T-Shirt",
    price: 850,
    shopId: "shop_001",
    featuredImg: "https://placehold.co/800x800?text=Cotton+T-Shirt",
    gallery: [
      "https://placehold.co/800x800?text=T-Shirt+Front",
      "https://placehold.co/800x800?text=T-Shirt+Back",
      "https://placehold.co/800x800?text=T-Shirt+Detail",
    ],
    brandAndCategories: {
      brand: { name: "Urban Style" },
      categories: [{ name: "Men's Fashion" }, { name: "T-Shirts" }],
      tags: [{ name: "Cotton" }, { name: "Casual" }, { name: "Trending" }],
    },
    description: {
      name: "Premium Cotton T-Shirt",
      slug: "premium-cotton-t-shirt",
      unit: "piece",
      description:
        "A comfortable premium cotton T-shirt suitable for everyday wear. Features breathable fabric and a modern fit.",
      status: "ACTIVE",
    },
    productType: "PHYSICAL",
    productInfo: {
      price: 1000,
      salePrice: 850,
      quantity: 45,
      sku: "TSH-001",
      width: "30",
      height: "2",
      length: "25",
    },
    specifications: [
      { key: "Material", value: "100% Cotton" },
      { key: "Fit", value: "Regular Fit" },
      { key: "Color", value: "Black" },
      { key: "Available Sizes", value: "M, L, XL" },
    ],
    rating: 4.5,
    createdAt: "2026-10-20T10:00:00.000Z",
    updatedAt: "2026-10-20T10:00:00.000Z",
  },
  {
    _id: "prod_002",
    name: "Classic Leather Wallet",
    image: "https://placehold.co/600x600?text=Leather+Wallet",
    price: 650,
    shopId: "shop_001",
    featuredImg: "https://placehold.co/800x800?text=Leather+Wallet",
    gallery: [
      "https://placehold.co/800x800?text=Wallet+Front",
      "https://placehold.co/800x800?text=Wallet+Inside",
    ],
    brandAndCategories: {
      brand: "Gentleman",
      categories: [{ name: "Accessories" }, { name: "Wallets" }],
      tags: [{ name: "Leather" }, { name: "Gift" }],
    },
    description: {
      name: "Classic Leather Wallet",
      slug: "classic-leather-wallet",
      unit: "piece",
      description:
        "A compact wallet with a timeless design, multiple card slots, and a convenient cash compartment.",
      status: "ACTIVE",
    },
    productType: "PHYSICAL",
    productInfo: {
      price: 750,
      salePrice: 650,
      quantity: 30,
      sku: "WAL-002",
      width: "12",
      height: "2",
      length: "9",
    },
    specifications: [
      { key: "Material", value: "Faux Leather" },
      { key: "Color", value: "Brown" },
      { key: "Card Slots", value: "6" },
    ],
    rating: 4.2,
  },
  {
    _id: "prod_003",
    name: "Wireless Bluetooth Headphones",
    image: "https://placehold.co/600x600?text=Headphones",
    price: 1850,
    shopId: "shop_002",
    featuredImg: "https://placehold.co/800x800?text=Headphones",
    gallery: [
      "https://placehold.co/800x800?text=Headphones+Front",
      "https://placehold.co/800x800?text=Headphones+Side",
    ],
    brandAndCategories: {
      brand: { name: "SoundMax" },
      categories: [{ name: "Electronics" }, { name: "Audio" }],
      tags: [{ name: "Wireless" }, { name: "Bluetooth" }],
    },
    description: {
      name: "Wireless Bluetooth Headphones",
      slug: "wireless-bluetooth-headphones",
      unit: "piece",
      description:
        "Wireless over-ear headphones with clear audio, soft ear cushions, and a long-lasting battery.",
      status: "ACTIVE",
    },
    productType: "PHYSICAL",
    productInfo: {
      price: 2200,
      salePrice: 1850,
      quantity: 18,
      sku: "AUD-003",
      width: "18",
      height: "20",
      length: "8",
    },
    specifications: [
      { key: "Connectivity", value: "Bluetooth 5.3" },
      { key: "Battery Life", value: "Up to 30 hours" },
      { key: "Color", value: "Black" },
    ],
    rating: 4.7,
  },
  {
    _id: "prod_004",
    name: "Everyday Canvas Backpack",
    image: "https://placehold.co/600x600?text=Canvas+Backpack",
    price: 1250,
    shopId: "shop_001",
    featuredImg: "https://placehold.co/800x800?text=Canvas+Backpack",
    gallery: [
      "https://placehold.co/800x800?text=Backpack+Front",
      "https://placehold.co/800x800?text=Backpack+Interior",
    ],
    brandAndCategories: {
      brand: "TravelMate",
      categories: [{ name: "Bags" }, { name: "Backpacks" }],
      tags: [{ name: "Travel" }, { name: "Daily Use" }],
    },
    description: {
      name: "Everyday Canvas Backpack",
      slug: "everyday-canvas-backpack",
      unit: "piece",
      description:
        "A versatile canvas backpack with spacious compartments for work, study, and everyday travel.",
      status: "ACTIVE",
    },
    productType: "PHYSICAL",
    productInfo: {
      price: 1500,
      salePrice: 1250,
      quantity: 12,
      sku: "BAG-004",
      width: "30",
      height: "42",
      length: "15",
    },
    specifications: [
      { key: "Material", value: "Canvas" },
      { key: "Capacity", value: "20 liters" },
      { key: "Color", value: "Olive Green" },
    ],
    rating: 4.4,
  },
  {
    _id: "prod_005",
    name: "Minimalist Wrist Watch",
    image: "https://placehold.co/600x600?text=Wrist+Watch",
    price: 2400,
    shopId: "shop_002",
    featuredImg: "https://placehold.co/800x800?text=Wrist+Watch",
    gallery: [
      "https://placehold.co/800x800?text=Watch+Front",
      "https://placehold.co/800x800?text=Watch+Strap",
    ],
    brandAndCategories: {
      brand: { name: "TimeCraft" },
      categories: [{ name: "Accessories" }, { name: "Watches" }],
      tags: [{ name: "Minimalist" }, { name: "Formal" }],
    },
    description: {
      name: "Minimalist Wrist Watch",
      slug: "minimalist-wrist-watch",
      unit: "piece",
      description:
        "A stylish minimalist watch with a clean dial and a comfortable strap for formal and casual occasions.",
      status: "ACTIVE",
    },
    productType: "PHYSICAL",
    productInfo: {
      price: 2800,
      salePrice: 2400,
      quantity: 20,
      sku: "WAT-005",
      width: "4",
      height: "1",
      length: "4",
    },
    specifications: [
      { key: "Display", value: "Analog" },
      { key: "Strap", value: "Leather" },
      { key: "Movement", value: "Quartz" },
    ],
    rating: 4.6,
  },
];

// Optional: simplified product data for product cards
export const demoProductCards: ProductData[] = demoProducts.map(
  (product) => ({
    _id: product._id,
    name: product.description.name,
    price: product.productInfo.salePrice,
    image: product.featuredImg,
    slug: product.description.slug,
    description: product.description.description,
    category: product.brandAndCategories.categories[0]?.name,
    inStock: product.productInfo.quantity > 0,
    rating: product.rating,
    discount: Math.round(
      ((product.productInfo.price - product.productInfo.salePrice) /
        product.productInfo.price) *
        100
    ),
  })
);

// Optional: simulate the remote API response
export const demoRemoteProducts: RemoteProduct[] = demoProducts.map(
  (product) => ({
    _id: product._id,
    description: product.description,
    productType: product.productType,
    productInfo: product.productInfo,
    shopId: product.shopId,
    featuredImg: product.featuredImg,
    gallery: product.gallery,
    brandAndCategories: product.brandAndCategories,
    specifications: product.specifications,
  })
);



