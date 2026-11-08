import { demoProducts } from "@/data/demoData"
import { BreadcrumbComponent } from "../../shared/breadcrumb/BreadCrumbComponent"
import ProductPrimaryInfo from "./ProductPrimaryInfo"
import ProductWhyChoose from "./ProductWhyChoose"
import ProductSpecification from "./ProductSpecification"
import RelatedProduct from "./RelatedProduct"

const ClientProductDetails = () => {
  const productInfo = demoProducts[0]
  return (
    <div className="space-y-3 px-2 md:px-4 lg:px-6">
      <div className="rounded-md bg-primary-background/5 px-2 py-2 md:px-4 lg:px-6">
        <BreadcrumbComponent />
      </div>
      {/* Product Info */}
      <ProductPrimaryInfo productInfo={productInfo} />
      {/* Product Why Choose */}
      <ProductWhyChoose />
      {/* Product Specs */}
      <ProductSpecification />
      {/* Related Products */}
      <RelatedProduct />
    </div>
  )
}

export default ClientProductDetails
