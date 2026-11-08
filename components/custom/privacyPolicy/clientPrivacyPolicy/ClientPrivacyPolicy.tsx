import { demoPrivacyPolicyData } from "@/data/demoData"
import { FileText } from "lucide-react"
import PrivacyPolicyCard from "./PrivacyPolicyCard"

const ClientPrivacyPolicy = () => {
  const privacyPolicyData = demoPrivacyPolicyData
  return (
    <div className="px-2 pt-4 pb-6 md:space-y-3 md:p-4 md:pb-8 lg:p-6 lg:pb-10">
      <div className="space-y-2 py-5 md:space-y-3 md:py-7 lg:py-8">
        <FileText className="mx-auto h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
        <h3 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Terms & Conditions
        </h3>
        <p className="mx-auto w-full max-w-lg text-center text-primary-background/80">
          Please read these terms carefully before using our services.
        </p>
      </div>
      {/* Return policy Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {privacyPolicyData.map((policy, index) => (
          <PrivacyPolicyCard key={policy.id} policy={policy} index={index} />
        ))}
      </div>
    </div>
  )
}

export default ClientPrivacyPolicy
