"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function GameInterface() {
  const [knowledge, setKnowledge] = useState(25)
  const [experience, setExperience] = useState(15)
  const [spinning, setSpinning] = useState(false)
  const [points, setPoints] = useState(0)
  const [resources, setResources] = useState(50)
  const [health, setHealth] = useState(100)
  const [result, setResult] = useState<string | null>(null)
  const [reelPositions, setReelPositions] = useState([0, 0, 0])
  const [showFact, setShowFact] = useState(false)
  const [currentFact, setCurrentFact] = useState(0)

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

  const spinReels = () => {
    if (spinning || resources < 5) return

    setSpinning(true)
    setResult(null)
    setShowFact(false)
    setResources((prev) => prev - 5)

    // Simulate spinning animation
    const spinInterval = setInterval(() => {
      setReelPositions((prev) => prev.map(() => Math.floor(Math.random() * reelItems.length)))
    }, 100)

    // Stop spinning after 2 seconds
    setTimeout(() => {
      clearInterval(spinInterval)
      const newPositions = reelPositions.map(() => Math.floor(Math.random() * reelItems.length))
      setReelPositions(newPositions)
      calculateResult(newPositions)
      setSpinning(false)

      // Show educational fact
      setCurrentFact(Math.floor(Math.random() * facts.length))
      setTimeout(() => {
        setShowFact(true)
      }, 1000)
    }, 2000)
  }

  const calculateResult = (positions: number[]) => {
    // Check if all positions are the same (jackpot)
    const isJackpot = positions.every((pos) => pos === positions[0])

    // Calculate points based on the items that appeared
    let pointsGained = positions.reduce((sum, pos) => sum + reelItems[pos].value, 0)

    // Bonus for jackpot
    if (isJackpot) {
      pointsGained *= 3
      setResult("Jackpot! Dreifache Punkte!")
    } else if (positions[0] === positions[1] || positions[1] === positions[2] || positions[0] === positions[2]) {
      // Bonus for pair
      pointsGained *= 1.5
      setResult("Paar! 50% Bonus!")
    } else {
      setResult("Weiter versuchen!")
    }

    setPoints((prev) => prev + pointsGained)

    // Update health based on negative items (wolf, storm)
    const healthImpact = positions.reduce((impact, pos) => {
      return reelItems[pos].value < 0 ? impact + reelItems[pos].value : impact
    }, 0)

    setHealth((prev) => Math.max(0, Math.min(100, prev + healthImpact)))

    // Add some resources regardless of outcome
    setResources((prev) => prev + 2)

    // Update knowledge and experience
    setKnowledge((prev) => Math.min(100, prev + Math.max(1, Math.floor(pointsGained / 10))))
    setExperience((prev) => Math.min(100, prev + Math.max(1, Math.floor(pointsGained / 8))))
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-2 shadow-lg">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Coins className="h-6 w-6 text-yellow-500" />
              <span className="font-bold text-lg">{resources} Ressourcen</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-lg">{points} Punkte</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="font-bold text-lg">Gesundheit</span>
            </div>
          </div>

          <Progress value={health} className="h-3 mb-10" />

          <div className="bg-muted rounded-lg p-8 mb-8">
            <div className="flex justify-center space-x-6">
              {reelPositions.map((pos, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "w-32 h-32 bg-white rounded-lg border-4 border-primary flex items-center justify-center",
                    spinning ? "animate-pulse" : "",
                  )}
                  initial={{ rotateX: 0 }}
                  animate={spinning ? { rotateX: [0, 360, 720, 1080, 1440, 1800] } : {}}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <div className={cn("w-20 h-20", reelItems[pos].color)}>{reelItems[pos].icon}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {result && (
            <motion.div
              className="text-center mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="text-lg px-6 py-3">
                {result}
              </Badge>
            </motion.div>
          )}

          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              disabled={spinning || resources < 5}
              onClick={spinReels}
              className="px-10 py-8 text-xl rounded-full"
            >
              {spinning ? "Dreht sich..." : "Drehen (5 Ressourcen)"}
            </Button>
          </div>

          {showFact && (
            <motion.div
              className="bg-primary/10 rounded-lg p-4 mb-6 border border-primary/20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start space-x-3">
                <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Wusstest du schon?</h3>
                  <p className="text-muted-foreground">{facts[currentFact]}</p>
                </div>
              </div>
            </motion.div>
          )}

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Mountain className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Standort</h3>
                </div>
                <p className="mt-1 text-muted-foreground">Österreichische Alpen</p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Wissen</h3>
                </div>
                <Progress value={knowledge} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Star className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Erfahrung</h3>
                </div>
                <Progress value={experience} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <div className="text-sm text-muted-foreground bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
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
    </div>
  )
}
