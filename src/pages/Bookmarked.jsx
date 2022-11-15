import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import Card from "../components/Card";
import { UserDataContext } from "../context/UserContext";

const Bookmarked = () => {
  const { shows, setShows, searchedShow } = UserDataContext();

  const bookmarkedMovies = shows.filter((show) => {
    if (show.category === "Movie" && show.isBookmarked === true) return show;
  });

  const searchedWordLength = searchedShow.bookmarkedSearch.trim().length;

  const coincidencesShows = shows.filter(
    (show) =>
      show.title
        .toLowerCase()
        .includes(searchedShow.bookmarkedSearch.toLowerCase()) &&
      show.isBookmarked
  );

  const bookmarkedSeries = shows.filter((show) => {
    if (show.category === "TV Series" && show.isBookmarked === true)
      return show;
  });

  return (
    <main className='grow mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for bookmarked shows"} />

      {!bookmarkedMovies.length && !bookmarkedSeries.length ? (
        <section className="mt-6">
          <Subtitle text={"No bookmarked shows yet"} />
        </section>
      ) : searchedWordLength ? (
        <section className='mt-6'>
          <h1
            className='text-white font-light text-xl tracking-[-0.31px] 
      md:text-[32px] md:tracking-[-0.5px]'
          >
            Found {coincidencesShows.length} results for '
            {searchedShow.bookmarkedSearch}'
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
          <section className='mt-6'>
            {bookmarkedMovies.length > 0 && (
              <>
                <Subtitle text={"Bookmarked Movies"} />
                <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                  {bookmarkedMovies.map((bookmarkedMovie) => (
                    <Card
                      key={bookmarkedMovie.title}
                      item={bookmarkedMovie}
                      shows={shows}
                      setShows={setShows}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
          <section className='mt-6'>
            {bookmarkedSeries.length > 0 && (
              <>
                <Subtitle text={"Bookmarked TV Series"} />
                <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                  {bookmarkedSeries.map((bookmarkedSeries) => (
                    <Card
                      key={bookmarkedSeries.title}
                      item={bookmarkedSeries}
                      setShows={setShows}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default Bookmarked;
