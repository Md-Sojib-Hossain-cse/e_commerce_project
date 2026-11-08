const ProductSpecification = () => {
  return (
    <div className="space-y-3 py-6 lg:py-8">
      <h3 className="font-semibold md:text-lg lg:text-xl">
        Product Specifications
      </h3>
      <div className="grid grid-cols-1 gap-4 rounded-md border border-primary-background/5 p-4 shadow-sm md:grid-cols-2 md:gap-5 lg:gap-6 lg:p-6">
        {/* Specs */}
        <div className="space-y-4 md:space-y-5 lg:space-y-6">
          <h5 className="font-semibold">Product Details</h5>
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <div className="flex items-center justify-between border-b border-primary-background/5 text-sm text-primary-background/50">
              <span>SKU:</span>
              <span>Print10</span>
            </div>
            <div className="flex items-center justify-between border-b border-primary-background/5 text-sm text-primary-background/50">
              <span>Size:</span>
              <span>M</span>
            </div>
            <div className="flex items-center justify-between border-b border-primary-background/5 text-sm text-primary-background/50">
              <span>Size:</span>
              <span>L</span>
            </div>
            <div className="flex items-center justify-between border-b border-primary-background/5 text-sm text-primary-background/50">
              <span>Size:</span>
              <span>XL</span>
            </div>
            <div className="flex items-center justify-between border-b border-primary-background/5 text-sm text-primary-background/50">
              <span>Stock:</span>
              <span>100 Units</span>
            </div>
          </div>
        </div>
        {/* Feature */}
        <div className="space-y-4 md:space-y-5 lg:space-y-6">
          <h5 className="font-semibold">Features & Benefits</h5>
          <div className="space-y-2 md:space-y-3 lg:space-y-4">
            <div>
              <li className="list-inside text-sm font-bold">High Quality</li>
              <p className="text-sm text-primary-background/60">
                Made with premium materials for lasting durability
              </p>
            </div>
            <div>
              <li className="list-inside text-sm font-bold">
                Authentic Product
              </li>
              <p className="text-sm text-primary-background/60">
                Genuine product with quality assurance
              </p>
            </div>
            <div>
              <li className="list-inside text-sm font-bold">Fast Delivery</li>
              <p className="text-sm text-primary-background/60">
                Quick and reliable shipping to your doorstep
              </p>
            </div>
            <div>
              <li className="list-inside text-sm font-bold">
                Customer Approved
              </li>
              <p className="text-sm text-primary-background/60">
                Rated 4.8/5 stars by verified customers
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h6 className="font-bold">Care Instructions</h6>
            <ul className="space-y-2">
              <li className="text-sm text-primary-background/60">
                Handle with care to maintain quality
              </li>
              <li className="text-sm text-primary-background/60">
                Store in a clean, dry place
              </li>
              <li className="text-sm text-primary-background/60">
                Follow any specific care labels
              </li>
              <li className="text-sm text-primary-background/60">
                Keep away from extreme temperatures
              </li>
              <li className="text-sm text-primary-background/60">
                Regular maintenance recommended
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecification
