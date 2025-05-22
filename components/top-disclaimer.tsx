import { AlertTriangle } from "lucide-react"

export default function TopDisclaimer() {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 py-2 text-center text-xs sm:text-sm border-b border-yellow-200 dark:border-yellow-800">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mr-2 flex-shrink-0" />
        <p className="text-yellow-800 dark:text-yellow-300">
          <span className="font-medium">Wichtiger Hinweis:</span> Dies ist eine kostenlose soziale Plattform
          ausschließlich zu Unterhaltungs- und sozialen Zwecken. Alle Inhalte sind virtuell und haben keinen realen
          Wert. Für Benutzer ab 18 Jahren.
        </p>
      </div>
    </div>
  )
}
