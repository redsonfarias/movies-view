import MovieCard from './MovieCard'

interface MovieCarouselProps {
  title: string
}

function MovieCarousel({ title }: MovieCarouselProps) {
  const movies = [0, 1, 2, 3, 4, 5]

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-xl text-white tracking-wide">{title}</p>
        <p className="text-md text-gray-500 tracking-wide">Ver todos</p>
      </div>
      <div className="flex gap-5 overflow-auto no-scrollbar mt-3">
        {movies.map((movie) => (
          <MovieCard key={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieCarousel
