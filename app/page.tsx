import Hero from "@/components/hero"
import GameDescription from "@/components/game-description"
import ToolsPreview from "@/components/tools-preview"
import GamePreview from "@/components/game-preview"
import Disclaimer from "@/components/disclaimer"
import SafeGaming from "@/components/safe-gaming"

export default function Home() {
  return (
    <div>
      {/* Главная секция с описанием и кнопкой */}
      <Hero />

      {/* Описание игры о пастухе */}
      <GameDescription />

      {/* Инструменты пастуха */}
      <ToolsPreview />

      {/* Превью игры */}
      <GamePreview />

      {/* Дисклеймер */}
      <div className="container mx-auto px-4 py-8">
        <Disclaimer type="expanded" />
      </div>

      {/* Безопасная игра */}
      <SafeGaming />
    </div>
  )
}
