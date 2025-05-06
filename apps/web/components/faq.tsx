import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the filing process take?",
    answer:
      "Most filings are processed within 2-3 business days. However, processing times may vary depending on the state and entity type. We'll keep you updated throughout the process.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "You'll need to provide basic information about your business, including the business name, registered agent details, and member/owner information. We'll guide you through the entire process.",
  },
  {
    question: "Do you offer registered agent services?",
    answer:
      "Yes, we offer registered agent services in all 50 states. This service ensures you never miss important legal documents and maintain good standing with the state.",
  },
  {
    question: "What happens after filing?",
    answer:
      "After filing, you'll receive your formation documents, EIN (if requested), and a compliance calendar. We'll also help you with any post-formation requirements.",
  },
  {
    question: "Can I change my business structure later?",
    answer:
      "Yes, you can convert your business structure later, though the process and requirements vary by state. We can help you with the conversion process when you're ready.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
} 