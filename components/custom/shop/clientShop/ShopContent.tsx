"use client"

import { demoProducts } from "@/data/demoData"
import ShopProductCard from "./ShopProductCard"
import { IProduct } from "@/types/product"
import ShopProductCardSkeleton from "@/components/fallback/shop/ShopProductCardSkeleton"

const ShopContent = () => {
  const demoProductsData: IProduct[] = demoProducts
  const isLoading = false

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {demoProductsData.map((_, idx) => (
          <ShopProductCardSkeleton key={idx} />
        ))}
      </div>
    )
  }

  if (demoProductsData.length === 0) {
    return <p>No Products Available</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {demoProductsData.map((product) => (
        <ShopProductCard key={product._id} productData={product} />
      ))}
    </div>
  )
}

export default ShopContent
