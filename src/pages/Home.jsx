import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Card from "../components/Card";
import { UserDataContext } from "../context/UserContext";

// import { data } from "../data";

const Home = () => {
  const [trendig, setTrending] = useState([]);

  const { user, shows, setShows, searchedShow } = UserDataContext();
  // console.log(user?.email);

  const searchedWordLength = searchedShow.homeSearch.trim().length;

  const coincidencesShows = shows.filter((show) =>
    show.title.toLowerCase().includes(searchedShow.homeSearch.toLowerCase())
  );

  const navigate = useNavigate();

  

  return (
    <main
      id='home'
      className='grow mt-4 px-4 md:px-6 lg:mt-12 lg:px-0 lg:overflow-x-hidden overflow-y-hidden'
    >
      <SearchBar text='Search for movies or TV series' />

      {searchedWordLength > 0 ? (
        <section className="mt-6">
          <h1
            className='text-white font-light text-xl tracking-[-0.31px] 
      md:text-[32px] md:tracking-[-0.5px]'
          >
            Found {coincidencesShows.length} results for '
            {searchedShow.homeSearch}'
          </h1>

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
          <Trending />
          <Recommended />
        </>
      )}
    </main>
  );
};

export default Home;
