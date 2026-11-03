import ClientQuery from "./ClientQuery"
import ContactUsFormWithInfo from "./ContactUsFormWithInfo"
import FindUs from "./FindUs"

const ClientContactUs = () => {
  return (
    <div className="w-full space-y-1 px-2 py-6 md:space-y-2 md:p-4 md:py-8 lg:p-6 lg:py-12">
      <h1 className="text-center text-2xl font-bold md:text-3xl">Contact Us</h1>
      <p className="mx-auto w-full text-center text-primary-background/80 md:w-2/3 lg:w-1/2">
        We’re here to help! Reach out to our team for inquiries, support, or
        feedback, and we’ll get back to you as soon as possible
      </p>
      <div className="mb-6 md:mb-10 lg:mb-16">
        <ContactUsFormWithInfo />
      </div>
      <h1 className="text-center text-2xl font-bold md:text-3xl">Find Us</h1>
      <p className="mx-auto w-full text-center text-primary-background/80 md:w-2/3 lg:w-1/2">
        Visit our location for direct assistance
      </p>
      <FindUs />
      <ClientQuery />
    </div>
  )
}

export default ClientContactUs
