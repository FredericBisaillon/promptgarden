import { UserPrompt } from "@/data/mock-users"
import { ProfilePromptCard } from "./ProfilePromptCard"

interface PromptGridProps {
  prompts: UserPrompt[]
}

export function PromptGrid({ prompts }: PromptGridProps) {
  return (
    <div className="w-full p-4 flex flex-col items-start gap-3">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {prompts.map((prompt) => (
          <ProfilePromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  )
} 