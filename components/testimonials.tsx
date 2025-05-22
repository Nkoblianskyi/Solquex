import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Wagner",
      avatar: "/placeholder.svg?height=100&width=100&query=middle aged man with glasses",
      rating: 5,
      text: "Ein fantastisches Spiel, das mir geholfen hat, mehr über die österreichische Geschichte zu lernen. Die Grafik ist beeindruckend und die Spielmechanik macht süchtig!",
    },
    {
      name: "Julia Berger",
      avatar: "/placeholder.svg?height=100&width=100&query=young woman with brown hair",
      rating: 5,
      text: "Ich bin begeistert von der Detailtreue und den historischen Fakten. Das Spiel ist nicht nur unterhaltsam, sondern auch sehr lehrreich. Absolute Empfehlung!",
    },
    {
      name: "Thomas Huber",
      avatar: "/placeholder.svg?height=100&width=100&query=older man with beard",
      rating: 4,
      text: "Als Geschichtslehrer finde ich dieses Spiel hervorragend für meine Schüler. Es vermittelt historische Ereignisse auf eine spannende und zugängliche Weise.",
    },
    {
      name: "Sophie Maier",
      avatar: "/placeholder.svg?height=100&width=100&query=young woman with blonde hair",
      rating: 5,
      text: "Die verschiedenen Umgebungen sind wunderschön gestaltet und die Charaktere haben Tiefe. Ich habe viel über österreichische Kultur gelernt!",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Was unsere Spieler sagen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Erfahrungen und Meinungen von Spielern, die bereits in die Welt des österreichischen Helden eingetaucht
            sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
