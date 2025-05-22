import { AlertTriangle, Info } from "lucide-react"
import Link from "next/link"

interface DisclaimerProps {
  type?: "main" | "expanded" | "full"
}

export default function Disclaimer({ type = "main" }: DisclaimerProps) {
  if (type === "main") {
    return (
      <div className="bg-muted/50 border rounded-lg p-4 text-sm text-center">
        <p className="font-medium">
          Wichtige Mitteilung: Dies ist ein kostenloses soziales Spiel ausschließlich zu Unterhaltungszwecken. Ohne
          echtes Geld. Ohne Preise. Für Benutzer ab 18 Jahren.
        </p>
      </div>
    )
  }

  if (type === "expanded") {
    return (
      <div className="bg-muted/50 border rounded-lg p-6 text-sm">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-3">Dies ist eine kostenlose soziale Plattform:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dies ist ein virtuelles Spiel ohne realen Wert</li>
              <li>Es ist vollständig kostenlos und erfordert keine Geldeinsätze</li>
              <li>Es gibt keine Gewinne, Preise oder Boni mit realem Wert</li>
              <li>Alle Inhalte und Ressourcen sind virtuell und haben keinen realen Wert</li>
              <li>Ausschließlich zu Unterhaltungs- und Bildungszwecken</li>
              <li>Für Benutzer ab 18 Jahren bestimmt</li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/disclaimer" className="text-primary hover:underline">
                Vollständiger Haftungsausschluss
              </Link>
              <Link href="/terms" className="text-primary hover:underline">
                Nutzungsbedingungen
              </Link>
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Datenschutzrichtlinie
              </Link>
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie-Richtlinie
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "full") {
    return (
      <div>
        <div className="flex items-start space-x-3 mb-4">
          <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <h2 className="text-2xl font-bold">Haftungsausschluss</h2>
        </div>

        <p>
          "Der Bergbauer: Schütze deine Herde" ist ein kostenloses soziales Spiel, das ausschließlich zu Unterhaltungs-
          und Bildungszwecken entwickelt wurde. Es handelt sich um eine virtuelle Plattform ohne realen Wert und bietet
          keine Möglichkeit, echtes Geld zu gewinnen oder zu verlieren.
        </p>

        <p className="mt-4">Wir möchten ausdrücklich betonen, dass:</p>

        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Dieses Spiel vollständig kostenlos ist und keine Geldeinsätze erfordert</li>
          <li>Keine Echtgeld-Transaktionen stattfinden</li>
          <li>Keine Preise, Gewinne oder Boni mit realem Wert ausgegeben werden</li>
          <li>Alle Inhalte und Ressourcen virtuell sind und keinen realen Wert haben</li>
          <li>Das Spiel ausschließlich der Unterhaltung und Bildung dient</li>
          <li>Das Spiel für Personen unter 18 Jahren nicht zugänglich ist</li>
        </ul>

        <p className="mt-4">Wir empfehlen, regelmäßige Pausen einzulegen und die Spielzeit zu begrenzen.</p>

        <p className="mt-4">
          Sollten Sie Fragen zu diesem Haftungsausschluss haben oder weitere Informationen benötigen, kontaktieren Sie
          uns bitte unter info@solquex.com.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/terms" className="text-primary hover:underline">
            Nutzungsbedingungen
          </Link>
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Datenschutzrichtlinie
          </Link>
          <Link href="/cookies" className="text-primary hover:underline">
            Cookie-Richtlinie
          </Link>
          <Link href="/contact" className="text-primary hover:underline">
            Kontakt
          </Link>
        </div>
      </div>
    )
  }

  return null
}
