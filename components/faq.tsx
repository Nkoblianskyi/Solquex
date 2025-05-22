import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Ist das Spiel wirklich kostenlos?",
      answer:
        "Ja, das Spiel ist vollständig kostenlos. Es gibt keine versteckten Kosten, In-App-Käufe oder Abonnements.",
    },
    {
      question: "Handelt es sich um ein Bildungsspiel?",
      answer:
        "Ja, absolut. Es handelt sich um eine reine soziale und Unterhaltungsplattform. Alle Inhalte sind virtuell, haben keinen realen Wert und dienen ausschließlich der Unterhaltung und sozialen Interaktion. Es gibt keine Möglichkeit, echtes Geld einzusetzen oder zu gewinnen.",
    },
    {
      question: "Warum ist das Spiel erst ab 18 Jahren?",
      answer:
        "Obwohl unser Spiel keine Glücksspielelemente enthält, haben wir uns entschieden, es für Erwachsene ab 18 Jahren zu gestalten, um sicherzustellen, dass die Bildungsinhalte angemessen verstanden werden können.",
    },
    {
      question: "Was lerne ich in diesem Spiel?",
      answer:
        "Das Spiel bietet Unterhaltung und soziale Interaktion rund um traditionelle alpine Landwirtschaft, das Leben der Bergbauern in Österreich, lokale Flora und Fauna sowie kulturelle Traditionen der Alpenregion.",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Antworten auf die häufigsten Fragen zu unserem Spiel
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
