
import SearchBar from "../components/SearchBar"
import Trending from "../components/Trending"

const Home = () => {
  return (
    <main className="mt-4 px-4 md:px-6 lg:mt-12 lg:px-0">
      <SearchBar text="Search for movies or TV series" />
      <Trending />
    </main>
  )
}

export default Home