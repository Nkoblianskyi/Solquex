"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GameDisclaimerModal from "./game-disclaimer-modal"
import { WheatIcon as Sheep, Leaf, Mountain } from "lucide-react"

export default function GamePreview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlayClick = () => {
    setIsModalOpen(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Spielvorschau</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Erlebe das spannende Gameplay unseres alpinen Abenteuers
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Der Bergbauer und seine Herde</h3>
                <p className="text-lg text-muted-foreground">
                  In dieser Bildungssimulation übernimmst du die Rolle eines österreichischen Bergbauern, der seine
                  Schafherde hütet, sie vor Gefahren beschützt und in den Alpen Ressourcen sammelt.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-muted/30 rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sheep className="h-12 w-12 text-blue-500" />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Herde verwalten</h4>
                  <p className="text-sm text-muted-foreground">
                    Kümmere dich um deine Schafherde, führe sie zu saftigen Weiden und schütze sie vor Gefahren der
                    Bergwelt.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf className="h-12 w-12 text-green-500" />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Ressourcen sammeln</h4>
                  <p className="text-sm text-muted-foreground">
                    Sammle Heilkräuter, Beeren und andere wertvolle Ressourcen, die in den Alpen wachsen, um deine
                    Familie zu versorgen.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Mountain className="h-12 w-12 text-amber-700" />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Jahreszeiten meistern</h4>
                  <p className="text-sm text-muted-foreground">
                    Passe deine Strategie an die wechselnden Jahreszeiten an und bereite dich auf die Herausforderungen
                    des alpinen Klimas vor.
                  </p>
                </div>
              </div>

              <div className="relative h-64 bg-gradient-to-b from-blue-100 to-green-100 dark:from-blue-950 dark:to-green-950 rounded-lg overflow-hidden mb-8">
                <div className="absolute inset-0">
                  {/* Sky */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100 dark:from-blue-900 dark:to-blue-800 opacity-50" />

                  {/* Sun */}
                  <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-yellow-400 dark:bg-yellow-500" />

                  {/* Mountains */}
                  <div className="absolute bottom-1/3 left-0 right-0">
                    <div className="relative h-40">
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
                    </div>
                  </div>

                  {/* Meadow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-500 dark:bg-green-700" />

                  {/* Farmer */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-8 h-12 bg-brown-500 dark:bg-brown-700 rounded-t-full" />
                      <div className="w-16 h-20 bg-blue-600 dark:bg-blue-800 rounded-lg mt-1" />
                      <div className="absolute top-3 left-1 w-6 h-6 rounded-full bg-beige-200 dark:bg-beige-300" />
                    </div>
                  </div>

                  {/* Sheep scattered around */}
                  <div className="absolute bottom-4 left-1/6">
                    <Sheep className="h-6 w-6 text-gray-200" />
                  </div>
                  <div className="absolute bottom-6 left-1/3">
                    <Sheep className="h-5 w-5 text-gray-200" />
                  </div>
                  <div className="absolute bottom-5 left-1/2">
                    <Sheep className="h-6 w-6 text-gray-200" />
                  </div>
                  <div className="absolute bottom-7 left-2/3">
                    <Sheep className="h-5 w-5 text-gray-200" />
                  </div>
                  <div className="absolute bottom-5 right-1/6">
                    <Sheep className="h-6 w-6 text-gray-200" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button size="lg" onClick={handlePlayClick} className="px-10 py-6 text-xl rounded-full relative">
                  <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    18+
                  </span>
                  Jetzt Spielen
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Sheep className="h-5 w-5 mr-2 text-primary" />
                  Entdecke Elemente
                </h3>
                <p className="text-muted-foreground">
                  Entdecke verschiedene alpine Elemente wie Schafe, Kräuter, Werkzeuge und mehr in dieser interaktiven
                  Bildungserfahrung.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-primary" />
                  Sammle Ressourcen
                </h3>
                <p className="text-muted-foreground">
                  Jede erfolgreiche Kombination bringt dir wertvolle Ressourcen wie Wolle, Milch, Kräuter oder
                  Handwerksmaterialien.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Mountain className="h-5 w-5 mr-2 text-primary" />
                  Lerne und Gewinne
                </h3>
                <p className="text-muted-foreground">
                  Mit jedem Dreh lernst du interessante Fakten über das Leben in den Alpen und sammelst Punkte für deine
                  Bauernhof-Entwicklung.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Модальное окно с дисклеймером */}
      <GameDisclaimerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
