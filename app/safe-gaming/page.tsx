import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Coffee, Brain, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function SafeGaming() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-xs sm:text-sm text-muted-foreground bg-yellow-50 dark:bg-yellow-900/20 p-3 sm:p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="mb-1 font-medium text-yellow-800 dark:text-yellow-300">Hinweis:</p>
              <p>
                Dies ist eine kostenlose soziale Plattform ohne realen Wert. Alle Inhalte sind virtuell und dienen
                ausschließlich Unterhaltungs- und sozialen Zwecken.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Soziales Spiel für Freizeit und Unterhaltung</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie ein unterhaltsames Spielerlebnis, das Entspannung mit sozialer Interaktion und persönlicher
            Entwicklung verbindet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: <BookOpen className="h-10 w-10 text-primary" />,
              title: "Bildungswert",
              description:
                "Lernen Sie spielerisch über alpine Traditionen, Landwirtschaft und die Kultur der österreichischen Bergregionen.",
            },
            {
              icon: <Coffee className="h-10 w-10 text-primary" />,
              title: "Entspannung",
              description:
                "Genießen Sie eine entspannende Spielerfahrung, die Ihnen hilft, dem Alltag zu entfliehen und neue Energie zu tanken.",
            },
            {
              icon: <Brain className="h-10 w-10 text-primary" />,
              title: "Persönliche Entwicklung",
              description:
                "Fördern Sie strategisches Denken, Ressourcenmanagement und Entscheidungsfindung durch unterhaltsame Herausforderungen.",
            },
          ].map((resource, index) => (
            <Card key={index} className="bg-muted/30 border">
              <CardHeader className="pb-2">
                <div className="mb-2">{resource.icon}</div>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Unser Spiel wurde entwickelt, um Unterhaltung mit Bildungswert zu verbinden. Es bietet eine sichere, soziale
            Umgebung, in der Sie neue Kenntnisse erwerben und gleichzeitig Spaß haben können.
          </p>

          <Link href="/game" className="text-primary hover:underline font-medium">
            Jetzt spielen und entdecken
          </Link>
        </div>
      </div>
    </section>
  )
}
