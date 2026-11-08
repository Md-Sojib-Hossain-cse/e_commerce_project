import { Shield } from "lucide-react"

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CheckoutOrderSummaryProps {
  cartItems: any[]
}

export default function CheckoutOrderSummary({
  cartItems,
}: CheckoutOrderSummaryProps) {
  return (
    <aside className="rounded-2xl border bg-white p-5 shadow-sm md:p-8">
      <h2 className="mb-6 text-lg font-semibold">Order Summary</h2>

      <div className="space-y-5 border-y py-6">
        <div className="flex justify-between border-b border-primary-background/5 pb-4 text-primary-background/80">
          <span className="text-sm">Subtotal</span>
          <span className="text-sm">৳ 9,394.00</span>
        </div>

        <div className="flex justify-between text-primary-background/80">
          <span className="text-sm">Shipping</span>
          <span className="text-sm">৳ 0.00</span>
        </div>

        <div className="flex justify-between text-primary-background/80">
          <span className="text-sm">VAT</span>
          <span className="text-sm">৳ 0.00</span>
        </div>
      </div>

      <div className="flex justify-between py-6 text-lg">
        <span>Total</span>
        <span>৳ 9,394.00</span>
      </div>

      <p className="mb-5 flex items-center justify-center gap-1 rounded-md bg-gray-50 p-3 text-center text-sm">
        <Shield className="h-4 w-4 text-success-foreground" />
        <span className="text-xs text-primary-background/80">
          Secure SSL encrypted checkout
        </span>
      </p>

      {/* <div className="my-4 w-full border-b border-primary-background/5"></div> */}

      {/* <button className="w-full rounded-xl bg-primary-background py-3 font-medium text-white transition hover:opacity-90">
        Continue to Shipping
      </button> */}
    </aside>
  )
}
