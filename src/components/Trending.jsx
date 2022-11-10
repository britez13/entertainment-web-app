// import { data } from "../data"
import { UserDataContext } from "../context/UserContext";
import Subtitle from "./Subtitle";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  const { shows, setShows } = UserDataContext();
  const trendig = shows.filter((item) => item.isTrending === true);

  return (
    <section className='mt-3'>
      <Subtitle text={"Trending"} />
      <div className='slider-container mt-4 flex gap-5 overflow-x-auto scroll-smooth snap-x 
      snap-mandatory lg:overflow-x-scroll lg:overflow-y-hidden'>
        {trendig.map((item) => {
          return (
            <TrendingCard
              key={item.title}
              shows={shows}
              item={item}
              setShows={setShows}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
