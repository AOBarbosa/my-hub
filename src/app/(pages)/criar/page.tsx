import { Rocket } from 'lucide-react'

import { Header } from '@/components/landing-page/header'
import { Button } from '@/components/ui/button'
import { TextInput } from '@/components/ui/text-input'

export default function CriarPage() {
  return (
    <div>
      <Header />
      <div className="mx-auto flex h-screen max-w-xl flex-col items-center justify-center gap-10">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10" />
        </div>
        <form action="" className="flex w-full items-center gap-2">
          <span>projectinbio.com/</span>
          <TextInput />
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <span className="text-accent-pink">Erro de exemplo</span>
        </div>
      </div>
    </div>
  )
}
