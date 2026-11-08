"use client"

import {
  BangladeshiTaka,
  CircleCheck,
  CreditCard,
  Smartphone,
  Truck,
} from "lucide-react"
import { useState } from "react"

const PaymentInformation = () => {
  const [selected, setSelected] = useState(1)
  return (
    <div className="space-y-4 md:space-y-5 lg:space-y-6">
      <h3 className="flex items-center gap-2">
        <CreditCard className="h-9 w-9 rounded-full bg-primary-background/5 p-2" />
        <span className="text-lg font-semibold md:text-xl">
          Payment Information
        </span>
      </h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div
          onClick={() => setSelected(1)}
          className={`relative flex items-center gap-3 rounded-md border ${selected === 1 ? "border-destructive-background outline" : "border-primary-background/5"} p-4 transition-colors duration-300 ease-in-out hover:border-destructive-background`}
        >
          <Truck />
          <div className="space-y-1">
            <h6 className="text-sm font-semibold">Cash On Delivery</h6>
            <p className="text-xs text-primary-background/60">
              Pay when you receive
            </p>
          </div>
          <CircleCheck
            className={`absolute top-4 right-4 h-5 w-5 text-destructive-background ${
              selected === 1 ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          />
        </div>
        <div
          onClick={() => setSelected(2)}
          className={`relative flex items-center gap-3 rounded-md border p-4 transition-colors duration-300 ease-in-out hover:border-destructive-background ${selected === 2 ? "border-destructive-background outline" : "border-primary-background/5"}`}
        >
          <BangladeshiTaka />
          <div className="space-y-1">
            <h6 className="text-sm font-semibold">Bkash</h6>
            <p className="text-xs text-primary-background/60">Mobile Payment</p>
          </div>
          <CircleCheck
            className={`absolute top-4 right-4 h-5 w-5 text-destructive-background ${
              selected === 2 ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          />
        </div>
        <div
          onClick={() => setSelected(3)}
          className={`relative flex items-center gap-3 rounded-md border p-4 transition-colors duration-300 ease-in-out hover:border-destructive-background ${selected === 3 ? "border-destructive-background outline" : "border-primary-background/5"}`}
        >
          <Smartphone />
          <div className="space-y-1">
            <h6 className="text-sm font-semibold">Nagad</h6>
            <p className="text-xs text-primary-background/60">Mobile Payment</p>
          </div>
          <CircleCheck
            className={`absolute top-4 right-4 h-5 w-5 text-destructive-background ${
              selected === 3 ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          />
        </div>
      </div>
      {selected === 1 && (
        <div className="flex flex-col items-center justify-center gap-1 rounded-md border bg-primary-background/5 p-4 md:p-5 lg:p-6">
          <Truck />
          <p className="text-center text-sm text-primary-background">
            You will pay in cash upon delivery.
          </p>
          <p className="text-center text-xs text-primary-background/60">
            Please have the exact amount ready.
          </p>
        </div>
      )}
      {selected === 2 && (
        <div className="flex flex-col items-center justify-center gap-1 rounded-md border bg-primary-background/5 p-4 md:p-5 lg:p-6">
          <BangladeshiTaka />
          <p className="text-center text-sm text-primary-background">
            bKash Number: +8801909008004
          </p>
          <p className="text-center text-xs text-primary-background/60">
            Send money to this number and call admin at +8801909008004 to
            confirm your payment.
          </p>
        </div>
      )}
      {selected === 3 && (
        <div className="flex flex-col items-center justify-center gap-1 rounded-md border bg-primary-background/5 p-4 md:p-5 lg:p-6">
          <Smartphone />
          <p className="text-center text-sm text-primary-background">
            Nagad Number: +8801909008004
          </p>
          <p className="text-center text-xs text-primary-background/60">
            Send money to this number and call admin at +8801909008004 to
            confirm your payment.
          </p>
        </div>
      )}
    </div>
  )
}

export default PaymentInformation
