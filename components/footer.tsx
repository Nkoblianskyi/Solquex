import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <h3 className="font-bold text-lg">Solquex</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Ein führender Anbieter von Bildungsspielen und interaktiven Lernerfahrungen.
            </p>
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
              <span className="text-red-600 dark:text-red-500 font-bold">18+</span>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Wichtige Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Haftungsausschluss
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Datenschutzrichtlinie
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Nutzungsbedingungen
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie-Richtlinie
                </Link>
              </li>
              <li>
                <Link href="/safe-gaming" className="text-muted-foreground hover:text-primary transition-colors">
                  Verantwortungsvolles Spielen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontaktinformationen</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                <span className="text-muted-foreground">Mariahilfer Straße 45, Wien, 1060</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                <span className="text-muted-foreground">info@solquex.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                <span className="text-muted-foreground">+43 1 525 1351</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-sm text-muted-foreground">
          <p className="mb-4">
            Diese soziale Plattform ist ausschließlich für Nutzer ab 18 Jahren bestimmt. Der Zugang für Minderjährige
            ist untersagt.
          </p>
          <p className="mb-4">
            Für erwachsene Nutzer ist dies eine sichere und unterhaltsame Erfahrung ohne jegliche finanzielle Aspekte.
            Alle Inhalte sind virtuell und haben keinen realen Wert. Diese Plattform dient ausschließlich Unterhaltungs-
            und sozialen Zwecken.
          </p>
          <p>
            Nutzen Sie die Plattform verantwortungsvoll und legen Sie regelmäßige Pausen ein, um ein ausgewogenes
            digitales Erlebnis zu gewährleisten.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-sm text-muted-foreground text-center">
          <p>© {currentYear} Solquex. Alle Rechte vorbehalten.</p>
          <p className="mt-1">
            Dies ist eine kostenlose soziale Plattform ausschließlich zu Unterhaltungs- und sozialen Zwecken. Alle
            Inhalte sind virtuell und haben keinen realen Wert.
          </p>
        </div>
      </div>
    </footer>
  )
}
