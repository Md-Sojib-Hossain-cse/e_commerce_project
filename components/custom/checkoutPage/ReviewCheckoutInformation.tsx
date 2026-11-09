"use client"

import { CreditCard, ListChecks, SquareText, Truck } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import { useAppSelector } from "@/redux/hook"
import {
  selectCartItems,
  selectCartTotalItems,
} from "@/redux/features/cart/cartSlice"
import Image from "next/image"

const ReviewCheckoutInformation = (props: {
  setStep: Dispatch<SetStateAction<number>>
}) => {
  const { setStep } = props
  const cartItems = useAppSelector(selectCartItems)
  const totalItems = useAppSelector(selectCartTotalItems)

  return (
    <div className="space-y-3 md:space-y-4">
      <div className="space-y-1">
        <h3 className="flex items-center gap-2">
          <SquareText className="h-9 w-9 rounded-full bg-primary-background/5 p-2" />
          <span className="text-lg font-semibold md:text-xl">
            Review Your Order
          </span>
        </h3>
        <p className="text-sm text-primary-background/60">
          Please confirm all details before placing your order
        </p>
      </div>
      {/* Customer Information */}
      <div className="space-y-1 rounded-md border border-primary-background/5 p-4 md:p-5 lg:p-6">
        <h5 className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-orange-foreground" />{" "}
          <span className="text-sm font-semibold text-primary-background">
            Customer Information
          </span>
        </h5>
        <div className="space-y-0">
          <p className="text-sm text-primary-background/60">Given User Name</p>
          <p className="text-sm text-primary-background/60">
            sonargaon , Narayangonj
          </p>
          <p className="text-sm text-primary-background/60">01898398393</p>
          <p className="text-sm text-primary-background/60">Bangladesh</p>
        </div>
        <p
          onClick={() => setStep(2)}
          className="cursor-pointer text-xs text-orange-foreground underline"
        >
          Edit customer information
        </p>
      </div>

      {/* Payment Method */}
      <div className="space-y-1 rounded-md border border-primary-background/5 p-4 md:p-5 lg:p-6">
        <h5 className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-orange-foreground" />{" "}
          <span className="text-sm font-semibold text-primary-background">
            Payment Method
          </span>
        </h5>
        <div className="space-y-0">
          <p className="text-sm text-primary-background/60">Cash on Delivery</p>
        </div>
        <p
          onClick={() => setStep(3)}
          className="cursor-pointer text-xs text-orange-foreground underline"
        >
          Edit payment information
        </p>
      </div>
      {/* Cart Items */}
      <div className="space-y-1 rounded-md border border-primary-background/5 p-4 md:p-5 lg:p-6">
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
            <ListChecks className="h-9 w-9 rounded-full bg-primary-background/5 p-2" />
            <span>Your Items: ({totalItems || cartItems.length || 0})</span>
          </h2>

          <div className="max-h-130 space-y-4 overflow-y-auto pr-2">
            {cartItems.map((item, index) => (
              <div
                key={item.productId || index}
                className="flex flex-wrap items-center gap-4 rounded-md bg-gray-50 p-4 sm:flex-nowrap"
              >
                {/* Product image and information */}
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-md bg-orange-100 md:size-16">
                    <Image
                      src={
                        item.image ||
                        "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1746041519/samples/breakfast.jpg"
                      }
                      alt={item.name || "product"}
                      fill
                      sizes="(max-width: 767px) 48px, 64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-semibold md:text-sm">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 md:text-sm">
                      • Qty : {item.quantity || 1}
                    </p>
                    <p className="text-xs text-gray-500 md:text-sm">
                      • Size : M
                    </p>
                    <p className="text-xs text-gray-500 md:text-sm">
                      • Color : Default
                    </p>
                  </div>
                </div>

                {/* Quantity and price controls */}
                <div className="flex items-center gap-4">
                  <span className="w-12 text-center text-xs md:w-16 md:text-sm">
                    ৳ {item.totalAmount || item.unitPrice || 0}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReviewCheckoutInformation
