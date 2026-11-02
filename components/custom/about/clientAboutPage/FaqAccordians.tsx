import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IFAQ } from "./ClientAboutPage";

const FaqAccordians = (props : {faq : IFAQ}) => {
    return (
        <Accordion defaultValue={["item-1"]} className="w-full rounded-md border p-1 lg:p-2">
  <AccordionItem value={`item-${props.faq.id}`}>
    <AccordionTrigger className={"text-base font-semibold"}>{props.faq.question}</AccordionTrigger>
    <AccordionContent className={"text-xs text-primary-background/80"}>
      {props.faq.answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>
    );
};

export default FaqAccordians;