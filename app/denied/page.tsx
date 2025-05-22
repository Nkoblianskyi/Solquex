import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DeniedPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-red-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4">Zugriff verweigert</h1>

        <p className="text-lg text-muted-foreground mb-8">
          Diese Website ist nur für Benutzer ab 18 Jahren zugänglich. Wir können Ihnen leider keinen Zugang gewähren.
        </p>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Wenn Sie glauben, dass dies ein Fehler ist, können Sie die Altersüberprüfung erneut durchführen.
          </p>

          <Button asChild>
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
