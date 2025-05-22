import { WheatIcon as Sheep, Shield, Mountain } from "lucide-react"

export default function GameDescription() {
  return (
    <section id="game-description" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Das Leben eines Bergbauern</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecke das traditionelle Leben eines österreichischen Bergbauern und seine täglichen Herausforderungen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 flex justify-center">
              <Sheep className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Schütze deine Herde</h3>
            <p className="text-muted-foreground">
              Als Bergbauer ist es deine wichtigste Aufgabe, deine Schafherde vor Gefahren wie Wölfen, Unwettern und
              Krankheiten zu schützen. Nur eine gesunde Herde sichert dein Überleben in den Bergen.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 flex justify-center">
              <Mountain className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Sammle Ressourcen</h3>
            <p className="text-muted-foreground">
              In den Alpen findest du wertvolle Ressourcen wie Heilkräuter, frisches Wasser und Nahrung für deine Tiere.
              Sammle diese Ressourcen, um deine Herde gesund zu halten und den harten Winter zu überstehen.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 flex justify-center">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Meistere Herausforderungen</h3>
            <p className="text-muted-foreground">
              Das Leben in den Bergen ist voller Herausforderungen. Plötzliche Wetterumschwünge, Raubtiere und
              schwieriges Gelände erfordern deine ständige Aufmerksamkeit und schnelle Reaktionen.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-muted/30 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Die Tradition der Almwirtschaft</h3>
          <p className="text-lg mb-4">
            Die Almwirtschaft in den österreichischen Alpen hat eine jahrhundertealte Tradition. Im Sommer treiben die
            Bauern ihr Vieh auf die höher gelegenen Almen, wo die Tiere frisches Gras und Kräuter finden.
          </p>
          <p className="text-lg">
            Diese traditionelle Form der Landwirtschaft trägt nicht nur zur Erhaltung der alpinen Kulturlandschaft bei,
            sondern liefert auch hochwertige Produkte wie Milch, Käse und Fleisch. In unserem Spiel kannst du diese
            Tradition hautnah erleben.
          </p>
        </div>
      </div>
    </section>
  )
}
