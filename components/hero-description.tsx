import Image from "next/image"

export default function HeroDescription() {
  return (
    <section id="hero-description" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Andreas Hofer: Der Tiroler Freiheitskämpfer</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Lerne den legendären Anführer des Tiroler Volksaufstands von 1809 kennen
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/andreas-hofer-portrait.png"
            alt="Andreas Hofer Portrait"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3">Der Volksheld</h3>
            <p className="text-lg text-muted-foreground">
              Andreas Hofer (1767-1810) war ein Tiroler Gastwirt und Viehhändler, der zum Anführer des Tiroler Aufstands
              gegen die bayerische und französische Besatzung wurde. Sein Mut und seine Entschlossenheit machten ihn zu
              einer Legende und einem Symbol des Freiheitskampfes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Historische Bedeutung</h3>
            <p className="text-lg text-muted-foreground">
              Hofer führte die Tiroler Schützen in mehreren erfolgreichen Schlachten, darunter am Berg Isel. Nach
              anfänglichen Erfolgen wurde er jedoch verraten, gefangen genommen und am 20. Februar 1810 in Mantua
              hingerichtet. Sein letzter Ausruf "Franzl, Franzl, was hast du mit deinem Volk getan?" ist legendär.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Vermächtnis</h3>
            <p className="text-lg text-muted-foreground">
              Heute wird Andreas Hofer als Nationalheld verehrt. Zahlreiche Denkmäler, Straßen und Plätze sind nach ihm
              benannt. Sein Kampf für die Freiheit und Unabhängigkeit Tirols inspiriert bis heute.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
