'use client'

import { useState } from 'react'
import AuthButton from '@/components/AuthButton'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/auth/auth'

export default function LoginPage() {
  const [googleLoading, setGoogleLoading] = useState(false)
  const [githubLoading, setGithubLoading] = useState(false)

  const router = useRouter()

  const handleGoogleLogin = () => {
    setGoogleLoading(true)
    // Simulate immediate login
    login()
    router.push('/')
  }

  const handleGithubLogin = () => {
    setGithubLoading(true)
    // For now, same behaviour as Google
    login()
    router.push('/')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">PromptGarden</h1>
          <p className="mt-2 text-sm text-gray-600">
            Join the prompt makers community
          </p>
        </div>

        <div className="space-y-4">
          <AuthButton
            provider="google"
            loading={googleLoading}
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </AuthButton>

          <AuthButton
            provider="github"
            loading={githubLoading}
            onClick={handleGithubLogin}
          >
            Sign in with GitHub
          </AuthButton>
        </div>

        <p className="pt-6 text-center text-sm text-gray-600">
          Don't have an account yet?{' '}
          <a href="/register" className="font-medium text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
} 