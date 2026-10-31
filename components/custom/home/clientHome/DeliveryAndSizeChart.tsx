import { Button } from "@/components/ui/button"
import Link from "next/link"

const DeliveryAndSizeChart = () => {
  return (
    <div>
      <p className="text-center text-primary-background">
        Estimated delivery: 2–3 days inside Dhaka
      </p>
      <div className="mt-4 flex flex-col items-center gap-2 bg-primary-background p-4 md:p-6">
        <Link href={"/size-chart"}>
          <Button
            className={
              "rounded-sm bg-primary-foreground p-5 font-semibold text-primary-background hover:bg-primary-foreground/90"
            }
          >
            View Size Chart
          </Button>
        </Link>
        <p className="text-primary-foreground">Secure Payment | Easy Return</p>
      </div>
    </div>
  )
}

export default DeliveryAndSizeChart
