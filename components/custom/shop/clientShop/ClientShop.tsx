"use client"
import { demoProducts } from "@/data/demoData"
import ProductSearch from "./ProductSearch"
import { FilterSideBar } from "./FilterSideBar"
import ShopContent from "./ShopContent"
import { Button } from "@/components/ui/button"
import { Funnel } from "lucide-react"
import { useState } from "react"

const ClientShop = () => {
  const product = demoProducts
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="px-2 pt-4 md:p-4 lg:p-6">
      <ProductSearch productCount={product.length} />

      <Button
        onClick={() => {
          setShowSidebar(true)
        }}
        className={
          "my-2 flex w-full items-center justify-center gap-2 rounded-md border border-primary-background/20 bg-white text-primary-background md:hidden"
        }
      >
        <Funnel />
        <span>Filters</span>
      </Button>

      <div className="grid min-h-dvh grid-cols-1 gap-4 py-2 md:grid-cols-10 md:py-4 lg:gap-6">
        <div
          className={`fixed top-0 left-0 z-30 h-dvh w-full max-w-64 transform bg-white shadow-xl transition-transform duration-300 ease-in-out sm:w-1/2 ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:sticky md:top-4 md:z-0 md:col-span-3 md:block md:h-auto md:w-full md:max-w-none md:translate-x-0 md:shadow-none lg:col-span-2`}
        >
          <FilterSideBar setShowSidebar={setShowSidebar} />
        </div>
        <div className="md:col-span-7 lg:col-span-8">
          <ShopContent />
        </div>
      </div>
    </div>
  )
}

export default ClientShop
