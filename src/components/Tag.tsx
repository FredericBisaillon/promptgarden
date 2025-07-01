"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { colors } from "@/constants/colors"

interface TagProps {
  label: string
  onRemove?: () => void
  className?: string
}

export function Tag({ label, onRemove, className }: TagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={cn(
        "flex items-center text-sm font-medium px-3 py-1 rounded-md",
        className
      )}
      style={{ backgroundColor: colors.gray100, color: colors.textDark }}
    >
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          title="Remove tag"
          aria-label={`Remove tag ${label}`}
          className="ml-2 text-gray-500 hover:text-red-500"
        >
          ×
        </button>
      )}
    </motion.div>
  )
} 