"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Disclaimer from "@/components/disclaimer"
import { useRouter } from "next/navigation"
import {
  WheatIcon as Sheep,
  Leaf,
  DogIcon as Wolf,
  Droplet,
  Scissors,
  Cloud,
  Mountain,
  Sun,
  Coins,
  Heart,
  Star,
  Trophy,
  AlertTriangle,
  Zap,
  Apple,
  Cherry,
  GrapeIcon as Goat,
  Dog,
  MouseIcon as Mushroom,
} from "lucide-react"

export default function GamePage() {
  const router = useRouter()
  const [isVerified, setIsVerified] = useState(false)
  const [knowledge, setKnowledge] = useState(25)
  const [experience, setExperience] = useState(15)
  const [root, setRoot] = useState(false)
  const [points, setPoints] = useState(0)
  const [resources, setResources] = useState(50)
  const [health, setHealth] = useState(100)
  const [result, setResult] = useState<string | null>(null)
  const [reelPositions, setReelPositions] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [showFact, setShowFact] = useState(false)
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    // Check if user has verified their age
    const verified = localStorage.getItem("game-disclaimer-accepted")
    if (verified !== "true") {
      router.push("/")
    } else {
      setIsVerified(true)
    }
  }, [router])

  const reelItems = [
    { name: "Schaf", icon: <Sheep className="h-full w-full" />, value: 10, color: "text-blue-500" },
    { name: "Kräuter", icon: <Leaf className="h-full w-full" />, value: 15, color: "text-green-500" },
    { name: "Wolf", icon: <Wolf className="h-full w-full" />, value: -20, color: "text-red-500" },
    { name: "Wasser", icon: <Droplet className="h-full w-full" />, value: 5, color: "text-cyan-500" },
    { name: "Wolle", icon: <Scissors className="h-full w-full" />, value: 8, color: "text-purple-500" },
    { name: "Sturm", icon: <Cloud className="h-full w-full" />, value: -10, color: "text-gray-500" },
    { name: "Berg", icon: <Mountain className="h-full w-full" />, value: 12, color: "text-amber-700" },
    { name: "Sonne", icon: <Sun className="h-full w-full" />, value: 7, color: "text-yellow-500" },
    { name: "Blitz", icon: <Zap className="h-full w-full" />, value: -15, color: "text-yellow-600" },
    { name: "Apfel", icon: <Apple className="h-full w-full" />, value: 6, color: "text-red-400" },
    { name: "Pilz", icon: <Mushroom className="h-full w-full" />, value: 9, color: "text-orange-500" },
    { name: "Beere", icon: <Cherry className="h-full w-full" />, value: 8, color: "text-pink-500" },
    { name: "Stern", icon: <Star className="h-full w-full" />, value: 20, color: "text-yellow-400" },
    { name: "Hund", icon: <Dog className="h-full w-full" />, value: 15, color: "text-amber-500" },
    { name: "Ziege", icon: <Goat className="h-full w-full" />, value: 12, color: "text-gray-400" },
  ]

  const facts = [
    "Die Almwirtschaft in den österreichischen Alpen hat eine jahrhundertealte Tradition. Der Almauftrieb ist oft mit festlichen Traditionen verbunden.",
    "Bergbauern in Österreich spielen eine wichtige Rolle bei der Erhaltung der alpinen Kulturlandschaft und Biodiversität.",
    "Traditionelle Schäfer nutzen spezielle Hunde, um ihre Herden zu schützen und zusammenzuhalten.",
    "Alpine Kräuter wie Arnika, Enzian und Edelweiß werden seit Generationen für medizinische Zwecke verwendet.",
    "Die Schafwolle aus den Alpen ist besonders hochwertig und wird für traditionelle Kleidung und Decken verwendet.",
    "Bergbauern müssen das Wetter genau beobachten, da plötzliche Stürme in den Bergen gefährlich werden können.",
    "Die Milch von Kühen, die auf Alpenweiden grasen, enthält mehr Omega-3-Fettsäuren als gewöhnliche Milch.",
    "Traditionelle Holzverarbeitung ist ein wichtiger Teil des Lebens in den Alpen und wird von Generation zu Generation weitergegeben.",
  ]

  const rootReels = () => {
    if (root || resources < 5) return

    setRoot(true)
    setResult(null)
    setShowFact(false)
    setResources((prev) => prev - 5)

    const rootInterval = setInterval(() => {
      setReelPositions((prev) => prev.map(() => Math.floor(Math.random() * reelItems.length)))
    }, 100)

    setTimeout(() => {
      clearInterval(rootInterval)
      const newPositions = Array(15)
        .fill(0)
        .map(() => Math.floor(Math.random() * reelItems.length))
      setReelPositions(newPositions)
      calculateResult(newPositions)
      setRoot(false)

      setCurrentFact(Math.floor(Math.random() * facts.length))
      setTimeout(() => {
        setShowFact(true)
      }, 1000)
    }, 2000)
  }

  const calculateResult = (positions: number[]) => {

    const lines = [

      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],

      [0, 5, 10],
      [1, 6, 11], 
      [2, 7, 12],
      [3, 8, 13], 
      [4, 9, 14],

      [0, 6, 12], 
      [4, 8, 12],

      [0, 6, 10],
      [4, 6, 14],
      [2, 6, 12],
    ]

    const isPomp = positions.every((pos) => pos === positions[0])

    const hasBonusSymbols = positions.filter((pos) => reelItems[pos].name === "Stern").length >= 3

    const hasWildSymbols = positions.filter((pos) => reelItems[pos].name === "Hund").length >= 1

    let pointsGained = positions.reduce((sum, pos) => sum + reelItems[pos].value, 0)

    // Бонус за джекпот
    if (isPomp) {
      pointsGained *= 3
      setResult("Win")
    }

    else if (hasBonusSymbols) {
      pointsGained *= 2
      setResult("Bonus-Symbole! Doppelte Punkte!")
    }
    // Бонус за пару
    else if (positions[0] === positions[1] || positions[1] === positions[2] || positions[0] === positions[2]) {
      pointsGained *= 1.5
      setResult("Paar! 50% Bonus!")
    }

    else if (hasWildSymbols) {
      pointsGained *= 1.2
      setResult("Wilder Hund! 20% Bonus!")
    } else {
      setResult("Weiter versuchen!")
    }

    setPoints((prev) => prev + pointsGained)

    // Обновление здоровья на основе негативных элементов (волк, шторм, молния)
    const healthImpact = positions.reduce((impact, pos) => {
      return reelItems[pos].value < 0 ? impact + reelItems[pos].value : impact
    }, 0)

    setHealth((prev) => Math.max(0, Math.min(100, prev + healthImpact)))


    setResources((prev) => prev + 2)

    // Обновление знаний и опыта
    setKnowledge((prev) => Math.min(100, prev + Math.max(1, Math.floor(pointsGained / 10))))
    setExperience((prev) => Math.min(100, prev + Math.max(1, Math.floor(pointsGained / 8))))
  }

  if (!isVerified) {
    return null
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Der Bergbauer: Schütze deine Herde
      </h1>

      <Disclaimer type="expanded" />

      <div className="mt-8">
        <Card className="overflow-hidden border-2 shadow-lg">
          <CardContent className="p-3 sm:p-4 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2 sm:gap-0">
              <div className="flex items-center space-x-2">
                <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                <span className="font-bold text-base sm:text-lg">{resources} Res.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
                <span className="font-bold text-base sm:text-lg">{points} Pkt.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                <span className="font-bold text-base sm:text-lg">Gesundheit</span>
              </div>
            </div>

            <Progress value={health} className="h-3 mb-10" />

            <div className="bg-muted rounded-lg p-2 sm:p-4 md:p-8 mb-8">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-2">
                {reelPositions.map((pos, index) => (
                  <div
                    key={index}
                    className={`w-[90px] h-[90px] sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-lg border-2 border-primary flex items-center justify-center ${
                      root ? "animate-pulse" : ""
                    }`}
                  >
                    <div className={`w-[50px] h-[50px] sm:w-10 sm:h-10 md:w-12 md:h-12 ${reelItems[pos].color}`}>
                      {reelItems[pos].icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {result && (
              <div className="text-center mb-6">
                <Badge variant="outline" className="text-lg px-6 py-3">
                  {result}
                </Badge>
              </div>
            )}

            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                disabled={root || resources < 5}
                onClick={rootReels}
                className="px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 text-base sm:text-lg md:text-xl rounded-full"
              >
                {root ? "Dreht sich..." : "Drehen (5)"}
              </Button>
            </div>

            {showFact && (
              <div className="bg-primary/10 rounded-lg p-3 sm:p-4 mb-6 border border-primary/20">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1 text-sm sm:text-base">Wusstest du schon?</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{facts[currentFact]}</p>
                  </div>
                </div>
              </div>
            )}

            <Separator className="my-6" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 mb-6">
              <Card className="bg-muted/30">
                <CardContent className="p-2 sm:p-4">
                  <div className="flex items-center space-x-2">
                    <Mountain className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h3 className="font-medium text-sm sm:text-base">Standort</h3>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs sm:text-sm">Österreichische Alpen</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-2 sm:p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h3 className="font-medium text-sm sm:text-base">Wissen</h3>
                  </div>
                  <Progress value={knowledge} className="h-2" />
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-2 sm:p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h3 className="font-medium text-sm sm:text-base">Erfahrung</h3>
                  </div>
                  <Progress value={experience} className="h-2" />
                </CardContent>
              </Card>
            </div>

            <div className="text-xs sm:text-sm text-muted-foreground bg-yellow-50 dark:bg-yellow-900/20 p-3 sm:p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="mb-1 font-medium text-yellow-800 dark:text-yellow-300">Hinweis:</p>
                  <p>
                    Dies ist eine kostenlose Bildungsplattform ohne realen Wert. Alle Inhalte sind virtuell und dienen
                    ausschließlich Unterhaltungs- und Bildungszwecken.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-6">
          <Card>
            <CardContent className="p-3 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Spielanleitung</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-start space-x-2">
                  <Sheep className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5" />
                  <span>Sammle Schafe, um deine Herde zu vergrößern (+10 Punkte)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                  <span>Finde Kräuter für Heilmittel und Nahrung (+15 Punkte)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Wolf className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-0.5" />
                  <span>Hüte dich vor Wölfen, die deine Herde bedrohen (-20 Punkte)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Cloud className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mt-0.5" />
                  <span>Achte auf Stürme, die deine Gesundheit beeinträchtigen (-10 Punkte)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Über das Spiel</h3>
              <p className="mb-2 sm:mb-4 text-xs sm:text-sm">
                "Der Bergbauer: Schütze deine Herde" ist eine Bildungsplattform, die dir das traditionelle Leben eines
                österreichischen Bergbauern näherbringt. Während du diese interaktive Erfahrung nutzt, lernst du über
                alpine Landwirtschaft, Tierhaltung und die Herausforderungen des Lebens in den Bergen.
              </p>
              <p className="text-xs sm:text-sm">
                Diese Plattform ist ausschließlich zu Unterhaltungs- und Bildungszwecken konzipiert. Sie ist vollständig
                kostenlos, erfordert keine Geldeinsätze und bietet keine Auszahlungen. Alle Inhalte sind virtuell und
                haben keinen realen Wert.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
