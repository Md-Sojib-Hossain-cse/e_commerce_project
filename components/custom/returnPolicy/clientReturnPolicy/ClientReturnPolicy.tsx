import { demoReturnPolicyData } from "@/data/demoData"
import { IReturnPolicy } from "@/types/product"
import { Shield } from "lucide-react"
import ReturnPolicyCard from "./ReturnPolicyCard"

const ClientReturnPolicy = () => {
  const returnPolicyData: IReturnPolicy[] = demoReturnPolicyData
  return (
    <div className="px-2 pt-4 pb-6 md:space-y-3 md:p-4 md:pb-8 lg:p-6 lg:pb-10">
      <div className="space-y-2 py-5 md:space-y-3 md:py-7 lg:py-8">
        <Shield className="mx-auto h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
        <h3 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Return & Exchange Policy
        </h3>
        <p className="mx-auto w-full max-w-lg text-center text-primary-background/80">
          We want you to have the best experience with Dressen. If something is
          not right, we are here to help.
        </p>
      </div>
      {/* Return policy Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {returnPolicyData.map((policy, index) => (
          <ReturnPolicyCard key={policy.id} policy={policy} index={index} />
        ))}
      </div>
    </div>
  )
}

export default ClientReturnPolicy
