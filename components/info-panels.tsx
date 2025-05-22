"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Cloud, Mountain, WheatIcon as Sheep, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function InfoPanels() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            >
              <Mountain className="h-5 w-5 mr-2 text-primary" />
            </motion.div>
            Standort
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Badge variant="outline">Alpen</Badge>
              <span className="text-sm text-muted-foreground">1.800m Höhe</span>
            </div>
            <p className="text-sm">
              Die österreichischen Alpen sind bekannt für ihre malerischen Landschaften, saftigen Wiesen und
              traditionelle Almwirtschaft. Hier leben Bergbauern seit Generationen im Einklang mit der Natur.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            >
              <Leaf className="h-5 w-5 mr-2 text-primary" />
            </motion.div>
            Ressourcen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <Leaf className="h-4 w-4 mr-2 text-green-500" />
                <span className="font-medium">Alpenkräuter</span>
              </div>
              <span className="text-muted-foreground">Heilend</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <Sheep className="h-4 w-4 mr-2 text-gray-500" />
                <span className="font-medium">Schafwolle</span>
              </div>
              <span className="text-muted-foreground">Wärmend</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <Cloud className="h-4 w-4 mr-2 text-blue-300" />
                <span className="font-medium">Wasser</span>
              </div>
              <span className="text-muted-foreground">Lebenswichtig</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                <span className="font-medium">Sonnenlicht</span>
              </div>
              <span className="text-muted-foreground">Energiespendend</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            >
              <Cloud className="h-5 w-5 mr-2 text-primary" />
            </motion.div>
            Wetter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              Das Wetter in den Alpen kann schnell umschlagen. Sonnenschein kann sich in Minuten in einen gefährlichen
              Sturm verwandeln. Ein guter Bergbauer muss die Wetterzeichen lesen können, um seine Herde zu schützen.
            </p>
            <div className="flex justify-between text-sm mt-2">
              <span>Aktuelle Bedingungen:</span>
              <div className="flex items-center">
                <Sun className="h-4 w-4 mr-1 text-yellow-500" />
                <span className="font-medium">Sonnig mit Wolken</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
