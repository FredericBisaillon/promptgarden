'use client'

import { useState } from 'react'
import { mockPromptDetail } from '@/data/mock-prompt-detail'
import { Textarea } from '@/components/ui/textarea'
import { Heart, Copy as CopyIcon, MessageCircle, Check, Send } from 'lucide-react'

interface PromptDetailPageProps {
  promptId: string
}

export default function PromptDetailPage({ promptId }: PromptDetailPageProps) {
  const [newComment, setNewComment] = useState('')
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // En production, on récupérerait les données via une API
  const prompt = mockPromptDetail

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLikeClick = () => {
    setLiked(!liked)
  }

  // variable used to satisfy linter (may be used in future data fetching)
  const promptIdRef = promptId

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
        <div className="self-stretch px-4 pt-3 pb-3 flex justify-start items-end gap-4 flex-wrap">
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
          <button
            onClick={handleLikeClick}
            className="px-3 py-2 flex justify-center items-center gap-2"
          >
            <Heart
              className={`w-4 h-4 ${liked ? 'text-red-500 fill-red-500' : 'text-[#61758A]'}`}
              fill={liked ? 'currentColor' : 'none'}
            />
            <span className="text-[#61758A] text-[13px] font-bold leading-5">
              {prompt.interactions.likes}
            </span>
          </button>
          
          <div className="px-3 py-2 flex justify-center items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#61758A]" />
            <span className="text-[#61758A] text-[13px] font-bold leading-5">
              {prompt.interactions.comments}
            </span>
          </div>
          
          <button
            onClick={handleCopyPrompt}
            className="px-3 py-2 flex justify-center items-center gap-2"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500 animate-bounce" />
            ) : (
              <CopyIcon className="w-4 h-4 text-[#61758A]" />
            )}
            <span
              className={`text-[13px] font-bold leading-5 ${copied ? 'text-green-500' : 'text-[#61758A]'}`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </span>
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
        <div
          data-prompt-id={promptIdRef}
          className="self-stretch px-4 pt-3 pb-3 flex items-start gap-3"
        >
          <img
            src="https://placehold.co/40x40"
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full min-h-[80px] resize-none rounded-lg border border-[#DBE0E5] p-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button
                type="button"
                disabled={newComment.trim() === ''}
                className="inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors enabled:hover:bg-[#1e4ed8] disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 