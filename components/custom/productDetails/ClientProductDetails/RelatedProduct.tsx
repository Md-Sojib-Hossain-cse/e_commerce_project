"use client"

import { demoProducts } from "@/data/demoData"
import { addToCart } from "@/redux/features/cart/cartSlice"
import { useAppDispatch } from "@/redux/hook"
import { IProduct } from "@/types/product"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

const RelatedProduct = () => {
  const dispatch = useAppDispatch()
  const productData = demoProducts

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    p: IProduct
  ) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(
      addToCart({
        productId: p._id,
        name: p.name || "Unnamed Product",
        image: p.image || p.featuredImg || "image.jpg",
        quantity: 1,
        unitPrice: p.productInfo.salePrice || p.productInfo.price || 0,
      })
    )
    toast.success("Product Successfully Added to Cart")
  }
  return (
    <div className="space-y-3 py-4 md:space-y-4 md:py-5 lg:space-y-5 lg:py-6">
      <h3 className="font-semibold md:text-lg lg:text-xl">Related Products</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
        {productData.slice(0, 4).map((p) => (
          <Link
            key={p._id}
            href={`/product-details?id=${encodeURIComponent(p._id)}`}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-white p-3 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-md"
            aria-label={`View details for ${p.name}`}
          >
            <span className="absolute top-6 right-2 z-10 rounded-md bg-red-500 px-2 py-0.5 text-[11px] font-semibold text-white">
              {0}%
            </span>

            <div className="relative mx-auto grid h-28 w-full max-w-[180px] place-items-center overflow-hidden sm:h-32 md:h-36">
              <Image
                src={p.image || p.featuredImg || "/mens.png"}
                alt={p.name || p.description.name}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="mt-2 min-h-6 text-[13px] text-primary-background sm:text-sm">
              {p.name}
            </div>

            <div className="mt-2 flex items-center gap-2">
              {typeof p.productInfo.price === "number" ? (
                <span className="text-xs text-primary-background/40 line-through decoration-red-500 sm:text-sm">
                  ৳{p.productInfo.price}
                </span>
              ) : null}
              <span className="text-sm font-semibold text-primary-background sm:text-base">
                ৳{p.productInfo.salePrice || p.productInfo.price || 0}
              </span>
            </div>

            <div className="mt-3">
              <button
                onClick={(e) => handleAddToCart(e, p)}
                className="trainsition-colors inline-flex h-9 w-full items-center justify-center rounded-md bg-primary-background text-sm font-bold text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground hover:text-primary-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
