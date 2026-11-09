"use client"

import { Button } from "@/components/ui/button"
import { updateCartItemQuantity } from "@/redux/features/cart/cartSlice"
import { useAppDispatch } from "@/redux/hook"
import { useState } from "react"

interface QuantityCounterProps {
  quantity: number
  limit: number
  type?: string
  productId?: string
}

const QuantityCounter = ({
  quantity,
  limit,
  type,
  productId,
}: QuantityCounterProps) => {
  const dispatch = useAppDispatch()

  const [counterQuantity, setCounterQuantity] = useState(quantity || 1)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > limit) return

    setCounterQuantity(newQuantity)

    if (type === "cartItem" && productId) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
        })
      )
    }
  }

  const increaseQuantity = () => {
    handleQuantityChange(counterQuantity + 1)
  }

  const decreaseQuantity = () => {
    handleQuantityChange(counterQuantity - 1)
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={decreaseQuantity}
        disabled={counterQuantity <= 1}
        className="rounded-lg border border-primary-background/10 bg-primary-white px-3 py-2 text-primary-background hover:bg-primary-background/5"
      >
        −
      </Button>

      <span className="min-w-4 text-center">{counterQuantity}</span>

      <Button
        onClick={increaseQuantity}
        disabled={counterQuantity >= limit}
        className="rounded-lg border border-primary-background/10 bg-primary-white px-3 py-2 text-primary-background hover:bg-primary-background/5"
      >
        +
      </Button>
    </div>
  )
}

export default QuantityCounter
