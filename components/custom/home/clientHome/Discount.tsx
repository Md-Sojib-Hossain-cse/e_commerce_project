import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type IProduct, type ProductData } from "@/types/product";

// 🔒 Props: API shape বা UI shape – দুইটাই সাপোর্ট
type Props = {
  data?: Array<IProduct | ProductData>;
  loading?: boolean;
  error?: boolean;
  title?: string;
  limit?: number;
};


export const discountDemoData: IProduct[] = [
  {
    _id: "discount-product-1",
    name: "Wireless Bluetooth Headphones",
    image: "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg",
    shopId: "shop-1",
    featuredImg: "/images/products/headphones.png",
    gallery: ["/images/products/headphones.png"],
    brandAndCategories: {
      brand: "SoundMax",
      categories: [{ name: "Electronics" }],
      tags: [{ name: "Headphones" }, { name: "Wireless" }],
    },
    description: {
      name: "Wireless Bluetooth Headphones",
      slug: "wireless-bluetooth-headphones",
      unit: "piece",
      description: "Comfortable wireless headphones with clear sound.",
      status: "active",
    },
    productType: "physical",
    productInfo: {
      price: 2500,
      salePrice: 1999,
      quantity: 20,
      sku: "WH-001",
      width: "18",
      height: "20",
      length: "8",
    },
    rating: 4.5,
    createdAt: "2026-10-20T10:00:00.000Z",
    updatedAt: "2026-10-20T10:00:00.000Z",
  },
  {
    _id: "discount-product-2",
    name: "Smart Watch Series 8",
    image: "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg",
    shopId: "shop-1",
    featuredImg: "/images/products/smart-watch.png",
    gallery: ["/images/products/smart-watch.png"],
    brandAndCategories: {
      brand: { name: "TechPro" },
      categories: [{ name: "Electronics" }],
      tags: [{ name: "Smart Watch" }],
    },
    description: {
      name: "Smart Watch Series 8",
      slug: "smart-watch-series-8",
      unit: "piece",
      description: "A stylish smartwatch for everyday use.",
      status: "active",
    },
    productType: "physical",
    productInfo: {
      price: 4500,
      salePrice: 3600,
      quantity: 15,
      sku: "SW-002",
      width: "5",
      height: "5",
      length: "2",
    },
    rating: 4.3,
  },
  {
    _id: "discount-product-3",
    name: "Portable Bluetooth Speaker",
    image: "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg",
    shopId: "shop-1",
    featuredImg: "/images/products/speaker.png",
    gallery: ["/images/products/speaker.png"],
    brandAndCategories: {
      brand: "SoundMax",
      categories: [{ name: "Electronics" }],
      tags: [{ name: "Speaker" }, { name: "Bluetooth" }],
    },
    description: {
      name: "Portable Bluetooth Speaker",
      slug: "portable-bluetooth-speaker",
      unit: "piece",
      description: "Compact portable speaker with rich sound.",
      status: "active",
    },
    productType: "physical",
    productInfo: {
      price: 1800,
      salePrice: 1499,
      quantity: 25,
      sku: "BS-003",
      width: "10",
      height: "10",
      length: "8",
    },
    rating: 4.6,
  },
  {
    _id: "discount-product-4",
    name: "USB-C Fast Charger",
    image: "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg",
    shopId: "shop-1",
    featuredImg: "/images/products/charger.png",
    gallery: ["/images/products/charger.png"],
    brandAndCategories: {
      brand: "ChargePro",
      categories: [{ name: "Accessories" }],
      tags: [{ name: "Charger" }, { name: "USB-C" }],
    },
    description: {
      name: "USB-C Fast Charger",
      slug: "usb-c-fast-charger",
      unit: "piece",
      description: "Fast charging adapter for compatible devices.",
      status: "active",
    },
    productType: "physical",
    productInfo: {
      price: 1200,
      salePrice: 899,
      quantity: 30,
      sku: "CH-004",
      width: "5",
      height: "7",
      length: "4",
    },
    rating: 4.2,
  },
  {
    _id: "discount-product-5",
    name: "Gaming Mouse",
    image: "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg",
    shopId: "shop-1",
    featuredImg: "/images/products/gaming-mouse.png",
    gallery: ["/images/products/gaming-mouse.png"],
    brandAndCategories: {
      brand: "GameTech",
      categories: [{ name: "Accessories" }],
      tags: [{ name: "Gaming" }, { name: "Mouse" }],
    },
    description: {
      name: "Gaming Mouse",
      slug: "gaming-mouse",
      unit: "piece",
      description: "Responsive mouse designed for gaming.",
      status: "active",
    },
    productType: "physical",
    productInfo: {
      price: 1600,
      salePrice: 1200,
      quantity: 18,
      sku: "GM-005",
      width: "7",
      height: "4",
      length: "12",
    },
    rating: 4.4,
  },
  {
    _id: "discount-product-6",
    name: "Mechanical Keyboard",
    image: "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg",
    shopId: "shop-1",
    featuredImg: "/images/products/keyboard.png",
    gallery: ["/images/products/keyboard.png"],
    brandAndCategories: {
      brand: "GameTech",
      categories: [{ name: "Accessories" }],
      tags: [{ name: "Keyboard" }, { name: "Gaming" }],
    },
    description: {
      name: "Mechanical Keyboard",
      slug: "mechanical-keyboard",
      unit: "piece",
      description: "Mechanical keyboard for typing and gaming.",
      status: "active",
    },
    productType: "physical",
    productInfo: {
      price: 3500,
      salePrice: 2999,
      quantity: 12,
      sku: "MK-006",
      width: "44",
      height: "4",
      length: "14",
    },
    rating: 4.7,
  },
];

