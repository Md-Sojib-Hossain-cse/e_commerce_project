import Image from "next/image";

const OurStorySection = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <div className="relative w-full lg:w-1/2 aspect-4/2 lg:aspect-4/3 shrink-0 lg:order-2">
            <Image
          src="https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793617410/about2_b8mpvs.jpg"
          alt="About Image"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>
            <div className="w-full lg:w-1/2 shrink-0 lg:order-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">Our Story</h3>
                <p className="text-xs md:text-sm lg:text-base md:mt-6 lg:mt-8 text-primary-background/80">
                    Dressen started with a simple belief: <strong>“Fashion should be accessible, stylish, and sustainable.”</strong> From our first boutique to today’s online platform, we’ve been committed to curating quality clothing that empowers people to express their individuality.
                </p>
                <p className="text-xs md:text-sm lg:text-base mt-2 md:mt-4 lg:mt-6 text-primary-background/80">
                    Today, Dressen offers everything from casual everyday essentials to statement pieces for special occasions. We carefully select each item for quality, style, and value, bringing you fashion that fits your lifestyle and budget.
                </p>
            </div>
        </section>
    );
};

export default OurStorySection;