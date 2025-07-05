"use client"

interface TagProps {
  label: string
  onRemove?: () => void
  className?: string
}

export function Tag({ label, onRemove, className }: TagProps) {
  return (
    <div
      className={`flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-gray-100 text-gray-900 ${className || ''}`}
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
    </div>
  )
} 