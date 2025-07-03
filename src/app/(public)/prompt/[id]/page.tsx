import PromptDetailPage from '@/components/PromptDetailPage'
import { Header } from '@/components/Header'

interface PromptDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: PromptDetailPageProps) {
  const { id } = await params
  return (
    <>
      <Header />
      <PromptDetailPage promptId={id} />
    </>
  )
} 