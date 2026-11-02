import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutPageBanner = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 shrink-0">
                <h3 className="text-xs font-bold tracking-widest">ABOUT Dressen</h3>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                    Fashion that fits your lifestyle.
                </p>
                <p className="text-xs md:text-sm lg:text-lg mt-4 md:mt-6 lg:mt-8">
                    Dressen brings you the latest in fashion trends and timeless classics. From casual everyday wear to elegant formal pieces—discover quality clothing that expresses your unique style.
                </p>
                <div className="flex flex-row gap-4 mt-4 md:mt-6 lg:mt-8">
                    <Link href="/shop">
                    <Button className="p-2 md:p-3 lg:p-5 text-bg-primary-background text-primary-foreground">Shop Now</Button>
                    </Link>
                    <Link href="/contact">
                    <Button className="p-2 md:p-3 lg:p-5 bg-primary-white transition-colors duration-300 text-primary-background  shadow-sm hover:bg-primary-foreground/80">Contact Us</Button>
                    </Link>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 aspect-4/2 lg:aspect-4/3 order-1 lg:order-2 shrink-0">
            <Image
          src="https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793610715/images_p0x64h.jpg"
          alt="About Image"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>
        </section>
    );
};

export default AboutPageBanner;