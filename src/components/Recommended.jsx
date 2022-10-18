import { useContext } from "react";
import { DataContext } from "../App";
import Subtitle from "./Subtitle";
import Card from "./Card";




const Recommended = () => {
  const {shows, setShows} = useContext(DataContext);

  const recommended = shows.filter((item) => item.isTrending === false);

  return (
    <section className='mt-6'>
      <Subtitle text={"Recommended for you"} />
      <div className='mt-4 flex gap-2 flex-wrap'>
        {recommended.map((item, index) => {
          return (
            <Card
              key={item.title}
              item={item}
              setShows={setShows}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Recommended;
