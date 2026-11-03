import { demoFaqs } from "@/data/demoData"
import { IFAQ } from "@/types/product"
import FaqAccordian from "../../shared/components/FaqAccordian"

const ClientFaq = () => {
  const faqs: IFAQ[] = demoFaqs
  return (
    <div className="px-2 pt-4 pb-6 md:space-y-6 md:p-4 md:pb-8 lg:p-6 lg:pb-10">
      <h2 className="mb-4 text-center text-xl font-semibold md:text-2xl lg:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="mx-auto w-full max-w-md text-center text-sm text-primary-background/60 md:w-2/3 lg:w-1/2">
        Our Frequently Asked Questions section is here to give you quick answers
        to the most common queries about our service.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-1 md:mt-6 lg:mt-8">
        {faqs.map((faq, index) => (
          <FaqAccordian key={index} faq={faq} />
        ))}
      </div>
    </div>
  )
}

export default ClientFaq
