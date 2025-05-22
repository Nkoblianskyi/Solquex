"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

interface GameDisclaimerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GameDisclaimerModal({ isOpen, onClose }: GameDisclaimerModalProps) {
  const router = useRouter()

  const handleAccept = () => {
    // Store in localStorage that user has accepted the disclaimer
    localStorage.setItem("game-disclaimer-accepted", "true")
    onClose()
    router.push("/game")
  }

  const handleDecline = () => {
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/20">
            <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <DialogTitle className="text-center text-xl mt-4">Wichtiger Hinweis</DialogTitle>
          <DialogDescription className="text-center">
            Bitte lesen Sie diese Informationen, bevor Sie mit dem Spiel beginnen
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-lg border p-4 bg-muted/30">
            <h3 className="font-bold mb-2">Dies ist eine kostenlose soziale Plattform:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Dies ist eine virtuelle Lernumgebung ohne realen Wert</li>
              <li>Vollständig kostenlos ohne Geldeinsätze</li>
              <li>Keine Gewinne oder Auszahlungen mit realem Wert</li>
              <li>Alle Inhalte sind virtuell und dienen ausschließlich Unterhaltungs- und sozialen Zwecken</li>
            </ul>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              Dieses Spiel ist für Benutzer ab 18 Jahren konzipiert. Durch Klicken auf "Ich bin über 18 und akzeptiere"
              bestätigen Sie, dass Sie mindestens 18 Jahre alt sind und mit unseren Nutzungsbedingungen einverstanden
              sind.
            </p>
          </div>

          <div className="text-sm flex flex-wrap gap-3">
            <Link href="/terms" className="text-primary hover:underline">
              Nutzungsbedingungen
            </Link>
            <Link href="/privacy-policy" className="text-primary hover:underline">
              Datenschutzrichtlinie
            </Link>
            <Link href="/disclaimer" className="text-primary hover:underline">
              Vollständiger Haftungsausschluss
            </Link>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleDecline} className="sm:w-auto w-full">
            Abbrechen
          </Button>
          <Button onClick={handleAccept} className="sm:w-auto w-full">
            Ich bin über 18 und akzeptiere
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
