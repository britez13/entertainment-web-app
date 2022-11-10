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
  console.log(user?.email);

  const searchedWordLength = searchedShow.homeSearch.trim().length;

  const coincidencesShows = shows.filter((show) =>
    show.title.toLowerCase().includes(searchedShow.homeSearch.toLowerCase())
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email && !user?.email) {
      navigate("/login");
    }
  });

  return (
    <main
      id='home'
      className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0 lg:overflow-x-hidden'
    >
      <SearchBar text='Search for movies or TV series' />

      {searchedWordLength > 0 ? (
        <section>
          <h2 className='text-white font-light text-xl tracking-[-0.31px]'>
            Found {coincidencesShows.length} results for '
            {searchedShow.homeSearch}'
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
          <Trending />
          <Recommended />
        </>
      )}
    </main>
  );
};

export default Home;
