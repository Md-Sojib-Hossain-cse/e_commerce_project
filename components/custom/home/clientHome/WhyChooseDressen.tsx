import { LucideIcon, Package, Truck, Palette, RotateCcw } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  package: Package,
  truck: Truck,
  palette: Palette,
  "rotate-ccw": RotateCcw,
}

const WhyChooseDressen = () => {
  const whyChooseDressen = [
    {
      id: 1,
      icon: "package",
      title: "Premium quality!",
      description: "Carefully selected products made with quality materials.",
      rating: 5,
    },
    {
      id: 2,
      icon: "truck",
      title: "Fast delivery!",
      description: "Get your favorite fashion items delivered quickly.",
      rating: 5,
    },
    {
      id: 3,
      icon: "palette",
      title: "Local Artist Artist Designs",
      description: "Discover unique designs created by talented local artists.",
      rating: null,
    },
    {
      id: 4,
      icon: "rotate-ccw",
      title: "Fast Easy Return",
      description: "Enjoy a simple and convenient return experience.",
      rating: null,
    },
  ]
  return (
    <div className="min-h-78 bg-primary-background p-8 text-primary-foreground md:p-12">
      <h2 className="mb-4 text-center text-3xl font-bold">
        Why Choose Dressen?
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseDressen.map((item) => {
          // 2. Look up the component dynamically inside the map loop
          const IconComponent = iconMap[item.icon as keyof typeof iconMap]

          return (
            <div
              key={item.id}
              className="flex flex-col items-center p-4 text-center"
            >
              <div className="mb-2 rounded-full bg-secondary-background p-3 text-secondary-foreground">
                {/* 3. Render the dynamic component if found */}
                {IconComponent ? (
                  <IconComponent className="h-6 w-6" />
                ) : (
                  <Package className="h-6 w-6" />
                )}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhyChooseDressen
