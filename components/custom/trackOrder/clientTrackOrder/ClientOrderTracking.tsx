import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Search, Truck } from "lucide-react"

const ClientOrderTracking = () => {
  return (
    <div>
      <div className="lg:pb20 space-y-4 bg-primary-background px-4 pt-8 pb-20 md:space-y-5 md:p-8 md:pb-12 lg:space-y-6 lg:pb-20">
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <div className="rounded-full bg-primary-foreground/20 p-1 md:p-2 lg:p-3">
            <Truck className="h-5 w-5 text-primary-foreground md:h-6 md:w-6 lg:h-7 lg:w-7" />
          </div>
          <h3 className="text-center text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Track Your Order
          </h3>
        </div>
        <p className="mx-auto w-full max-w-2xl text-center text-primary-foreground md:text-lg">
          Enter your tracking information below to get real-time updates on your
          order status
        </p>
      </div>
      {/* search section */}
      <div className="relative -top-10 w-full max-w-4xl space-y-4 rounded-md bg-primary-white p-4 px-6 md:mx-auto md:space-y-5 md:p-6 lg:space-y-6 lg:p-8">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="rounded-md bg-primary-background/10 p-1 md:p-2">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold md:text-xl lg:text-2xl">
            Enter Tracking Details
          </h3>
        </div>
        <div>
          <p className="pb-1 text-xs font-medium md:text-sm">
            Enter Tracking Number
          </p>
          <InputGroup className="py-4 ring-2 ring-primary-background/20 md:py-5 lg:py-6 lg:pl-1">
            <InputGroupInput placeholder="Enter your tracking number..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                variant="secondary"
                className="flex h-full items-center gap-1 bg-primary-background px-4 py-0 text-lg text-primary-foreground hover:bg-primary-background/80 hover:text-primary-foreground md:py-1 lg:py-2"
              >
                <Search className="h-6 w-6" />
                Track
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}

export default ClientOrderTracking
