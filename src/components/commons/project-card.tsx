import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="bg-background-secondary hover:border-border-secondary flex h-[132px] w-[340px] gap-5 rounded-[20px] border border-transparent p-3">
      <div className="size-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src="/project1.jpg"
          alt="Projeto"
          className="h-full w-full object-cover"
          width={96}
          height={96}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-accent-green text-xs font-bold uppercase">
          10 cliques
        </span>
        <div className="flex flex-col">
          <span className="font-bold text-white">Projeto 1</span>
          <span className="text-content-body text-sm">
            Descrição super detalhada do que o projeto faz
          </span>
        </div>
      </div>
    </div>
  )
}
