import type {
  IFAQ,
  IProduct,
  ProductData,
  RemoteCategory,
  RemoteProduct,
} from "@/types/product"

export const demoProducts: IProduct[] = [
  {
    _id: "prod_001",
    name: "Premium Cotton T-Shirt",
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
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
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
    price: 650,
    shopId: "shop_001",
    featuredImg: "https://placehold.co/800x800?text=Leather+Wallet",
    gallery: [
      "https://placehold.co/800x800?text=Wallet+Front",
      "https://placehold.co/800x800?text=Wallet+Inside",
    ],
    brandAndCategories: {
      brand: { name: "Gentleman" },
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
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
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
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
    price: 1250,
    shopId: "shop_001",
    featuredImg: "https://placehold.co/800x800?text=Canvas+Backpack",
    gallery: [
      "https://placehold.co/800x800?text=Backpack+Front",
      "https://placehold.co/800x800?text=Backpack+Interior",
    ],
    brandAndCategories: {
      brand: { name: "TravelMate" },
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
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
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
  {
    _id: "prod_006",
    name: "Premium Cotton T-Shirt",
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
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
    _id: "prod_007",
    name: "Classic Leather Wallet",
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
    price: 650,
    shopId: "shop_001",
    featuredImg: "https://placehold.co/800x800?text=Leather+Wallet",
    gallery: [
      "https://placehold.co/800x800?text=Wallet+Front",
      "https://placehold.co/800x800?text=Wallet+Inside",
    ],
    brandAndCategories: {
      brand: { name: "Gentleman" },
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
    _id: "prod_008",
    name: "Wireless Bluetooth Headphones",
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
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
    _id: "prod_009",
    name: "Everyday Canvas Backpack",
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
    price: 1250,
    shopId: "shop_001",
    featuredImg: "https://placehold.co/800x800?text=Canvas+Backpack",
    gallery: [
      "https://placehold.co/800x800?text=Backpack+Front",
      "https://placehold.co/800x800?text=Backpack+Interior",
    ],
    brandAndCategories: {
      brand: { name: "TravelMate" },
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
    _id: "prod_010",
    name: "Minimalist Wrist Watch",
    image:
      "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041521/samples/cup-on-a-table.jpg",
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
]

// Optional: simplified product data for product cards
export const demoProductCards: ProductData[] = demoProducts.map((product) => ({
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
}))

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
)

export const demoCategoryData: RemoteCategory[] = [
  {
    _id: "cat_001",
    slug: "mens-fashion",
    name: "Men's Fashion",
    subCategories: [
      { id: "sub_001", slug: "t-shirts", name: "T-Shirts" },
      { id: "sub_002", slug: "shirts", name: "Shirts" },
      { id: "sub_003", slug: "pants-trousers", name: "Pants & Trousers" },
      { id: "sub_004", slug: "jeans", name: "Jeans" },
      { id: "sub_005", slug: "jackets", name: "Jackets" },
      { id: "sub_006", slug: "panjabi", name: "Panjabi" },
    ],
  },
  {
    _id: "cat_002",
    slug: "womens-fashion",
    name: "Women's Fashion",
    subCategories: [
      { id: "sub_007", slug: "sarees", name: "Sarees" },
      { id: "sub_008", slug: "kurtis", name: "Kurtis" },
      { id: "sub_009", slug: "dresses", name: "Dresses" },
      { id: "sub_010", slug: "tops", name: "Tops" },
      { id: "sub_011", slug: "pants", name: "Pants" },
      { id: "sub_012", slug: "hijabs", name: "Hijabs" },
    ],
  },
  {
    _id: "cat_003",
    slug: "electronics",
    name: "Electronics",
    subCategories: [
      { id: "sub_013", slug: "smartphones", name: "Smartphones" },
      { id: "sub_014", slug: "headphones", name: "Headphones" },
      { id: "sub_015", slug: "smart-watches", name: "Smart Watches" },
      { id: "sub_016", slug: "chargers", name: "Chargers" },
      {
        id: "sub_017",
        slug: "computer-accessories",
        name: "Computer Accessories",
      },
    ],
  },
  {
    _id: "cat_004",
    slug: "home-living",
    name: "Home & Living",
    subCategories: [
      { id: "sub_018", slug: "furniture", name: "Furniture" },
      { id: "sub_019", slug: "home-decor", name: "Home Decor" },
      {
        id: "sub_020",
        slug: "kitchen-accessories",
        name: "Kitchen Accessories",
      },
      { id: "sub_021", slug: "bedding", name: "Bedding" },
      { id: "sub_022", slug: "lighting", name: "Lighting" },
    ],
  },
  {
    _id: "cat_005",
    slug: "shoes",
    name: "Shoes",
    subCategories: [
      { id: "sub_023", slug: "sneakers", name: "Sneakers" },
      { id: "sub_024", slug: "formal-shoes", name: "Formal Shoes" },
      { id: "sub_025", slug: "sandals", name: "Sandals" },
      { id: "sub_026", slug: "sports-shoes", name: "Sports Shoes" },
      { id: "sub_027", slug: "loafers", name: "Loafers" },
    ],
  },
  {
    _id: "cat_006",
    slug: "bags-accessories",
    name: "Bags & Accessories",
    subCategories: [
      { id: "sub_028", slug: "backpacks", name: "Backpacks" },
      { id: "sub_029", slug: "handbags", name: "Handbags" },
      { id: "sub_030", slug: "wallets", name: "Wallets" },
      { id: "sub_031", slug: "belts", name: "Belts" },
      { id: "sub_032", slug: "sunglasses", name: "Sunglasses" },
    ],
  },
  {
    _id: "cat_007",
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    subCategories: [
      { id: "sub_033", slug: "skincare", name: "Skincare" },
      { id: "sub_034", slug: "makeup", name: "Makeup" },
      { id: "sub_035", slug: "hair-care", name: "Hair Care" },
      { id: "sub_036", slug: "perfumes", name: "Perfumes" },
      { id: "sub_037", slug: "personal-hygiene", name: "Personal Hygiene" },
    ],
  },
  {
    _id: "cat_008",
    slug: "sports-outdoors",
    name: "Sports & Outdoors",
    subCategories: [
      { id: "sub_038", slug: "fitness-equipment", name: "Fitness Equipment" },
      { id: "sub_039", slug: "sportswear", name: "Sportswear" },
      { id: "sub_040", slug: "camping-gear", name: "Camping Gear" },
      {
        id: "sub_041",
        slug: "outdoor-accessories",
        name: "Outdoor Accessories",
      },
    ],
  },
]

export const demoPriceRanges = [
  { id: "price-1", label: "Under ৳500", min: 0, max: 500 },
  { id: "price-2", label: "৳500 - ৳1,000", min: 500, max: 1000 },
  { id: "price-3", label: "৳1,000 - ৳2,000", min: 1000, max: 2000 },
  { id: "price-4", label: "৳2,000 - ৳5,000", min: 2000, max: 5000 },
  { id: "price-5", label: "৳5,000 - ৳10,000", min: 5000, max: 10000 },
  { id: "price-6", label: "Above ৳10,000", min: 10000, max: Infinity },
]

export const demoSizeData = [
  { id: "size-xs", label: "XS", value: "XS" },
  { id: "size-s", label: "S", value: "S" },
  { id: "size-m", label: "M", value: "M" },
  { id: "size-l", label: "L", value: "L" },
  { id: "size-xl", label: "XL", value: "XL" },
  { id: "size-xxl", label: "XXL", value: "XXL" },
  { id: "size-xxxl", label: "XXXL", value: "XXXL" },
  { id: "size-28", label: "28", value: "28" },
  { id: "size-30", label: "30", value: "30" },
  { id: "size-32", label: "32", value: "32" },
  { id: "size-34", label: "34", value: "34" },
  { id: "size-36", label: "36", value: "36" },
  { id: "size-free", label: "Free Size", value: "Free Size" },
]

export const demoColorData = [
  { id: "color-black", name: "Black", hex: "#000000" },
  { id: "color-white", name: "White", hex: "#FFFFFF" },
  { id: "color-red", name: "Red", hex: "#EF4444" },
  { id: "color-blue", name: "Blue", hex: "#3B82F6" },
  { id: "color-green", name: "Green", hex: "#22C55E" },
  { id: "color-yellow", name: "Yellow", hex: "#EAB308" },
  { id: "color-pink", name: "Pink", hex: "#EC4899" },
  { id: "color-purple", name: "Purple", hex: "#A855F7" },
  { id: "color-gray", name: "Gray", hex: "#9CA3AF" },
  { id: "color-brown", name: "Brown", hex: "#92400E" },
  { id: "color-beige", name: "Beige", hex: "#D6C3A5" },
  { id: "color-navy", name: "Navy Blue", hex: "#1E3A8A" },
]

export const demoTagData = [
  { id: "tag-new", label: "New Arrival", value: "new-arrival" },
  { id: "tag-bestseller", label: "Best Seller", value: "best-seller" },
  { id: "tag-trending", label: "Trending", value: "trending" },
  { id: "tag-sale", label: "On Sale", value: "on-sale" },
  { id: "tag-featured", label: "Featured", value: "featured" },
  { id: "tag-exclusive", label: "Exclusive", value: "exclusive" },
  { id: "tag-limited", label: "Limited Edition", value: "limited-edition" },
  { id: "tag-premium", label: "Premium", value: "premium" },
  { id: "tag-casual", label: "Casual Wear", value: "casual-wear" },
  { id: "tag-formal", label: "Formal Wear", value: "formal-wear" },
  { id: "tag-ethnic", label: "Ethnic Wear", value: "ethnic-wear" },
  { id: "tag-winter", label: "Winter Collection", value: "winter-collection" },
]

export const demoSaveMoreData = {
  sectionTitle: "Save More Risk Nothing",
  features: [
    {
      id: 1,
      title: "Guaranteed Savings",
      description:
        "If you don't make your membership fee in savings, we'll refund the difference",
      icon: "camera",
    },
    {
      id: 2,
      title: "Try it risk-free",
      description:
        "If you don't make your membership fee in savings, we'll refund the difference",
      icon: "heart",
    },
    {
      id: 3,
      title: "Super Fast Delivery",
      description:
        "If you don't make your membership fee in savings, we'll refund the difference",
      icon: "truck",
    },
    {
      id: 4,
      title: "1K+Products Priced at cost",
      description:
        "If you don't make your membership fee in savings, we'll refund the difference",
      icon: "shield",
    },
  ],
}

export const demoFaqs: IFAQ[] = [
  {
    id: 1,
    question: "What sizes do you offer?",
    answer:
      "We offer a full range of sizes from XS to 3XL for most items. Check individual product pages for specific size charts and availability.",
  },
  {
    id: 2,
    question: "Do you offer free shipping?",
    answer:
      "Yes! We offer free shipping on orders over $75. Standard delivery takes 3-7 business days, with express options available.",
  },
  {
    id: 3,
    question: "What's your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unworn with original tags. Free returns for exchanges or store credit.",
  },
  {
    id: 4,
    question: "How do I find my perfect fit?",
    answer:
      "Use our detailed size guides on each product page. We also offer virtual fitting tools and customer reviews with fit feedback.",
  },
  {
    id: 5,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking number via SMS or email. You can use it to check your delivery status.",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer:
      "We accept major debit and credit cards, mobile banking, and other available payment methods at checkout.",
  },
  {
    id: 7,
    question: "Can I cancel or modify my order?",
    answer:
      "You can request an order cancellation or modification before it is processed or shipped. Please contact our support team as soon as possible.",
  },
  {
    id: 8,
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location. Orders are generally delivered within 2-5 business days in major cities and 3-7 business days in other areas.",
  },
  {
    id: 9,
    question: "Are the product images accurate?",
    answer:
      "We try our best to display accurate product images and descriptions. However, slight color variations may occur due to lighting and screen settings.",
  },
  {
    id: 10,
    question: "Will an item be restocked if it's sold out?",
    answer:
      "Some sold-out products may be restocked. Contact our support team or check the product page regularly for availability updates.",
  },
  {
    id: 11,
    question: "How can I contact customer support?",
    answer:
      "You can reach us through our Contact Us page, email, or phone. Our support team will be happy to assist you with your questions.",
  },
  {
    id: 12,
    question: "Do you offer discounts or promotional deals?",
    answer:
      "Yes! We regularly offer seasonal discounts, special promotions, and exclusive deals. Subscribe to our newsletter to stay updated.",
  },
  {
    id: 13,
    question: "Can I exchange an item for a different size?",
    answer:
      "Yes, exchanges may be available depending on product availability and our exchange policy. Contact customer support to arrange an exchange.",
  },
  {
    id: 14,
    question: "How do I know if my order was successful?",
    answer:
      "After placing an order, you'll receive an order confirmation with your order details through SMS or email.",
  },
  {
    id: 15,
    question: "Do I need an account to place an order?",
    answer:
      "You may be able to place an order as a guest without creating an account. However, having an account makes it easier to track orders and manage your shopping history.",
  },
]
