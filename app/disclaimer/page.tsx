import Disclaimer from "@/components/disclaimer"

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Haftungsausschluss - Bildungsplattform</h1>

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <Disclaimer type="full" />
      </div>
    </div>
  )
}
