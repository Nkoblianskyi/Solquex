"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1000)
  }

  return (
    <section className="py-16 bg-muted/30">
      <Card className="max-w-xl mx-auto border-0 bg-transparent shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Bleiben Sie auf dem Laufenden</CardTitle>
          <CardDescription className="text-center">
            Abonnieren Sie unseren Newsletter, um Updates, neue Funktionen und exklusive Inhalte zu erhalten.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-500 justify-center">
              <Check className="h-5 w-5" />
              <p>Vielen Dank für Ihre Anmeldung! Wir haben Ihnen eine Bestätigungs-E-Mail gesendet.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Wird gesendet..." : "Abonnieren"}
              </Button>
            </form>
          )}
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Durch die Anmeldung stimmen Sie unserer Datenschutzrichtlinie zu. Sie können sich jederzeit abmelden.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
