import { demoFaqs } from "@/data/demoData"
import AboutPageBanner from "./AboutPageBanner"
import AboutPageStatusCard from "./AboutPageStatusCard"
import OurStorySection from "./OurStorySection"
import OurValuesCard from "./OurValuesCard"
import ReadyToUpgrade from "./ReadyToUpgrade"
import FaqAccordian from "../../shared/components/FaqAccordian"

export interface IStoreStatistic {
  id: number
  value: string
  label: string
  icon: string
}

export interface IStoreFeature {
  id: number
  icon: string
  title: string
  description: string
}

const ClientAboutPage = () => {
  const statusCards: IStoreStatistic[] = [
    {
      id: 1,
      value: "25+",
      label: "Collections",
      icon: "store",
    },
    {
      id: 2,
      value: "1500+",
      label: "Products",
      icon: "package",
    },
    {
      id: 3,
      value: "50K+",
      label: "Happy Customers",
      icon: "users",
    },
    {
      id: 4,
      value: "200K+",
      label: "Orders Delivered",
      icon: "shopping-bag",
    },
  ]

  const demoValues: IStoreFeature[] = [
    {
      id: 1,
      icon: "shield-check",
      title: "Quality & Durability",
      description:
        "Premium materials, careful craftsmanship, and lasting construction.",
    },
    {
      id: 2,
      icon: "leaf",
      title: "Sustainability",
      description:
        "Eco-friendly practices and responsible sourcing for a better future.",
    },
    {
      id: 3,
      icon: "rocket",
      title: "Fast Delivery",
      description: "Quick processing and reliable shipping to your doorstep.",
    },
    {
      id: 4,
      icon: "smile",
      title: "Style & Comfort",
      description:
        "Trendy designs that don't compromise on comfort and wearability.",
    },
  ]

  const faqs = demoFaqs

  return (
    <div className="space-y-4 px-2 pb-6 md:space-y-6 md:p-4 md:pb-8 lg:p-6 lg:pb-10">
      <div className="pt-4 md:pt-6 lg:pt-8">
        <AboutPageBanner />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8">
        {statusCards.map((card, index) => (
          <AboutPageStatusCard key={index} card={card} />
        ))}
      </div>
      <div className="pt-8 md:pt-12 lg:pt-20">
        <OurStorySection />
      </div>
      <div className="pt-8 md:pt-12 lg:pt-20">
        <h3 className="mt-1 text-xl font-bold md:text-2xl lg:text-3xl">
          Our Values
        </h3>
        <p className="mt-1 text-xs text-primary-background/80 md:text-sm lg:mt-2 lg:text-base">
          Four principles guide every collection and every customer experience.
        </p>
        <div className="mt-2 grid grid-cols-1 gap-4 md:mt-3 md:grid-cols-2 md:gap-6 lg:mt-5 lg:grid-cols-4 lg:gap-8">
          {demoValues.map((value, index) => (
            <OurValuesCard key={index} value={value} />
          ))}
        </div>
      </div>
      <div className="pt-8 md:pt-12 lg:pt-20">
        <h3 className="mt-1 text-xl font-bold md:text-2xl lg:text-3xl">FAQs</h3>
        <div className="mt-2 grid grid-cols-1 gap-4 md:mt-3 md:gap-6 lg:mt-5 lg:grid-cols-2 lg:gap-8">
          {faqs.slice(0, 4).map((faq, index) => (
            <FaqAccordian key={index} faq={faq} />
          ))}
        </div>
      </div>
      <div className="py-4 md:py-6 lg:py-8">
        <ReadyToUpgrade />
      </div>
    </div>
  )
}

export default ClientAboutPage
