import { Header } from "@/components/Header"
import { CreatePromptForm } from "@/components/CreatePromptForm"

export default function CreatePromptPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-8">
        <CreatePromptForm />
      </section>
    </main>
  )
} 