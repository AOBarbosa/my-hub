import Image from 'next/image'

export function VideoExplanation() {
  return (
    <div className="border-border-primary relative my-20 flex aspect-video items-center justify-center rounded-xl border">
      {/* <Play className="text-accent-purple absolute z-50 size-28" /> */}

      <Image
        src="/vide-example.png"
        alt=""
        className="size-full"
        width={800}
        height={600}
        quality={100}
      />
    </div>
  )
}
