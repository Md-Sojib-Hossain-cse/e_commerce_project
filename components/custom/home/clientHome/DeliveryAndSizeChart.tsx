import { Button } from "@/components/ui/button";

const DeliveryAndSizeChart = () => {
    return (
        <div>
            <p className="text-center text-primary-background">Estimated delivery: 2–3 days inside Dhaka</p>
            <div className="flex flex-col items-center gap-2 mt-4 bg-primary-background p-4 md:p-6">
                <Button className={"bg-primary-foreground text-primary-background hover:bg-primary-foreground/90 p-5 font-semibold rounded-sm"}>View Size Chart</Button>
                <p className="text-primary-foreground">Secure Payment | Easy Return</p>
            </div>
        </div>
    );
};

export default DeliveryAndSizeChart;