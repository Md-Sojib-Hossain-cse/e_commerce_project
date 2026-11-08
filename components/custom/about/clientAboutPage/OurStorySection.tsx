import Image from "next/image"

const OurStorySection = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-6">
      <div className="relative aspect-4/2 w-full shrink-0 lg:order-2 lg:aspect-4/3 lg:w-1/2">
        <Image
          src="https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793617410/about2_b8mpvs.jpg"
          alt="About Image"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="w-full shrink-0 lg:order-1 lg:w-1/2">
        <h3 className="mt-2 text-xl font-bold md:text-2xl lg:text-3xl">
          Our Story
        </h3>
        <p className="text-xs text-primary-background/80 md:mt-6 md:text-sm lg:mt-8 lg:text-base">
          Chaity started with a simple belief:{" "}
          <strong>
            “Fashion should be accessible, stylish, and sustainable.”
          </strong>{" "}
          From our first boutique to today’s online platform, we’ve been
          committed to curating quality clothing that empowers people to express
          their individuality.
        </p>
        <p className="mt-2 text-xs text-primary-background/80 md:mt-4 md:text-sm lg:mt-6 lg:text-base">
          Today, Chaity offers everything from casual everyday essentials to
          statement pieces for special occasions. We carefully select each item
          for quality, style, and value, bringing you fashion that fits your
          lifestyle and budget.
        </p>
      </div>
    </section>
  )
}

export default OurStorySection
