"use client"

import { Card, CardContent } from "@/components/ui/card"
import { StarIcon as StaffIcon, Scissors, BackpackIcon, Dog, GrapeIcon as GoatIcon, BirdIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function ToolsPreview() {
  const tools = [
    {
      name: "Alpenstab",
      description:
        "Ein traditioneller Wanderstab, der beim Klettern in den Bergen hilft und auch zur Führung der Herde verwendet wird.",
      icon: <StaffIcon className="h-16 w-16 text-primary" />,
    },
    {
      name: "Sichel",
      description:
        "Ein unverzichtbares Werkzeug zum Ernten von Kräutern, Gras und anderen Pflanzen in den Bergregionen.",
      icon: <Scissors className="h-16 w-16 text-primary" />,
    },
    {
      name: "Hirtentasche",
      description:
        "Eine robuste Ledertasche, in der der Bauer seine gesammelten Kräuter, Nahrungsmittel und kleine Werkzeuge aufbewahrt.",
      icon: <BackpackIcon className="h-16 w-16 text-primary" />,
    },
  ]

  const companions = [
    {
      name: "Schäferhund Alwin",
      description:
        "Ein treuer Begleiter, der dem Bauern hilft, die Schafherde zusammenzuhalten und vor Raubtieren zu schützen.",
      icon: <Dog className="h-16 w-16 text-primary" />,
    },
    {
      name: "Bergziege Heidi",
      description:
        "Eine kluge Ziege, die den Weg durch schwieriges Gelände findet und dem Bauern bei der Navigation in den Bergen hilft.",
      icon: <GoatIcon className="h-16 w-16 text-primary" />,
    },
    {
      name: "Adler Konrad",
      description:
        "Ein majestätischer Adler, der über die Berge fliegt und den Bauern vor nahenden Gefahren oder Wetterumschwüngen warnt.",
      icon: <BirdIcon className="h-16 w-16 text-primary" />,
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Werkzeuge & Gefährten des Bergbauern</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecke die wichtigsten Hilfsmittel und treuen Begleiter, die dem Bergbauern bei seiner täglichen Arbeit
            helfen
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Werkzeuge</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className={`${index % 2 === 0 ? "md:translate-y-6" : ""}`}
                animate={{
                  y: [0, index % 2 === 0 ? -8 : 8, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3 + index,
                  ease: "easeInOut",
                }}
              >
                <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center text-center h-full">
                    <div className="mb-3 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      {tool.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                    <p className="text-muted-foreground text-sm">{tool.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Gefährten</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companions.map((companion, index) => (
              <motion.div
                key={index}
                className={`${index % 2 === 0 ? "" : "md:translate-y-6"}`}
                animate={{
                  y: [0, index % 2 === 0 ? 8 : -8, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4 + index,
                  ease: "easeInOut",
                }}
              >
                <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center text-center h-full">
                    <div className="mb-3 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      {companion.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{companion.name}</h3>
                    <p className="text-muted-foreground text-sm">{companion.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
