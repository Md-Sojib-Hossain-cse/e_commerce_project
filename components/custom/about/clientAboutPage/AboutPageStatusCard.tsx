import { Package, ShoppingBag, Store, Users } from "lucide-react";
import { IStoreStatistic } from "./ClientAboutPage";

const AboutPageStatusCard = (props : { card: IStoreStatistic }) => {
    const { card } = props;
    return (
        <section className="bg-primary-white flex justify-between gap-3 md:gap-4 lg:gap-6 px-4 py-8 rounded-lg shadow-md">
                        <div className="flex items-center gap-3">
                            {card.icon === "store" && <Store className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                            {card.icon === "package" && <Package className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                            {card.icon === "users" && <Users className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                            {card.icon === "shopping-bag" && <ShoppingBag className="h-9 w-9 p-2 bg-primary-foreground rounded-md" />}
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{card.value}</h3>
                            <p className="text-xs md:text-sm">{card.label}</p>
                        </div>
                    </section>
    );
};

export default AboutPageStatusCard;