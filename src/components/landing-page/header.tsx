import Image from 'next/image'

import { Button } from '../ui/button'

export function Header() {
  return (
    <div className="absolute top-0 right-0 left-0 mx-auto flex max-w-7xl items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="ProjectInBio Logo"
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <h3 className="text-2xl font-bold text-white">MyHub</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  )
}
