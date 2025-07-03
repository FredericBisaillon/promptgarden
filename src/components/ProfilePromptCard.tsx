import { UserPrompt } from "@/data/mock-users"

interface ProfilePromptCardProps {
  prompt: UserPrompt
}

export function ProfilePromptCard({ prompt }: ProfilePromptCardProps) {
  return (
    <div className="w-full pb-3 flex flex-col items-start gap-3">
      <img 
        src={prompt.imageUrl} 
        alt={prompt.title}
        className="w-full h-44 rounded-xl object-cover"
      />
      <div className="w-full flex flex-col items-start">
        <h3 className="w-full text-[#121417] text-base font-medium leading-6 line-clamp-2">
          {prompt.title}
        </h3>
      </div>
    </div>
  )
} 