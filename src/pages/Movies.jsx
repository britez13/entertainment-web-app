
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import { data } from "../data";

const Movies = () => {
  const movies = data.filter(show => show.category === "Movie" )
  return (
    <main className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for movies"} />
      <section className='mt-3'>
        <Subtitle text={"Movies"} />
        <div className="flex gap-2 flex-wrap mt-4">
          { movies.map( item => {
            return <Card key={item.title} item={item} />
          } ) }
        </div>
      </section>
    </main>
  );
};

export default Movies;


