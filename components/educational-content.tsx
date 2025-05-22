"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Leaf, WheatIcon as Sheep, Mountain } from "lucide-react"
import { motion } from "framer-motion"

export default function EducationalContent() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          >
            <BookOpen className="h-5 w-5 mr-2 text-primary" />
          </motion.div>
          Wissenswertes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1 flex items-center">
              <Mountain className="h-4 w-4 mr-2 text-amber-700" />
              Almwirtschaft
            </h3>
            <p className="text-sm text-muted-foreground">
              Die Almwirtschaft ist eine traditionelle Form der Landwirtschaft in den Alpen. Im Sommer werden die Tiere
              auf höher gelegene Weiden (Almen) getrieben, wo sie frisches Gras und Kräuter finden. Diese Praxis hat
              nicht nur wirtschaftliche, sondern auch kulturelle Bedeutung.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-1 flex items-center">
              <Leaf className="h-4 w-4 mr-2 text-green-600" />
              Alpenkräuter
            </h3>
            <p className="text-sm text-muted-foreground">
              In den österreichischen Alpen wachsen zahlreiche Heilkräuter wie Arnika, Enzian und Edelweiß. Diese
              Pflanzen werden traditionell für medizinische Zwecke, zur Herstellung von Schnäpsen oder als Gewürze
              verwendet.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-1 flex items-center">
              <Sheep className="h-4 w-4 mr-2 text-gray-600" />
              Schafzucht
            </h3>
            <p className="text-sm text-muted-foreground">
              Schafe sind perfekt an das Leben in den Bergen angepasst. Sie liefern Wolle, Milch und Fleisch und können
              auch in schwierigem Gelände grasen. Die traditionellen Schafrassen der Alpen sind besonders robust und
              widerstandsfähig gegen raue Wetterbedingungen.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
