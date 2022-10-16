
import { data } from "../data"
import Subtitle from "./Subtitle";
import TrendingCard from "./TrendingCard";


const Trending = () => {

  const trendig = data.filter(item => item.isTrending === true)

  return (
    <section className='mt-3'>
      <Subtitle text={"Trending"} />
      <div className="mt-4 flex gap-4 overflow-x-scroll scroll-smooth snap-x">
        {trendig.map((item) => {
          return <TrendingCard key={item.title} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Trending

