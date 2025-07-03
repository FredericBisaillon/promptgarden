'use client'

import { Badge } from "@/components/ui/badge"

type Prompt = {
  id: string
  title: string
  description: string
  imageUrl?: string
  tags: string[]
  model: string
}

export function PromptCard({ prompt }: { prompt: Prompt }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition flex flex-col h-full">
      {prompt.imageUrl && (
        <img
          src={prompt.imageUrl}
          alt={prompt.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{prompt.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{prompt.description}</p>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-2">
          {prompt.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <span className="text-xs text-gray-500">Model: {prompt.model}</span>
      </div>
    </div>
  )
} 