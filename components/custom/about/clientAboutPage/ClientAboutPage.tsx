import AboutPageBanner from "./AboutPageBanner";
import AboutPageStatusCard from "./AboutPageStatusCard";
import FaqAccordians from "./FaqAccordians";
import OurStorySection from "./OurStorySection";
import OurValuesCard from "./OurValuesCard";
import ReadyToUpgrade from "./ReadyToUpgrade";

export interface IStoreStatistic {
  id: number;
  value: string;
  label: string;
  icon: string;
}


export interface IStoreFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}

const ClientAboutPage = () => {
    const statusCards : IStoreStatistic[] =[
  {
    "id": 1,
    "value": "25+",
    "label": "Collections",
    "icon": "store"
  },
  {
    "id": 2,
    "value": "1500+",
    "label": "Products",
    "icon": "package"
  },
  {
    "id": 3,
    "value": "50K+",
    "label": "Happy Customers",
    "icon": "users"
  },
  {
    "id": 4,
    "value": "200K+",
    "label": "Orders Delivered",
    "icon": "shopping-bag"
  }
]

const demoValues : IStoreFeature[] = [
  {
    "id": 1,
    "icon": "shield-check",
    "title": "Quality & Durability",
    "description": "Premium materials, careful craftsmanship, and lasting construction."
  },
  {
    "id": 2,
    "icon": "leaf",
    "title": "Sustainability",
    "description": "Eco-friendly practices and responsible sourcing for a better future."
  },
  {
    "id": 3,
    "icon": "rocket",
    "title": "Fast Delivery",
    "description": "Quick processing and reliable shipping to your doorstep."
  },
  {
    "id": 4,
    "icon": "smile",
    "title": "Style & Comfort",
    "description": "Trendy designs that don't compromise on comfort and wearability."
  }
]

const demoFaqs : IFAQ[] = [
  {
    "id": 1,
    "question": "What sizes do you offer?",
    "answer": "We offer a full range of sizes from XS to 3XL for most items. Check individual product pages for specific size charts and availability."
  },
  {
    "id": 2,
    "question": "Do you offer free shipping?",
    "answer": "Yes! We offer free shipping on orders over $75. Standard delivery takes 3-7 business days, with express options available."
  },
  {
    "id": 3,
    "question": "What's your return policy?",
    "answer": "We accept returns within 30 days of purchase. Items must be unworn with original tags. Free returns for exchanges or store credit."
  },
  {
    "id": 4,
    "question": "How do I find my perfect fit?",
    "answer": "Use our detailed size guides on each product page. We also offer virtual fitting tools and customer reviews with fit feedback."
  }
]

    return (
        <div className="space-y-4 px-2 pb-6 md:space-y-6 md:p-4 md:pb-8 lg:p-6 lg:pb-10">
            <div className="pt-4 md:pt-6 lg:pt-8">
                <AboutPageBanner/>
            </div>
            <div className="mt-8 md:mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {statusCards.map((card, index) => (
                    <AboutPageStatusCard key={index} card={card} />
                ))}
            </div>
            <div className="pt-8 md:pt-12 lg:pt-20">
                <OurStorySection />
            </div>
            <div className="pt-8 md:pt-12 lg:pt-20">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1">Our Values</h3>
            <p className="text-xs md:text-sm lg:text-base mt-1 lg:mt-2 text-primary-background/80">
                Four principles guide every collection and every customer experience.
            </p>
            <div className="mt-2 md:mt-3 lg:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {demoValues.map((value, index) => (
                    <OurValuesCard key={index} value={value} />
                ))}
            </div>
            </div>
            <div className="pt-8 md:pt-12 lg:pt-20">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1">FAQs</h3>
            <div className="mt-2 md:mt-3 lg:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {demoFaqs.map((faq, index) => (
                    <FaqAccordians key={index} faq={faq} />
                ))}
            </div>
            </div>
            <div className="py-4 md:py-6 lg:py-8">
                <ReadyToUpgrade />
            </div>
        </div>
    );
};

export default ClientAboutPage;