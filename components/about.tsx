"use client"

import { motion } from "framer-motion"
import { Mountain, WheatIcon as Sheep, Leaf } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Über das Spiel</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Entdecke das traditionelle Leben eines österreichischen Bergbauern
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border">
          <div className="absolute inset-0">
            {/* Sky */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100 dark:from-blue-900 dark:to-blue-800 opacity-50" />

            {/* Sun */}
            <motion.div
              className="absolute top-10 right-10 w-16 h-16 rounded-full bg-yellow-400 dark:bg-yellow-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
            />

            {/* Mountains */}
            <div className="absolute bottom-1/3 left-0 right-0">
              <motion.div
                className="relative h-40"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
              >
                <div
                  className="absolute bottom-0 left-0 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[150px] border-l-transparent border-r-transparent border-b-green-700 dark:border-b-green-900"
                  style={{ left: "10%" }}
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-0 border-l-[120px] border-r-[120px] border-b-[180px] border-l-transparent border-r-transparent border-b-green-800 dark:border-b-green-950"
                  style={{ left: "30%" }}
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[120px] border-l-transparent border-r-transparent border-b-green-600 dark:border-b-green-800"
                  style={{ left: "60%" }}
                />
              </motion.div>
            </div>

            {/* Meadow */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-500 dark:bg-green-700" />

            {/* Farmer */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ x: [0, 20, 0, -20, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="w-8 h-12 bg-brown-500 dark:bg-brown-700 rounded-t-full" />
                <div className="w-16 h-20 bg-blue-600 dark:bg-blue-800 rounded-lg mt-1" />
                <div className="absolute top-3 left-1 w-6 h-6 rounded-full bg-beige-200 dark:bg-beige-300" />
              </div>
            </motion.div>

            {/* Sheep */}
            <motion.div
              className="absolute bottom-6 left-10"
              animate={{ x: [0, 30, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut" }}
            >
              <Sheep className="h-10 w-10 text-gray-200 dark:text-gray-300" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-20"
              animate={{ x: [0, -20, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
            >
              <Sheep className="h-8 w-8 text-gray-200 dark:text-gray-300" />
            </motion.div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <Mountain className="h-6 w-6 mr-2 text-primary" />
              Das Leben in den Bergen
            </h3>
            <p className="text-lg text-muted-foreground">
              In den malerischen österreichischen Alpen führen Bergbauern seit Jahrhunderten ein traditionelles Leben.
              Sie hüten ihre Herden, sammeln Nahrung und trotzen den Herausforderungen der Natur. Dieses Spiel lässt
              dich in diese faszinierende Welt eintauchen.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <Sheep className="h-6 w-6 mr-2 text-primary" />
              Deine Aufgabe
            </h3>
            <p className="text-lg text-muted-foreground">
              Als Bergbauer musst du deine Schafherde vor Gefahren schützen und gleichzeitig wertvolle Ressourcen in den
              Bergen sammeln. Drehe am Glücksrad, um verschiedene Elemente zu kombinieren und Punkte zu sammeln. Jede
              erfolgreiche Kombination bringt dir Wissen über das traditionelle Bauernleben in den Alpen.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              <Leaf className="h-6 w-6 mr-2 text-primary" />
              Bildungswert
            </h3>
            <p className="text-lg text-muted-foreground">
              Während du spielst, lernst du über alpine Landwirtschaft, traditionelle Werkzeuge, lokale Pflanzen und
              Tiere sowie die kulturellen Bräuche der österreichischen Bergregionen. Ein unterhaltsames Erlebnis mit
              echtem Bildungswert!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
