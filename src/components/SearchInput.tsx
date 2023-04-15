function SearchInput() {
  return (
    <div className="relative text-gray-700">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        name="search-input"
        className="bg-transparent shadow appearance-none border-2 border-gray-700 rounded-xl w-full pl-10 py-2 px-3 text-white focus:outline-none focus:border-gray-600"
        placeholder="Buscar"
        autoComplete="off"
      />
    </div>
  )
}

export default SearchInput
