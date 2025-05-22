import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Kontaktieren Sie uns</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Unsere Informationen</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Adresse</h3>
                <p className="text-muted-foreground">Mariahilfer Straße 45, Wien, 1060</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Telefon</h3>
                <p className="text-muted-foreground">+43 1 525 1351</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">E-Mail</h3>
                <p className="text-muted-foreground">info@solquex.com</p>
              </div>
            </div>
          </div>

        </div>

        <ContactForm />
      </div>
    </div>
  )
}
