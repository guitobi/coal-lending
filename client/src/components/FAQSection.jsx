import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { createFAQSchema } from "../utils/structuredDataSchemas";
import StructuredData from "./StructuredData";
import { useTranslation } from "react-i18next";

function FAQSection({ faqs = [], className = "", id = "faq" }) {
  const { t } = useTranslation();

  // Default FAQs if none provided
  const defaultFaqs = [
    {
      id: "faq-1",
      question: t(
        "faq.firstQuestion",
        "Які переваги використання деревного вугілля WOODEN WEST?",
      ),
      answer: t(
        "faq.firstAnswer",
        "Наше деревне вугілля WOODEN WEST має високу тепловіддачу, довгий час горіння та мінімальну кількість попелу. Воно виготовлене з якісної деревини та відповідає європейським стандартам EN 1860-2.",
      ),
    },
    {
      id: "faq-2",
      question: t(
        "faq.secondQuestion",
        "Як правильно зберігати деревне вугілля?",
      ),
      answer: t(
        "faq.secondAnswer",
        "Деревне вугілля слід зберігати в сухому, провітрюваному місці, захищеному від вологи. Краще тримати його в оригінальній упаковці або герметичному контейнері.",
      ),
    },
    {
      id: "faq-3",
      question: t("faq.thirdQuestion", "Як довго горить деревне вугілля?"),
      answer: t(
        "faq.thirdAnswer",
        "Тривалість горіння залежить від фракції та умов, але якісне деревне вугілля WOODEN WEST горить від 2 до 4 годин, забезпечуючи стабільну температуру.",
      ),
    },
    {
      id: "faq-4",
      question: t("faq.fourthQuestion", "Які фракції вугілля ви пропонуєте?"),
      answer: t(
        "faq.fourthAnswer",
        "Ми пропонуємо різні фракції вугілля, включаючи стандартну фракцію 20-120 мм, яка ідеально підходить для грилювання та барбекю.",
      ),
    },
    {
      id: "faq-5",
      question: t("faq.fifthQuestion", "Як здійснюється доставка вугілля?"),
      answer: t(
        "faq.fifthAnswer",
        "Ми здійснюємо доставку вугілля власним транспортом по всій Польщі та країнам ЄС. Умови поставки відповідають INCOTERMS 2020 (DAP Polkowice).",
      ),
    },
  ];

  const allFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  // Create FAQ schema for SEO
  const faqSchema = createFAQSchema(allFaqs);

  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <StructuredData schema={faqSchema} />

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
            {t("faq.title", "Часті питання")}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t(
              "faq.subtitle",
              "Відповіді на найпоширеніші питання про наше деревне вугілля",
            )}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {allFaqs.map((faq, index) => (
            <AccordionItem
              key={faq.id || `faq-${index}`}
              value={faq.id || `faq-${index}`}
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
