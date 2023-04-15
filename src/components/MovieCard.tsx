import Image from 'next/image'

function MovieCard() {
  const src =
    'https://upload.wikimedia.org/wikipedia/pt/thumb/5/53/The_Amazing_Spider-Man_Poster.jpg/233px-The_Amazing_Spider-Man_Poster.jpg'
  return (
    <div className="w-32 flex flex-col gap-2.5">
      <Image
        src={src}
        width={130}
        height={190}
        alt="imagem"
        className="rounded-3xl border-2 border-gray-700"
      />
      <p className="truncate text-white text-sm">O espetacular homem aranha</p>
    </div>
  )
}

export default MovieCard
