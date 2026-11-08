import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const AboutPageBanner = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-6">
      <div className="order-2 w-full shrink-0 lg:order-1 lg:w-1/2">
        <h3 className="text-xs font-bold tracking-widest">ABOUT Chaity</h3>
        <p className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">
          Fashion that fits your lifestyle.
        </p>
        <p className="mt-4 text-xs md:mt-6 md:text-sm lg:mt-8 lg:text-lg">
          Chaity brings you the latest in fashion trends and timeless classics.
          From casual everyday wear to elegant formal pieces—discover quality
          clothing that expresses your unique style.
        </p>
        <div className="mt-4 flex flex-row gap-4 md:mt-6 lg:mt-8">
          <Link href="/shop">
            <Button className="text-bg-primary-background p-2 text-primary-foreground md:p-3 lg:p-5">
              Shop Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-primary-white p-2 text-primary-background shadow-sm transition-colors duration-300 hover:bg-primary-foreground/80 md:p-3 lg:p-5">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative order-1 aspect-4/2 w-full shrink-0 lg:order-2 lg:aspect-4/3 lg:w-1/2">
        <Image
          src="https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793610715/images_p0x64h.jpg"
          alt="About Image"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

export default AboutPageBanner
