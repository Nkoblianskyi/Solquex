"use client"

import GameButton from "@/components/game-button"
import { motion } from "framer-motion"
import { Mountain, WheatIcon as Sheep, Sun } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-1/4"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        >
          <Sun className="h-24 w-24" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-1/4"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
        >
          <Mountain className="h-32 w-32" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/5"
          animate={{ x: [0, 30, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
        >
          <Sheep className="h-16 w-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-1/5"
          animate={{ x: [0, -20, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut" }}
        >
          <Sheep className="h-12 w-12" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Bereit für ein alpines Abenteuer?
        </motion.h2>

        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tauchen Sie ein in das Leben eines österreichischen Bergbauern und entdecken Sie die Traditionen der
          Alpenregion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GameButton size="lg" variant="secondary" className="text-lg px-8 py-6">
            Jetzt Spielen
          </GameButton>
        </motion.div>

        <motion.p
          className="mt-6 text-sm opacity-75"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Nur für Unterhaltungszwecke. Kein echtes Geld. Keine Preise. Ab 18 Jahren.
        </motion.p>
      </div>
    </section>
  )
}
