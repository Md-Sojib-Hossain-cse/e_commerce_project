"use client"
import { Rating } from "@/components/reui/rating"
import { Button } from "@/components/ui/button"
import { addToCart } from "@/redux/features/cart/cartSlice"
import { useAppDispatch } from "@/redux/hook"
import { IProduct } from "@/types/product"
import { Copy, Heart, Shield, Truck, Undo2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"

const ProductPrimaryInfo = (props: { productInfo: IProduct }) => {
  const dispatch = useAppDispatch()
  const { image, gallery } = props.productInfo

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(0)
  const availableSizes = ["M", "L", "XL"]

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(
      addToCart({
        productId: "prod-1",
        name: "Unnamed Product",
        image: "image.jpg",
        quantity: 1,
        unitPrice: 80,
      })
    )
  }

  const handleBuyNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    console.log(e)
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)

      console.log(navigator)
      console.log(window)
      toast.success("URL copied to clipboard!")
    } catch (error) {
      toast.error("Failed to copy URL")
    }
  }

  return (
    <div className="flex flex-col items-start justify-between gap-4 py-4 md:gap-6 md:py-5 lg:flex-row lg:py-6">
      {/* Left */}
      <div className="w-full lg:w-1/2">
        {/* Main Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-primary-background">
          <Image
            src={
              image ||
              "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793876977/productDetailsImg_tqfu8u.jpg"
            }
            alt="Product image"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Gallery */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          {gallery?.length > 0
            ? gallery.slice(0, 4).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square w-full overflow-hidden rounded-md border border-primary-background/10 bg-primary-white"
                >
                  <Image
                    src={img}
                    alt={`Product gallery image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="object-cover"
                  />
                </div>
              ))
            : null}
        </div>
      </div>

      {/* Right */}
      <div className="w-full space-y-3 lg:w-1/2">
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-destructive-background px-2 text-xs text-primary-white md:text-sm">
            Sale
          </span>
          <span className="rounded-full border border-success-foreground px-2 text-xs text-success-foreground md:text-sm">
            In Stock
          </span>
        </div>
        <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
          Men’s Drop Shoulder Messi
        </h2>
        <button className="rounded-sm bg-accent-foreground/5 px-2 py-1 text-xs text-blue-800 md:text-sm">
          Mens Collection
        </button>
        <p className="flex items-center gap-2">
          <Rating rating={4} size="sm" />
          <span className="text-xs text-primary-background/60 md:text-sm">
            (15 Reviews)
          </span>
          <span className="text-xs text-success-foreground md:text-sm">
            . 210 sold
          </span>
        </p>
        <div className="space-y-1 rounded-md bg-primary-background/2 p-2 md:space-y-2 md:p-3">
          <p className="flex items-center gap-2">
            <span className="text-xl font-bold md:text-2xl lg:text-3xl">
              ৳450
            </span>
            <span className="text-primary-background/60 line-through md:text-lg">
              ৳599
            </span>
            <span className="rounded-sm bg-destructive-background p-1 text-sm text-primary-white">
              -25%
            </span>
          </p>
          <p className="text-xs text-success-foreground md:text-sm">
            You save ৳149
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex w-full items-center gap-1 rounded-md bg-accent-foreground/5 p-4 md:gap-2">
            <Truck className="h-5 w-5 text-accent-foreground/70" />
            <div>
              <p className="text-sm text-accent-foreground">Fast Delivery</p>
              <p className="text-xs text-accent-foreground/70">
                Across whole country
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-1 rounded-md bg-success-foreground/5 p-4 md:gap-2">
            <Shield className="h-5 w-5 text-success-foreground/70" />
            <div>
              <p className="text-sm text-success-foreground">
                Cash on Delivery
              </p>
              <p className="text-xs text-success-foreground/70">Available</p>
            </div>
          </div>
        </div>
        {/* sizes */}
        <div className="space-y-1">
          <h5 className="text-sm">
            Size : {selectedSize ? selectedSize : "Free Size"}
          </h5>
          <div className="flex gap-3">
            {availableSizes.map((s, i) => (
              <Button
                onClick={() => setSelectedSize(s)}
                className={`h-10 w-10 border border-primary-background/5 ${selectedSize === s ? "bg-primary-background text-primary-white" : "bg-primary-white text-primary-background hover:bg-primary-background/5"}`}
                key={i}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
        {/* quantity */}
        <div className="space-y-1">
          <h5 className="text-sm">Quantity</h5>
          <div className="flex items-center gap-2">
            <Button
              disabled={quantity === 0}
              onClick={() => setQuantity(quantity - 1)}
              className="h-10 w-10 border border-primary-background/5 bg-primary-white text-primary-background hover:bg-primary-background/5"
            >
              -
            </Button>
            <span className="w-10 text-center">{quantity}</span>
            <Button
              onClick={() => setQuantity(quantity + 1)}
              className="h-10 w-10 border border-primary-background/5 bg-primary-white text-primary-background hover:bg-primary-background/5"
            >
              +
            </Button>
          </div>
        </div>
        {/* Add to cart and buy now */}
        <div className="space-y-0">
          <Button
            onClick={(e) => handleAddToCart(e)}
            className={
              "mt-3 w-full border border-primary-background/40 bg-primary-white p-5 text-primary-background transition-colors duration-300 ease-in-out hover:bg-primary-background hover:text-primary-white"
            }
          >
            Add to Cart
          </Button>
          <Button
            onClick={(e) => handleBuyNow(e)}
            className={
              "mt-3 w-full border bg-success-foreground p-5 text-success-background hover:border-success-foreground hover:bg-green-700"
            }
          >
            Buy Now
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button className="flex items-center gap-2 rounded-md border border-primary-background/5 bg-primary-white py-5 text-primary-background shadow-sm hover:bg-primary-background/5">
            <Heart />
            <span>Add To Wishlist</span>
          </Button>
          <Button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-md border border-primary-background/5 bg-primary-white py-5 text-primary-background shadow-sm hover:bg-primary-background/5"
          >
            <Copy />
            <span>Share</span>
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <p className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary-background/5 p-2 text-center text-xs text-primary-background">
            <Shield className="h-4 w-4 text-success-foreground" />
            <span>Authentic</span>
          </p>
          <p className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary-background/5 p-2 text-center text-xs text-primary-background">
            <Undo2 className="h-4 w-4 text-accent-foreground" />
            <span>Easy Return Policy</span>
          </p>
          <p className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary-background/5 p-2 text-center text-xs text-primary-background">
            <Shield className="h-4 w-4 text-velvet-foreground" />
            <span>Secure Pay</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPrimaryInfo
