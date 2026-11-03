import { ContactInfo } from "./ContactInfo"
import { ContactUsForm } from "./ContactUsForm"

const ContactUsFormWithInfo = () => {
  return (
    <section className="grid w-full grid-cols-1 items-stretch gap-4 px-2 pt-6 md:grid-cols-2 md:gap-6 md:p-4 md:pt-8 lg:gap-8 lg:p-6 lg:pt-12">
      {/* info */}
      <div className="relative order-1 flex h-full min-h-75 w-full items-center justify-center overflow-hidden rounded-md bg-primary-white p-6 py-8 md:justify-start md:py-12 lg:py-20">
        {/* Background Image Layer */}
        <div className="pointer-events-none absolute inset-0 bg-[url('https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793676161/about1_x4ubzg.jpg')] bg-cover bg-center bg-no-repeat" />

        {/* Content Layer */}
        <div className="relative w-full max-w-78 rounded-3xl border border-white/40 bg-white/80 px-8 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl md:py-5 lg:left-12 lg:py-7">
          <h4 className="text-center text-lg font-bold md:text-xl lg:text-2xl">
            Come See Us
          </h4>
          <div className="mt-4 md:mt-6 lg:mt-8">
            <ContactInfo />
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="order-2 h-full w-full">
        <ContactUsForm />
      </div>
    </section>
  )
}

export default ContactUsFormWithInfo
