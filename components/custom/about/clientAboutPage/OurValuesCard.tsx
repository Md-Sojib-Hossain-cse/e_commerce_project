import {
  ShieldCheck,
  Leaf,
  Rocket,
  Smile,
} from "lucide-react";
import { IStoreFeature } from "./ClientAboutPage";


const OurValuesCard = (props : { value: IStoreFeature }) => {
  const { value } = props;
  
    return (
        <section className="bg-primary-white px-4 lg:px-6 py-8 lg:py-12 rounded-lg shadow-sm space-y-2 md:space-y-3 lg:space-y-4 drop-shadow-md">
                        <div className="flex items-center gap-3">
                            {value.icon === "shield-check" && <ShieldCheck className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                            {value.icon === "leaf" && <Leaf className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                            {value.icon === "rocket" && <Rocket className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                            {value.icon === "smile" && <Smile className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center space-y-1">
                            <h3 className="text-sm lg:text-base font-semibold">{value.title}</h3>
                            <p className="text-xs md:text-sm text-primary-background/80">{value.description}</p>
                        </div>
                    </section>
    );
};

export default OurValuesCard;