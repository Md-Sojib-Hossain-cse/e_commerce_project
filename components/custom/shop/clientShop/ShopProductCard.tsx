import { IProduct } from "@/types/product"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ShopProductCardProps {
  productData: IProduct
}

const ShopProductCard = ({ productData }: ShopProductCardProps) => {
  const pct = 15
  // const mrp = productData.price

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white p-3 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-md">
      {pct > 0 && (
        <span className="absolute top-6 right-2 z-10 rounded-md bg-red-500 px-2 py-0.5 text-[11px] font-semibold text-white">
          {pct}% OFF
        </span>
      )}

      <Link
        href={`/product-details?id=${encodeURIComponent(productData._id ?? "")}`}
        className="bottom-0 flex flex-1 shrink-0 flex-col"
        aria-label={`View details for ${productData.name}`}
      >
        <div className="relative mx-auto grid h-28 w-full max-w-45 place-items-center overflow-hidden sm:h-32 md:h-36">
          <Image
            src={productData.image || "/mens.png"}
            alt={productData.name || "Product"}
            fill
            unoptimized={productData.image?.startsWith("http") ?? false}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="space-y-2">
          <h5 className="mt-2 min-h-6 text-[15px] font-bold text-primary-background">
            {(productData?.name as string).length > 20
              ? `${(productData.name as string).slice(0, 20)}...`
              : productData.name}
          </h5>
          <p className="text-xs text-primary-background/40">
            {typeof productData.brandAndCategories.brand === "object"
              ? productData.brandAndCategories.brand.name
              : productData.brandAndCategories.brand || "N/A"}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="mt-2 flex items-center gap-2">
            <span className="text-md font-semibold">
              ৳
              {productData.productInfo.salePrice ||
                productData.productInfo.price ||
                "N/A"}
            </span>
            <span className="stroke-red-400 text-sm text-primary-background/40 line-through decoration-red-400">
              ৳{productData.productInfo.price || "N/A"}
            </span>
          </div>
          <ShoppingCart className="h-8 w-8 scale-95 rounded-md bg-primary-background p-2 text-base text-primary-foreground transition-colors duration-300 selection:scale-110 hover:bg-primary-foreground hover:text-primary-background" />
        </div>
      </Link>
    </div>
  )
}

export default ShopProductCard
