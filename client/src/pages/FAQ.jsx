import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import FAQSection from "../components/FAQSection";
import { createFAQSchema } from "../utils/structuredDataSchemas";

function FAQ() {
  const { t } = useTranslation();

  // Define FAQ data for structured data
  const faqData = [
    {
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
      question: t("faq.thirdQuestion", "Як довго горить деревне вугілля?"),
      answer: t(
        "faq.thirdAnswer",
        "Тривалість горіння залежить від фракції та умов, але якісне деревне вугілля WOODEN WEST горить від 2 до 4 годин, забезпечуючи стабільну температуру.",
      ),
    },
    {
      question: t("faq.fourthQuestion", "Які фракції вугілля ви пропонуєте?"),
      answer: t(
        "faq.fourthAnswer",
        "Ми пропонуємо різні фракції вугілля, включаючи стандартну фракцію 20-120 мм, яка ідеально підходить для грилювання та барбекю.",
      ),
    },
    {
      question: t("faq.fifthQuestion", "Як здійснюється доставка вугілля?"),
      answer: t(
        "faq.fifthAnswer",
        "Ми здійснюємо доставку вугілля власним транспортом по всій Польщі та країнам ЄС. Умови поставки відповідають INCOTERMS 2020 (DAP Polkowice).",
      ),
    },
  ];

  // Create FAQ schema for SEO
  const faqSchema = createFAQSchema(faqData);

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t(
          "seoPages.faq.title",
          "Часті питання про деревне вугілля | VAN SHARE",
        )}
        description={t(
          "seoPages.faq.description",
          "Відповіді на найпоширеніші питання про деревне вугілля WOODEN WEST, доставку, зберігання та переваги. VAN SHARE - офіційний дистриб'ютор в Польщі.",
        )}
        path="/faq"
        schema={[faqSchema]}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            {t("faq.pageTitle", "Часті питання")}
          </h1>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t(
              "faq.pageSubtitle",
              "Знайдіть відповіді на найпоширеніші питання про наше деревне вугілля WOODEN WEST",
            )}
          </p>
        </div>

        <FAQSection />
      </div>
    </div>
  );
}

export default FAQ;