const formatBDT = (n: number) =>
  `৳${Math.max(0, Number.isFinite(n) ? Math.round(n) : 0)}`;



export default function Discount({
  data = [],
  loading,
  
  title = "Up to 10% Discount",
  limit = 6,
}: Props) {
  // সবসময় UIProduct লিস্ট বানিয়ে নেই (API/ProductData → UI)
  // const items: UIProduct[] = useMemo(() => {
  //   const list = toUIList(Array.isArray(data) ? data : []);
  //   return list.slice(0, limit);
  // }, [data, limit]);

  const items = discountDemoData;


  // Loader
  if (loading) {
    return (
      <section className="w-full py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl text-primary-background">{title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="h-[320px] w-full rounded-2xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  // Show only actual data, no fallback
  const dataset = items;

  console.log(dataset)

  return (
    <section className="w-full pb-6 pt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold md:text-3xl text-primary-background">{title}</h2>
        {/* <Button
          asChild
          variant="outline"
          className="rounded-md border border-neutral p-4 text-sm bg-primary-background text-primary-foreground hover:bg-gray-100 hover:text-primary-background md:px-6 md:py-3 md:text-base"
        >
          <Link href="/discounts">
            View All <ChevronRight className="ml-1 inline h-4 w-4 bg-primary-background text-primary-foreground" />
          </Link>
        </Button> */}
      </div>

      {dataset.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-primary-background">Failed to load products</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
        {dataset.slice(0, limit).map((p) => {
          const href = `/product-details?id=${encodeURIComponent(p._id)}`;
          const showSale = p.productInfo.salePrice != null && p.productInfo.salePrice < (p.productInfo.price ?? 0);
          const discountPct = showSale ? Math.round(((p.productInfo.price ?? 0) - (p.productInfo.salePrice ?? 0)) / (p.productInfo.price ?? 1) * 100) : 0;
          return (
            <Link key={p._id} href={href} className="group mt-4">
              <Card className="relative w-full cursor-pointer rounded-2xl border-none bg-section shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
                <CardContent className="flex flex-col p-3">
                  <div className="relative mb-4 grid h-28 w-full place-items-center sm:h-32 lg:h-32 overflow-hidden">
                    {showSale && discountPct > 0 && (
                      <div className="absolute right-0 top-0 z-10">
                        <span className="inline-block bg-discount text-white bg-red-500 rounded-sm text-[10px] px-1 py-1 font-semibold">
                          {discountPct}%
                        </span>
                      </div>
                    )}
                    <Image
                      src={p.image || "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg"}
                      alt={p.description.name}
                      fill
                      className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="line-clamp-1 text-xs md:text-base text-primary-background">
                      {p.name || p.description.name}
                    </h3>
                  </div>

                  <div className="mt-2">
                    {showSale ? (
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-primary-background/40 line-through decoration-red-500">
                          {formatBDT(p.productInfo.price ?? 0)}
                        </div>
                        <div className="text-lg font-bold text-primary-background">
                          {formatBDT(p.productInfo.salePrice ?? 0)}
                        </div>
                      </div>
                    ) : (
                      <div className="text-lg font-bold text-primary-background">
                        {formatBDT(p.price ?? 0)}
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    <Button className={"p-5 w-full rounded-md"}>Add to Cart</Button>
                  </div>

                  {/* <div className="absolute bottom-3 right-3">
                    <Button
                      size="icon"
                      className="h-8 w-8 rounded-full bg-neutral transition-colors hover:bg-neutral/80"
                    >
                      <ArrowUpRight className="h-4 w-4 text-secondary" />
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </Link>
          );
        })}
        </div>
      )}
    </section>
  );
}
