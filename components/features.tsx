import { Shield, BookOpen, Map, Award, Users, History } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <History className="h-10 w-10 text-primary" />,
      title: "Historische Abenteuer",
      description: "Erlebe die wichtigsten Ereignisse der österreichischen Geschichte hautnah mit.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Bildungsinhalte",
      description: "Lerne spielerisch über die Kultur, Geschichte und Traditionen Österreichs.",
    },
    {
      icon: <Map className="h-10 w-10 text-primary" />,
      title: "Verschiedene Umgebungen",
      description: "Erkunde die Alpen, historische Städte und bedeutende Kulturstätten.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Herausforderungen",
      description: "Stelle dich spannenden Aufgaben und erweitere dein Wissen über Österreich.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Soziale Interaktion",
      description: "Teile deine Fortschritte und vergleiche sie mit Freunden.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Sicheres Spielen",
      description: "Genieße ein sicheres Spielerlebnis ohne Glücksspiel-Elemente.",
    },
  ]

  return (
    <section id="features" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Spielfunktionen</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Entdecke die vielfältigen Funktionen unseres Bildungsspiels über österreichische Geschichte und Kultur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
