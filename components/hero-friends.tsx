import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HeroFriends() {
  const friends = [
    {
      name: "Josef Speckbacher",
      role: "Der Feuerteufel",
      description:
        "Ein enger Verbündeter Hofers und brillanter Taktiker, der für seine Guerilla-Kriegsführung bekannt war.",
      image: "/josef-speckbacher.png",
    },
    {
      name: "Joachim Haspinger",
      role: "Der Kapuzinermönch",
      description:
        "Ein Kapuzinermönch, der trotz seines geistlichen Standes zu den Waffen griff und an Hofers Seite kämpfte.",
      image: "/joachim-haspinger-fighter.png",
    },
    {
      name: "Peter Mayr",
      role: "Der Wirt zu Mahr",
      description:
        "Ein Gastwirt und Freund Hofers, der eine wichtige Rolle bei der Organisation des Widerstands spielte.",
      image: "/peter-mayr-resistance.png",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Hofers Verbündete</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Die mutigen Mitstreiter, die an der Seite des Tiroler Freiheitskämpfers für die Unabhängigkeit kämpften
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {friends.map((friend, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-64 w-full">
                <Image src={friend.image || "/placeholder.svg"} alt={friend.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{friend.name}</h3>
                <p className="text-primary font-medium mb-3">{friend.role}</p>
                <p className="text-muted-foreground">{friend.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
