'use client'

import { ButtonHTMLAttributes } from 'react'
import { Github } from 'lucide-react'
import { FaGoogle } from 'react-icons/fa'
import clsx from 'clsx'

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'github'
  loading?: boolean
}

export default function AuthButton({
  provider,
  loading = false,
  className,
  children,
  ...props
}: AuthButtonProps) {
  const renderIcon = () => {
    switch (provider) {
      case 'google':
        return <FaGoogle className="h-5 w-5" />
      case 'github':
        return <Github className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <button
      disabled={loading || props.disabled}
      className={clsx(
        'inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-transparent"></span>
      ) : (
        renderIcon()
      )}
      {children}
    </button>
  )
} 