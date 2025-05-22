import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sword, Book, Flag } from "lucide-react"

export default function HeroTools() {
  const tools = [
    {
      icon: <Sword className="h-10 w-10 text-primary" />,
      name: "Tiroler Säbel",
      description:
        "Eine traditionelle Waffe der Tiroler Schützen, die Hofer im Kampf gegen die bayerischen und französischen Truppen führte.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      name: "Familienwappen",
      description:
        "Das Wappen der Familie Hofer, das zum Symbol des Widerstands wurde und auf Fahnen und Bannern zu sehen war.",
    },
    {
      icon: <Book className="h-10 w-10 text-primary" />,
      name: "Tagebuch",
      description:
        "Hofers persönliches Tagebuch, in dem er seine Gedanken, Strategien und Erlebnisse während des Aufstands festhielt.",
    },
    {
      icon: <Flag className="h-10 w-10 text-primary" />,
      name: "Tiroler Adlerfahne",
      description:
        "Die rot-weiße Fahne mit dem Tiroler Adler, die zum Symbol des Freiheitskampfes wurde und von Hofers Truppen getragen wurde.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Die Werkzeuge des Helden</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecke die historischen Gegenstände, die Andreas Hofer im Kampf für die Freiheit Tirols begleiteten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-muted-foreground">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
