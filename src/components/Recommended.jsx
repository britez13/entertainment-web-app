// import { useContext } from "react";
// import { DataContext } from "../App";
import Subtitle from "./Subtitle";
import Card from "./Card";
import { UserDataContext } from "../context/UserContext";




const Recommended = () => {
  const {shows, setShows} = UserDataContext();

  const recommended = shows.filter((item) => item.isTrending === false);

  return (
    <section className='mt-6'>
      <Subtitle text={"Recommended for you"} />
      <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {recommended.map((item) => {
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
  );
};

export default Recommended;
