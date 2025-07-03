import { mockPrompts } from "@/data/mock-prompts"
import { PromptCard } from "@/components/PromptCard"
import { Header } from "@/components/Header"

export default function ExplorePage() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Explore Prompts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </>
  )
} 