import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";
import { data } from "../data";

const Series = () => {
  const series = data.filter( show => show.category === "TV Series" )
  return (
    <main className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for TV Series"} />
      <section className='mt-3'>
        <Subtitle text={"TV Series"} />
        <div className='flex gap-2 flex-wrap mt-4'>
          {series.map((item) => {
            return <Card key={item.title} item={item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Series