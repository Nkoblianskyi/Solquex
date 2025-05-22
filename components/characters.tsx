import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Characters() {
  const characters = [
    {
      name: "Andreas Hofer",
      role: "Tiroler Freiheitskämpfer",
      description: "Ein mutiger Anführer im Kampf gegen die bayerische und französische Besatzung Tirols.",
      image:
        "/placeholder.svg?height=400&width=300&query=Andreas Hofer Tyrolean freedom fighter with beard and traditional hat",
    },
    {
      name: "Prinz Eugen",
      role: "Feldherr und Staatsmann",
      description: "Ein brillanter Stratege, der entscheidend zur Macht des Habsburgerreiches beitrug.",
      image: "/placeholder.svg?height=400&width=300&query=Prince Eugene of Savoy in military uniform and white wig",
    },
    {
      name: "Kaiserin Elisabeth",
      role: "Die geliebte Sisi",
      description: "Die charismatische Kaiserin, die für ihre Schönheit und ihren Freiheitsdrang bekannt war.",
      image:
        "/placeholder.svg?height=400&width=300&query=Empress Elisabeth Sisi of Austria with long hair and elegant dress",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Spielcharaktere</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Lerne die historischen Persönlichkeiten kennen, die in unserem Spiel zum Leben erweckt werden.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-80 w-full">
                <Image src={character.image || "/placeholder.svg"} alt={character.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{character.name}</h3>
                <p className="text-primary font-medium mb-3">{character.role}</p>
                <p className="text-muted-foreground">{character.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
