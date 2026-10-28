import { LucideIcon, Package , Truck, Palette , RotateCcw } from "lucide-react";


const iconMap : Record<string, LucideIcon> = {
    "package": Package,
    "truck": Truck,
    "palette": Palette,
    "rotate-ccw": RotateCcw,
};

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
];
    return (
        <div className="min-h-[312px] bg-primary-background text-primary-foreground p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Dressen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {whyChooseDressen.map((item) => {
                    // 2. Look up the component dynamically inside the map loop
                    const IconComponent = iconMap[item.icon as keyof typeof iconMap];

                    return (
                        <div key={item.id} className="flex flex-col items-center text-center p-4">
                            <div className="bg-secondary-background text-secondary-foreground p-3 rounded-full mb-2">
                                {/* 3. Render the dynamic component if found */}
                                {IconComponent ? <IconComponent className="w-6 h-6" /> : <Package className="w-6 h-6" />}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyChooseDressen;