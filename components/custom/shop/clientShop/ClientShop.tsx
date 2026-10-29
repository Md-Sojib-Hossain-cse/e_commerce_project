import { demoProducts } from "@/data/demoData"
import ProductSearch from "./ProductSearch"
import { FilterSideBar } from "./FilterSideBar"
import ShopContent from "./ShopContent"

const ClientShop = () => {
  const product = demoProducts

  return (
    <div className="px-2 pt-4 md:px-4 lg:px-6">
      <ProductSearch productCount={product.length} />

      <div className="grid min-h-dvh grid-cols-1 gap-4 md:grid-cols-10 lg:gap-6">
        <div className="hidden w-full md:col-span-3 md:flex lg:col-span-2">
          <FilterSideBar />
        </div>
        <div className="md:col-span-7 lg:col-span-8">
          <ShopContent />
        </div>
      </div>
    </div>
  )
}

export default ClientShop
