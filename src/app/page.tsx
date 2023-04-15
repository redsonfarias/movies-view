import Button from '@/components/Button'
import Carrousel from '@/components/MovieCarousel'
import SearchInput from '@/components/SearchInput'

export default function Home() {
  const categories = ['Terror', 'Ação', 'Comédia', 'Romance', 'Drama']

  return (
    <div className="flex flex-col gap-6 p-4">
      <SearchInput />
      <div>
        <p className="text-xl text-white tracking-wide">Categorias</p>
        <div className="flex gap-3 overflow-auto no-scrollbar mt-3">
          {categories.map((category) => (
            <Button key={category}>{category}</Button>
          ))}
        </div>
      </div>
      <Carrousel title="Populares" />
      <Carrousel title="Lançamentos" />
    </div>
  )
}
