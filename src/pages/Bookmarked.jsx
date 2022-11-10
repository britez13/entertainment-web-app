
import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import Card from "../components/Card";
import { UserDataContext } from "../context/UserContext";

const Bookmarked = () => {

  const {shows, setShows, searchedShow} = UserDataContext()
  
  const bookmarkedMovies = shows.filter(show  => {
    if(show.category === "Movie" && show.isBookmarked === true) return show
  });

  const bookmarkedSeries = shows.filter((show) => {
    if (show.category === "TV Series" && show.isBookmarked === true) return show;
  });
  
  return (
    <main className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0 lg:grow flex flex-col items-start'>
      <SearchBar text={"Search for bookmarked shows"} />

      {!bookmarkedMovies.length && !bookmarkedSeries.length ? (
        <h2 className='text-white font-light text-xl tracking-[-0.31px]'>
          No bookmarked shows yet
        </h2>
      ) : (
        <>
          <section className='mt-4'>
            {bookmarkedMovies.length > 0 && (
              <>
                <Subtitle text={"Bookmarked Movies"} />
                <div>
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
          <section className='mt-4'>
            {bookmarkedSeries.length > 0 && (
              <>
                <Subtitle text={"Bookmarked TV Series"} />
                <div>
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
}

export default Bookmarked

