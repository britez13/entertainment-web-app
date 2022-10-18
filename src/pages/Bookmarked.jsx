import { useContext } from "react";
import { DataContext } from "../App";
import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import Card from "../components/Card";

const Bookmarked = () => {

  const {shows, setShows} = useContext(DataContext)

  const bookmarkedMovies = shows.filter(show  => {
    if(show.category === "Movie" && show.isBookmarked === true) return show
  });

  const bookmarkedSeries = shows.filter((show) => {
    if (show.category === "TV Series" && show.isBookmarked === true) return show;
  });
  
  console.log(bookmarkedMovies);
  console.log(bookmarkedSeries);

  return (
    <main className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for bookmarked shows"} />
      <section className='mt-4'>
        <Subtitle text={"Bookmarked Movies"} />
        <div>
          {bookmarkedMovies.map((bookmarkedMovie) => (
            <Card
              key={bookmarkedMovie.title}
              item={bookmarkedMovie}
              setShows={setShows}
            />
          ))}
        </div>
      </section>
      <section className='mt-4'>
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
      </section>
    </main>
  );
}

export default Bookmarked

