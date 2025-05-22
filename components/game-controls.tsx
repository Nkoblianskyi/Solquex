"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sword, Shield, Book, MessageCircle, Map, User } from "lucide-react"

export default function GameControls() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const actions = [
    { id: "explore", icon: <Map className="h-5 w-5" />, label: "Erkunden" },
    { id: "talk", icon: <MessageCircle className="h-5 w-5" />, label: "Sprechen" },
    { id: "fight", icon: <Sword className="h-5 w-5" />, label: "Kämpfen" },
    { id: "defend", icon: <Shield className="h-5 w-5" />, label: "Verteidigen" },
    { id: "learn", icon: <Book className="h-5 w-5" />, label: "Lernen" },
    { id: "character", icon: <User className="h-5 w-5" />, label: "Charakter" },
  ]

  const handleActionClick = (actionId: string) => {
    setSelectedAction(actionId)
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Spielsteuerung</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="actions">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="actions">Aktionen</TabsTrigger>
            <TabsTrigger value="inventory">Inventar</TabsTrigger>
          </TabsList>

          <TabsContent value="actions" className="space-y-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
              {actions.map((action) => (
                <Button
                  key={action.id}
                  variant={selectedAction === action.id ? "default" : "outline"}
                  className="flex flex-col h-auto py-3"
                  onClick={() => handleActionClick(action.id)}
                >
                  <div className="mb-1">{action.icon}</div>
                  <span className="text-xs">{action.label}</span>
                </Button>
              ))}
            </div>

            {selectedAction && (
              <div className="mt-4 p-4 border rounded-lg bg-muted/50">
                <p className="text-sm">
                  {selectedAction === "explore" && "Erkunde die Umgebung und entdecke neue Orte und Geheimnisse."}
                  {selectedAction === "talk" &&
                    "Sprich mit den Charakteren, um Informationen zu sammeln und Beziehungen aufzubauen."}
                  {selectedAction === "fight" && "Kämpfe für die Freiheit Österreichs gegen die Besatzer."}
                  {selectedAction === "defend" && "Verteidige dich und deine Verbündeten gegen Angriffe."}
                  {selectedAction === "learn" && "Lerne mehr über die Geschichte und Kultur Österreichs."}
                  {selectedAction === "character" && "Sieh dir deinen Charakterfortschritt und deine Fähigkeiten an."}
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="inventory">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="border rounded-lg p-3 text-center">
                <div className="h-12 w-12 bg-muted rounded-md mx-auto mb-2"></div>
                <p className="text-xs font-medium">Historische Dokumente</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="h-12 w-12 bg-muted rounded-md mx-auto mb-2"></div>
                <p className="text-xs font-medium">Traditionelle Kleidung</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="h-12 w-12 bg-muted rounded-md mx-auto mb-2"></div>
                <p className="text-xs font-medium">Alte Karte</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="h-12 w-12 bg-muted rounded-md mx-auto mb-2"></div>
                <p className="text-xs font-medium">Familienwappen</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
