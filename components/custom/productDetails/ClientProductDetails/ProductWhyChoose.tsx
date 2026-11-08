import { Heart, Shield, Star } from "lucide-react"

const ProductWhyChoose = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold md:text-lg lg:text-xl">
        Why Choose Men’s Drop Shoulder T-shirt in Black ?
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
        <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-primary-background/5 p-4 shadow-sm">
          <Shield className="h-10 w-10 rounded-full bg-primary-background/5 p-2" />
          <h5 className="font-semibold">Premium Quality</h5>
          <p className="text-center text-sm">
            Made with high-quality materials and crafted with attention to
            detail for long-lasting durability.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-primary-background/5 p-4 shadow-sm">
          <Star className="h-10 w-10 rounded-full bg-primary-background/5 p-2" />
          <h5 className="font-semibold">Verified Reviews</h5>
          <p className="text-center text-sm">
            Rated 4.8/5 stars by 15 verified customers who love this product.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-primary-background/5 p-4 shadow-sm">
          <Heart className="h-10 w-10 rounded-full bg-primary-background/5 p-2" />
          <h5 className="font-semibold">Customer Favorite</h5>
          <p className="text-center text-sm">
            Over 210 satisfied customers. Join the community who trust our
            products!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductWhyChoose
