import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

function FAQAccordion({ items = [], className = "" }) {
  return (
    <Accordion type="single" collapsible className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-stone-700 rounded-xl bg-stone-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-orange-500/30"
        >
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <div className="p-5 pt-0 text-stone-400 border-t border-stone-800">
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQAccordion;
