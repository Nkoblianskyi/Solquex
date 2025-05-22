"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GameDisclaimerModal from "./game-disclaimer-modal"
import { WheatIcon as Sheep, Mountain, Sun } from "lucide-react"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlayClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
          Bildungsspiel <span className="text-red-600 dark:text-red-500 font-bold">18+</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Der Bergbauer: Schütze deine Herde
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Erlebe das Leben eines österreichischen Bergbauern, der seine Schafherde vor Gefahren schützt und wertvolle
          Ressourcen in den Alpen sammelt.
        </p>

        {/* Иллюстрация с иконками */}
        <div className="relative h-64 mb-10 overflow-hidden rounded-xl bg-gradient-to-b from-blue-100 to-green-100 dark:from-blue-950 dark:to-green-950 border">
          <div className="absolute inset-0">
            <div className="absolute top-6 left-1/4 text-blue-600 dark:text-blue-400">
              <Sun className="h-12 w-12" />
            </div>

            <div className="absolute top-10 right-1/4 text-yellow-500">
              <Sun className="h-16 w-16" />
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-32 bg-green-600 dark:bg-green-800"
              style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
            />

            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-amber-800 dark:text-amber-600">
              <Mountain className="h-24 w-24" />
            </div>

            <div className="absolute bottom-8 left-1/4 text-gray-200 dark:text-gray-300">
              <Sheep className="h-10 w-10" />
            </div>

            <div className="absolute bottom-8 right-1/4 text-gray-200 dark:text-gray-300">
              <Sheep className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg" onClick={handlePlayClick}>
            Jetzt Spielen
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link href="#game-description">Mehr erfahren</Link>
          </Button>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          Nur für Bildungs- und Unterhaltungszwecke. Vollständig kostenlos. Alle Inhalte sind virtuell. Ab 18 Jahren.
        </div>
      </div>

      {/* Модальное окно с дисклеймером */}
      <GameDisclaimerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
