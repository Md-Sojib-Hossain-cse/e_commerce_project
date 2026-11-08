import { IReturnPolicy } from "@/types/product"
import {
  CircleAlert,
  CircleCheck,
  Package,
  Phone,
  RefreshCw,
  ScrollText,
  Truck,
  Wallet,
} from "lucide-react"

const ReturnPolicyCard = (props: { policy: IReturnPolicy; index: number }) => {
  const { policy, index } = props
  return (
    <div
      className={`space-y-2 rounded-md border border-primary-background/10 p-4 transition duration-300 ease-in-out hover:shadow-md lg:space-y-4 lg:p-6 ${index === 4 ? "md:col-span-2" : ""} ${policy.points.length > 0 ? "bg-primary-white" : "bg-primary-background/10"}`}
    >
      <div className="flex items-center gap-2 text-lg font-bold">
        {policy.icon && policy.icon === "CircleCheck" ? (
          <CircleCheck className="h-5 w-5 text-green-500" />
        ) : policy.icon === "CircleAlert" ? (
          <CircleAlert className="h-5 w-5 text-red-500" />
        ) : policy.icon === "Package" ? (
          <Package className="h-5 w-5 text-red-500" />
        ) : policy.icon === "RefreshCw" ? (
          <RefreshCw className="h-5 w-5 text-yellow-500" />
        ) : policy.icon === "Phone" ? (
          <Phone className="h-5 w-5 text-blue-500" />
        ) : policy.icon === "Wallet" ? (
          <Wallet className="h-5 w-5 text-green-500" />
        ) : policy.icon === "Truck" ? (
          <Truck className="h-5 w-5 text-blue-500" />
        ) : (
          <ScrollText className="h-5 w-5" />
        )}
        <h4>
          {index + 1}. {policy.title}
        </h4>
      </div>
      <p className="text-xs text-primary-background/80 md:text-sm">
        {policy.description}
      </p>
      <div className="space-y-2">
        {policy.points.length > 0
          ? policy.points.map((pcy, index) => (
              <li key={index} className="list-inside text-xs md:text-sm">
                {pcy}
              </li>
            ))
          : ""}
      </div>
    </div>
  )
}

export default ReturnPolicyCard
