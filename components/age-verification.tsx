"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if age verification has been completed
    const isVerified = localStorage.getItem("age-verified")

    if (!isVerified) {
      setShowModal(true)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true")
    setShowModal(false)
  }

  const handleDeny = () => {
    router.push("/denied")
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-2 border-primary shadow-lg">
        <CardHeader className="bg-primary/10 border-b border-primary/30 relative">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-red-600 dark:text-red-500 text-xl font-bold">18+</span>
            </div>
          </div>
          <CardTitle className="text-center text-primary">Altersüberprüfung</CardTitle>
          <CardDescription className="text-center">
            Diese Website ist nur für Benutzer ab 18 Jahren zugänglich.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-md border-l-4 border-yellow-400 dark:border-yellow-600">
            Durch Klicken auf "Ich bin über 18" bestätigen Sie, dass Sie mindestens 18 Jahre alt sind und mit unseren
            Nutzungsbedingungen und Datenschutzrichtlinien einverstanden sind.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 bg-gray-50 dark:bg-gray-900/50 pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleDeny}
            className="w-full sm:w-auto border-red-300 hover:bg-red-50 hover:text-red-600 dark:border-red-800 dark:hover:bg-red-900/20 dark:hover:text-red-400"
          >
            Ich bin unter 18
          </Button>
          <Button
            onClick={handleVerify}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
          >
            Ich bin über 18
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
