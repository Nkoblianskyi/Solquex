import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Users, AlertTriangle, Heart } from "lucide-react"

export default function SafeGamingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Verantwortungsvolles Spielen</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground text-center">
          Obwohl unser Spiel keine Glücksspiel-Elemente enthält und kein echtes Geld involviert ist, fördern wir dennoch
          verantwortungsvolles Spielverhalten und gesunde Spielgewohnheiten.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-primary" />
              <CardTitle>Zeitmanagement</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Legen Sie feste Zeiten für das Spielen fest</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Machen Sie regelmäßige Pausen</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Achten Sie auf eine ausgewogene Freizeitgestaltung</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-primary" />
              <CardTitle>Gesunde Spielgewohnheiten</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span>Spielen Sie zur Unterhaltung, nicht als Flucht vor Problemen</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span>Achten Sie auf eine ergonomische Sitzposition</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span>Trinken Sie ausreichend Wasser während des Spielens</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 max-w-3xl mx-auto mb-12">
        <div className="flex items-start space-x-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
          <h2 className="text-xl font-bold">Wichtiger Hinweis</h2>
        </div>
        <p className="mb-4">
          Unser Spiel "Der Bergbauer: Schütze deine Herde" ist ein Bildungsspiel ohne Glücksspiel-Elemente. Es gibt
          keine Möglichkeit, echtes Geld zu gewinnen oder zu verlieren.
        </p>
        <p>
          Dennoch möchten wir betonen, dass übermäßiges Spielen zu Problemen führen kann, wie Vernachlässigung sozialer
          Kontakte, Schlafmangel oder Beeinträchtigung der Arbeit oder des Studiums.
        </p>
      </div>
    
    </div>
  )
}
