"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Scissors, Mountain } from "lucide-react"

// Custom icons for tools and companions
const CustomStaff = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <motion.path
      d="M12 2v20M12 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4"
      animate={{ pathLength: [0, 1] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 1 }}
    />
  </motion.svg>
)

const CustomBackpack = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <motion.rect
      x="6"
      y="4"
      width="12"
      height="16"
      rx="2"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M6 12h12"
      animate={{ x: [0, 2, 0, -2, 0] }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M9 16v-4M15 16v-4"
      animate={{ y: [0, -1, 0] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
  </motion.svg>
)

const CustomDog = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <motion.path
      d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"
      animate={{ x: [0, 2, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
      animate={{ x: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M8 14v.5M16 14v.5"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M11.25 16.25h1.5L12 17l-.75-.75z"
      animate={{ y: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.16.306"
      animate={{ pathLength: [0, 1] }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
  </motion.svg>
)

const CustomBird = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <motion.path
      d="M16 7h.01"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"
      animate={{ rotate: [0, 5, 0, -5, 0] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="m20 7 2 .5-2 .5"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M10 18v3"
      animate={{ y: [0, 2, 0] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
    <motion.path
      d="M14 17.75V21"
      animate={{ y: [0, 2, 0] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.2 }}
    />
    <motion.path
      d="M7 18a6 6 0 0 0 3.84-10.61"
      animate={{ pathLength: [0, 1] }}
      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
    />
  </motion.svg>
)

export default function ToolsAndCompanions() {
  const tools = [
    {
      name: "Alpenstab",
      description:
        "Ein traditioneller Wanderstab, der beim Klettern in den Bergen hilft und auch zur Führung der Herde verwendet wird.",
      icon: <CustomStaff className="h-16 w-16 text-primary" />,
    },
    {
      name: "Sichel",
      description:
        "Ein unverzichtbares Werkzeug zum Ernten von Kräutern, Gras und anderen Pflanzen in den Bergregionen.",
      icon: <Scissors className="h-16 w-16 text-primary" />,
    },
    {
      name: "Hirtentasche",
      description:
        "Eine robuste Ledertasche, in der der Bauer seine gesammelten Kräuter, Nahrungsmittel und kleine Werkzeuge aufbewahrt.",
      icon: <CustomBackpack className="h-16 w-16 text-primary" />,
    },
  ]

  const companions = [
    {
      name: "Schäferhund Alwin",
      description:
        "Ein treuer Begleiter, der dem Bauern hilft, die Schafherde zusammenzuhalten und vor Raubtieren zu schützen.",
      icon: <CustomDog className="h-16 w-16 text-primary" />,
    },
    {
      name: "Bergziege Heidi",
      description:
        "Eine kluge Ziege, die den Weg durch schwieriges Gelände findet und dem Bauern bei der Navigation in den Bergen hilft.",
      icon: <Mountain className="h-16 w-16 text-primary" />,
    },
    {
      name: "Adler Konrad",
      description:
        "Ein majestätischer Adler, der über die Berge fliegt und dem Bauern vor nahenden Gefahren oder Wetterumschwüngen warnt.",
      icon: <CustomBird className="h-16 w-16 text-primary" />,
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Werkzeuge & Gefährten</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Entdecke die wichtigsten Hilfsmittel und treuen Begleiter des Bergbauern
        </p>
      </div>

      <Tabs defaultValue="tools" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="tools">Werkzeuge</TabsTrigger>
          <TabsTrigger value="companions">Gefährten</TabsTrigger>
        </TabsList>

        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4 bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="companions">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companions.map((companion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4 bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center">
                      {companion.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{companion.name}</h3>
                    <p className="text-muted-foreground">{companion.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
