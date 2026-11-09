"use client"
import { CircleCheckBig, MoveRight } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAppDispatch } from "@/redux/hook"
import { clearCart } from "@/redux/features/cart/cartSlice"

export function OrderConfirmationDialogBox(props: { step: number }) {
  const dispatch = useAppDispatch()

  const handlePlaceOrder = () => {
    dispatch(clearCart())
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            onClick={handlePlaceOrder}
            className={`${props.step === 4 ? "rounded-md py-3 md:py-4 lg:py-5" : "hidden"}`}
          >
            Place Order
            <MoveRight />
          </Button>
        }
      />
      <AlertDialogContent className="w-[calc(100%-2rem)] max-w-lg rounded-xl p-6 sm:p-8">
        <AlertDialogHeader className="flex flex-col items-center text-center">
          <AlertDialogMedia className="mx-auto mb-2 flex size-16 items-center justify-center rounded-full bg-success-foreground/10">
            <CircleCheckBig className="size-8 text-success-foreground" />
          </AlertDialogMedia>

          <AlertDialogTitle className="text-xl font-bold sm:text-2xl">
            Order Placed Successfully!
          </AlertDialogTitle>

          <AlertDialogDescription className="text-center text-sm leading-relaxed">
            Your order has been placed successfully. We&apos;ll process it
            shortly.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4 grid grid-cols-2 gap-2">
          <Button className="col-span-2 w-full rounded-md py-5 text-sm">
            View Your Orders
          </Button>

          <AlertDialogCancel className="rounded-md py-5 text-sm">
            Close
          </AlertDialogCancel>

          <AlertDialogAction
            render={
              <Link href="/shop" className="rounded-md py-5 text-sm">
                Continue Shopping
              </Link>
            }
          ></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
