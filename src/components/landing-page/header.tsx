import Image from 'next/image'

import { manageAuth } from '@/app/actions/manage-auth'
import { auth } from '@/lib/auth'

import { Button } from '../ui/button'

export async function Header() {
  const session = await auth()
  console.log('Session:', session)

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
        {session && <Button>Minha Página</Button>}
        <form action={manageAuth}>
          <Button>{session ? 'Sair' : 'Login'}</Button>
        </form>
      </div>
    </div>
  )
}
