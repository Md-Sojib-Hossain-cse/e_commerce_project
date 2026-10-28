"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

type FallbackProduct = {
  id: string
  title: string
  image: string
  price: number
}

const fallbackProducts: FallbackProduct[] = [
  {
    id: "fallback-1",
    title: "Premium Cotton T-Shirt",
    image: "https://picsum.photos/600?random=11",
    price: 950,
  },
  {
    id: "fallback-2",
    title: "Wireless Headphones",
    image: "https://picsum.photos/600?random=13",
    price: 1990,
  },
  {
    id: "fallback-3",
    title: "Running Sneakers",
    image: "https://picsum.photos/600?random=15",
    price: 3200,
  },
]

export default function CategoryProductCardsFallback() {
  return (
    <section id="category-product-cards-fallback" className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-3 md:px-4 xl:px-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {fallbackProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-lg border bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-col items-center p-1">
                <div className="relative grid aspect-[4/3] w-full max-w-[320px] place-items-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="w-full">
                  <p className="mt-3 line-clamp-1 text-sm font-medium text-gray-800 md:text-base">
                    {product.title}
                  </p>

                  <p className="pt-3 text-base font-bold text-primary-background">
                    ৳ {product.price.toLocaleString("en-BD")}
                  </p>

                  <Button
                    type="button"
                    className="mt-3 w-full p-5"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
