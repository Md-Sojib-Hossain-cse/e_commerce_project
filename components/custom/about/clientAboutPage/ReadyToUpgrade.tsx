import { Button } from "@/components/ui/button";
import Link from "next/link";

const ReadyToUpgrade = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 bg-primary-white shadow-sm drop-shadow-sm p-4 md:p-6 lg:p-8 rounded-lg py-6 md:py-8 lg:py-10">
            <div>
                <h3 className="text-lg text-center lg:text-left md:text-xl lg:text-2xl font-bold">Ready to upgrade your wardrobe?</h3>
            <p className="text-xs lg:text:sm text-primary-background/80 text-center lg:text-left">
                Discover the latest trends, timeless classics, and exclusive deals—find fashion that fits your style and budget.
            </p>
            </div>
                <div className="flex flex-row gap-4">
                    <Link href="/shop">
                    <Button className="p-2 md:p-3 lg:p-5 text-bg-primary-background text-primary-foreground">Shop Now</Button>
                    </Link>
                    <Link href="/contact">
                    <Button className="p-2 md:p-3 lg:p-5 bg-primary-white transition-colors duration-300 text-primary-background  shadow-sm hover:bg-primary-foreground/80">Contact Us</Button>
                    </Link>
                </div>
        </section>
    );
};

export default ReadyToUpgrade;