"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"
import { selectCartItems } from "@/redux/features/cart/cartSlice"
import { useAppSelector } from "@/redux/hook"
import { CheckIcon, LoaderCircleIcon, MoveRight, MoveLeft } from "lucide-react"
import CheckoutOrderSummary from "./CheckoutOrderSummary"
import CheckoutCart from "./CheckoutCart"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CustomerInformation from "./CustomerInformation"

const steps = [
  { title: "Cart" },
  { title: "Shipping" },
  { title: "Payment" },
  { title: "Review" },
]

export default function ClientCheckoutPage() {
  const [step, setStep] = useState(1)
  const cartItems = useAppSelector(selectCartItems)

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, steps.length))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="mx-auto space-y-8 px-4 py-8 md:py-12 md:pl-6 lg:py-16 lg:pr-8 lg:pl-16">
      {/* Page heading */}
      <h1 className="text-center text-2xl font-bold text-primary-background md:text-3xl lg:text-4xl">
        Complete Your Order
      </h1>

      {/* Navigation and Stepper */}
      <div>
        {/* Stepper */}
        <Stepper
          className="w-full space-y-4 md:space-y-5 lg:space-y-6"
          value={step}
          onValueChange={setStep}
          indicators={{
            completed: <CheckIcon className="size-4" />,
            loading: <LoaderCircleIcon className="size-4 animate-spin" />,
          }}
        >
          <StepperNav className="mx-auto">
            {steps.map((step, index) => (
              <StepperItem
                key={index}
                step={index + 1}
                className="relative flex-1 items-start"
              >
                <StepperTrigger className="flex flex-col gap-2.5">
                  <StepperIndicator className="size-12">
                    {index + 1}
                  </StepperIndicator>
                  <StepperTitle>{step.title}</StepperTitle>
                </StepperTrigger>

                {index < steps.length - 1 && (
                  <StepperSeparator className="absolute top-6 left-[calc(50%+1.5rem)] m-0 w-[calc(100%-3rem)] flex-none" />
                )}
              </StepperItem>
            ))}
          </StepperNav>

          <StepperPanel>
            {steps.map((item, index) => (
              <StepperContent key={index} value={index + 1}>
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
                  {/* Main Step Content */}
                  <div className="min-w-0 space-y-6 rounded-md border bg-white p-4 shadow-sm lg:col-span-2 lg:p-6">
                    {index === 0 && <CheckoutCart cartItems={cartItems} />}

                    {index === 1 && <CustomerInformation />}

                    {index === 2 && <div>Payment Information</div>}

                    {index === 3 && <div>Review Your Order</div>}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between">
                      <Button
                        onClick={handleBack}
                        disabled={step === 1}
                        variant="outline"
                      >
                        <MoveLeft /> Back
                      </Button>

                      <Button
                        onClick={handleNext}
                        disabled={step === steps.length}
                      >
                        Continue <MoveRight />
                      </Button>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <CheckoutOrderSummary cartItems={cartItems} />
                </div>
              </StepperContent>
            ))}
          </StepperPanel>
        </Stepper>
      </div>
    </div>
  )
}
