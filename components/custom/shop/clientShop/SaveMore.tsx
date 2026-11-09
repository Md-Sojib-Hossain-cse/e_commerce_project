import { demoSaveMoreData } from "@/data/demoData"
import { Camera, Heart, Shield, Truck } from "lucide-react"

const SaveMore = () => {
  const saveMoreData = demoSaveMoreData
  return (
    <div className="space-y-3 py-6 md:space-y-4 md:py-8 lg:space-y-5 lg:py-10">
      <h3 className="text-center text-2xl font-bold text-primary-background md:text-3xl lg:text-4xl">
        Save More Risk Nothing
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
        {saveMoreData.features.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center space-y-2 rounded-md border bg-primary-white p-4 shadow-sm"
          >
            {data.icon === "camera" && (
              <Camera className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
            )}
            {data.icon === "heart" && (
              <Heart className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
            )}
            {data.icon === "truck" && (
              <Truck className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
            )}
            {data.icon === "shield" && (
              <Shield className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
            )}
            <h4 className="text-center text-base font-semibold text-primary-background md:text-lg">
              {data.title}
            </h4>
            <p className="text-center text-xs text-primary-background/60 md:text-sm">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SaveMore
