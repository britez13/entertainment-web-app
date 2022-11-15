import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import { UserDataContext } from "../context/UserContext";
// import { data } from "../data";
import Wrapper from "../components/Wrapper";

const Movies = () => {
  const { shows, setShows, searchedShow } = UserDataContext();

  const searchedWordLength = searchedShow.moviesSearch.trim().length;

  // console.log("This is in Movies");
  // console.log(shows)

  const coincidencesShows = shows.filter(
    (show) =>
      show.title
        .toLowerCase()
        .includes(searchedShow.moviesSearch.toLowerCase()) &&
      show.category === "Movie"
  );


  const movies = shows.filter((show) => show.category === "Movie");
  return (
    <main className='grow mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for movies"} />
      <section className='mt-6'>
        {searchedWordLength ? (
          <section>
            <h2
              className='text-white font-light text-xl tracking-[-0.31px] 
      md:text-[32px] md:tracking-[-0.5px]'
            >
              Found {coincidencesShows.length} results for '
              {searchedShow.moviesSearch}'
            </h2>

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
            {" "}
            <Subtitle text={"Movies"} />
            <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
              {movies.map((item) => {
                
                console.log("This is in movies")
                console.log(shows)

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
