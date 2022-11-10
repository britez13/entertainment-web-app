import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import { UserDataContext } from "../context/UserContext";
// import { data } from "../data";

const Movies = () => {
  const { shows, setShows, searchedShow } = UserDataContext();

  const searchedWordLength = searchedShow.moviesSearch.trim().length;

  const coincidencesShows = shows.filter(
    (show) =>
      show.title
        .toLowerCase()
        .includes(searchedShow.moviesSearch.toLowerCase()) &&
      show.category === "Movie"
  );

  console.log(coincidencesShows);

  const movies = shows.filter((show) => show.category === "Movie");
  return (
    <main className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for movies"} />
      <section className='mt-3'>
        {searchedWordLength ? (
          <section>
            <h2 className='text-white font-light text-xl tracking-[-0.31px]'>
              Found {coincidencesShows.length} results for '
              {searchedShow.moviesSearch}'
            </h2>

            <div className='flex gap-2 flex-wrap mt-4'>
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
            {" "}
            <Subtitle text={"Movies"} />
            <div className='flex gap-2 flex-wrap mt-4'>
              {movies.map((item) => {
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
};

export default Movies;
