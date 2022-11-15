import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import { UserDataContext } from "../context/UserContext";
// import { data } from "../data";

const Series = () => {

  
  const {shows, setShows, searchedShow} = UserDataContext()

  const series = shows.filter( show => show.category === "TV Series" )

  const searchedWordLength = searchedShow.seriesSearch.trim().length;

  const coincidencesShows = shows.filter(
    (show) =>
      show.title
        .toLowerCase()
        .includes(searchedShow.seriesSearch.toLowerCase()) &&
      show.category === "TV Series"
  );
  return (
    <main className='grow mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for TV Series"} />
      <section className='mt-6'>
        {searchedWordLength ? (
          <section>
            <h1
              className='text-white font-light text-xl tracking-[-0.31px] 
      md:text-[32px] md:tracking-[-0.5px]'
            >
              Found {coincidencesShows.length} results for '
              {searchedShow.seriesSearch}'
            </h1>

            <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
              {coincidencesShows.map((item) => {
                return (
                  <Card
                    key={item.title}
                    item={item}
                    shows={shows}
                    setShows={setShows}
                  />
                );
              })}
            </div>
          </section>
        ) : (
          <>
            <Subtitle text={"TV Series"} />
            <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
              {series.map((item) => {
                return (
                  <Card
                    key={item.title}
                    item={item}
                    shows={shows}
                    setShows={setShows}
                  />
                );
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Series