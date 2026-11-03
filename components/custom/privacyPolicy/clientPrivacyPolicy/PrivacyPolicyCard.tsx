import { IPrivacyPolicy } from "@/types/product"
import {
  Box,
  CircleX,
  Copyright,
  DollarSign,
  FileText,
  Lock,
  Package,
  ScrollText,
  ShieldAlert,
  UserRoundX,
} from "lucide-react"

const PrivacyPolicyCard = (props: {
  policy: IPrivacyPolicy
  index: number
}) => {
  const { policy, index } = props
  return (
    <div
      className={`space-y-2 rounded-md border border-primary-background/10 p-4 transition duration-300 ease-in-out hover:shadow-md lg:space-y-4 lg:p-6`}
    >
      <div className="flex items-center gap-2 text-lg font-bold">
        {policy.icon && policy.icon === "FileText" ? (
          <FileText className="h-5 w-5 text-green-500" />
        ) : policy.icon === "Package" ? (
          <Package className="h-5 w-5 text-blue-500" />
        ) : policy.icon === "DollarSign" ? (
          <DollarSign className="h-5 w-5 text-blue-500" />
        ) : policy.icon === "Box" ? (
          <Box className="h-5 w-5 text-blue-500" />
        ) : policy.icon === "CircleX" ? (
          <CircleX className="h-5 w-5 text-red-500" />
        ) : policy.icon === "Copyright" ? (
          <Copyright className="h-5 w-5 text-green-500" />
        ) : policy.icon === "UserRoundX" ? (
          <UserRoundX className="h-5 w-5 text-red-500" />
        ) : policy.icon === "Lock" ? (
          <Lock className="h-5 w-5 text-green-500" />
        ) : policy.icon === "ShieldAlert" ? (
          <ShieldAlert className="h-5 w-5 text-yellow-500" />
        ) : (
          <ScrollText className="h-5 w-5" />
        )}
        <h4>
          {index + 1}. {policy.title}
        </h4>
      </div>
      {policy.description && (
        <p className="text-xs text-primary-background/80 md:text-sm">
          {policy.description}
        </p>
      )}

      {policy.paragraphs && policy.paragraphs.length > 0
        ? policy.paragraphs.map((para, index) => (
            <p
              key={index}
              className="text-xs text-primary-background/80 md:text-sm"
            >
              {para}
            </p>
          ))
        : ""}
      <div className="space-y-2">
        {policy.points && policy.points.length > 0
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

export default PrivacyPolicyCard
