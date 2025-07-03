'use client'

import { useState } from 'react'
import { mockPromptDetail } from '@/data/mock-prompt-detail'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface PromptDetailPageProps {
  promptId: string
}

export default function PromptDetailPage({ promptId }: PromptDetailPageProps) {
  const [newComment, setNewComment] = useState('')
  
  // En production, on récupérerait les données via une API
  const prompt = mockPromptDetail

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt.content)
    // Ici on pourrait ajouter une notification de succès
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      // En production, on enverrait le commentaire à l'API
      console.log('Nouveau commentaire:', newComment)
      setNewComment('')
    }
  }

  return (
    <div className="w-full h-full px-40 py-5 flex justify-center items-start">
      <div className="flex-1 max-w-[960px] overflow-hidden flex flex-col justify-start items-start">
        {/* Fil d'Ariane */}
        <div className="self-stretch p-4 flex justify-start items-start gap-2 flex-wrap">
          <div className="flex flex-col justify-start items-start">
            <div className="text-[#61758A] text-base font-medium leading-6">Explore</div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="text-[#61758A] text-base font-medium leading-6">/</div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="text-[#121417] text-base font-medium leading-6">Prompt</div>
          </div>
        </div>

        {/* Titre */}
        <div className="self-stretch pt-5 pb-3 px-4 flex flex-col justify-start items-start">
          <div className="self-stretch text-[#121417] text-[28px] font-bold leading-[35px]">
            {prompt.title}
          </div>
        </div>

        {/* Description */}
        <div className="self-stretch pt-1 pb-3 px-4 flex flex-col justify-start items-start">
          <div className="self-stretch text-[#121417] text-base font-normal leading-6">
            {prompt.description}
          </div>
        </div>

        {/* Tags */}
        <div className="self-stretch pt-3 pb-3 pl-3 pr-4 flex justify-start items-start gap-3 flex-wrap">
          {prompt.tags.map((tag, index) => (
            <div key={index} className="h-8 px-4 bg-[#F0F2F5] rounded-lg flex justify-center items-center gap-2">
              <div className="flex-1 flex flex-col justify-start items-start">
                <div className="self-stretch text-[#121417] text-sm font-medium leading-[21px]">
                  {tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Auteur */}
        <div className="self-stretch p-4 flex">
          <div className="flex-1 flex justify-between items-center">
            <div className="flex justify-start items-start gap-4">
              <img 
                src={prompt.author.avatar} 
                alt={prompt.author.name}
                className="w-32 h-32 min-h-32 relative rounded-full"
              />
              <div className="h-32 flex flex-col justify-center items-start">
                <div className="w-[203px] flex flex-col justify-start items-start">
                  <div className="self-stretch text-[#121417] text-[22px] font-bold leading-7">
                    {prompt.author.name}
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="text-[#61758A] text-base font-normal leading-6">
                    Published on {prompt.author.publishedAt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Prompt */}
        <div className="self-stretch pt-5 pb-3 px-4 flex flex-col justify-start items-start">
          <div className="self-stretch text-[#121417] text-[22px] font-bold leading-7">
            Prompt
          </div>
        </div>

        {/* Zone de prompt */}
        <div className="max-w-[480px] px-4 pt-3 pb-3 flex justify-start items-end gap-4 flex-wrap">
          <div className="flex-1 min-w-[160px] flex flex-col justify-start items-start">
            <div className="self-stretch flex-1 min-h-[144px] p-[15px] bg-white rounded-lg border border-[#DBE0E5]">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                {prompt.content}
              </pre>
            </div>
          </div>
        </div>

        {/* Barre d'interactions */}
        <div className="self-stretch px-4 pt-2 pb-2 flex justify-start items-start gap-4 flex-wrap">
          <div className="px-3 py-2 flex justify-center items-center gap-2">
            <div className="flex flex-col justify-start items-start">
              <div className="w-6 flex-1 relative overflow-hidden">
                <div className="w-6 h-6 left-0 top-0 absolute bg-[#61758A] rounded-sm"></div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#61758A] text-[13px] font-bold leading-5">
                {prompt.interactions.likes}
              </div>
            </div>
          </div>
          
          <div className="px-3 py-2 flex justify-center items-center gap-2">
            <div className="flex flex-col justify-start items-start">
              <div className="w-6 flex-1 relative overflow-hidden">
                <div className="w-6 h-6 left-0 top-0 absolute bg-[#61758A] rounded-sm"></div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#61758A] text-[13px] font-bold leading-5">
                {prompt.interactions.comments}
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleCopyPrompt}
            className="px-3 py-2 flex justify-center items-center gap-2"
          >
            <div className="flex flex-col justify-start items-start">
              <div className="w-6 flex-1 relative overflow-hidden">
                <div className="w-6 h-6 left-0 top-0 absolute bg-[#61758A] rounded-sm"></div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#61758A] text-[13px] font-bold leading-5">
                Copy
              </div>
            </div>
          </button>
        </div>

        {/* Section Commentaires */}
        <div className="self-stretch pt-5 pb-3 px-4 flex flex-col justify-start items-start">
          <div className="self-stretch text-[#121417] text-[22px] font-bold leading-7">
            Comments
          </div>
        </div>

        {/* Liste des commentaires */}
        {prompt.comments.map((comment) => (
          <div key={comment.id} className="self-stretch p-4 flex justify-start items-start gap-3">
            <img 
              src={comment.author.avatar} 
              alt={comment.author.name}
              className="w-10 h-10 relative rounded-full"
            />
            <div className="flex-1 self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch flex justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start">
                  <div className="text-[#121417] text-sm font-bold leading-[21px]">
                    {comment.author.name}
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="text-[#61758A] text-sm font-normal leading-[21px]">
                    {comment.createdAt}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch text-[#121417] text-sm font-normal leading-[21px]">
                  {comment.content}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Formulaire de nouveau commentaire */}
        <div className="self-stretch px-4 pt-3 pb-3 flex justify-start items-center gap-3">
          <div className="flex-1 self-stretch min-w-[160px] flex flex-col justify-start items-start">
            <div className="self-stretch flex-1 rounded-lg flex justify-start items-start">
              <div className="self-stretch pt-[15px] pl-[15px] pr-[15px] bg-white rounded-l-lg border-l border-t border-b border-[#DBE0E5] flex justify-end items-start">
                <img 
                  src="https://placehold.co/40x40" 
                  alt="Your avatar"
                  className="flex-1 h-10 relative rounded-full"
                />
              </div>
              <div className="flex-1 self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch h-[79px] pt-[22px] pb-2 pl-2 pr-3 bg-white rounded-tr-lg border-t border-r border-[#DBE0E5]">
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full h-full border-0 focus:ring-0 resize-none bg-transparent"
                    rows={3}
                  />
                </div>
                <div className="self-stretch pb-[15px] pl-[15px] pr-[15px] bg-white rounded-br-lg border-r border-b border-[#DBE0E5] flex justify-end items-start">
                  <div className="flex justify-end items-center gap-4">
                    <div className="flex-1 flex justify-start items-center gap-1">
                      <div className="flex-1 p-1.5 flex justify-center items-center">
                        <div className="flex-1 flex flex-col justify-start items-center">
                          <div className="self-stretch flex-1 relative overflow-hidden">
                            <div className="w-5 h-5 left-0 top-0 absolute bg-[#61758A] rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 