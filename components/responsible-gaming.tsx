import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Users } from "lucide-react"

export default function ResponsibleGaming() {
  const resources = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "GambleAware",
      description: "Bietet Informationen und Unterstützung für verantwortungsvolles Spielen.",
      link: "https://www.gambleaware.org/",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "GamCare",
      description: "Unterstützung und Beratung für Menschen mit Spielproblemen.",
      link: "https://www.gamcare.org.uk/",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Gordon Moody",
      description: "Spezialisierte Behandlung für Menschen mit schweren Spielproblemen.",
      link: "https://www.gordonmoody.org.uk/",
    },
  ]

  return (
    <section className="py-16 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Verantwortungsvolles Spielen</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Obwohl unser Spiel keine Glücksspiel-Elemente enthält, fördern wir verantwortungsvolles Spielverhalten.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {resources.map((resource, index) => (
          <Card key={index} className="bg-muted/30 border-0">
            <CardHeader className="pb-2">
              <div className="mb-2">{resource.icon}</div>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Mehr erfahren
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Wir empfehlen, regelmäßige Pausen einzulegen und die Spielzeit zu begrenzen. Spielen sollte immer eine
          angenehme Freizeitbeschäftigung bleiben.
        </p>
      </div>
    </section>
  )
}
