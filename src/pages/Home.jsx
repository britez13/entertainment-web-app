import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";

// import { data } from "../data";

const Home = () => {

  // const [trendig, setTrending] = useState([]);

  return (
    <main className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text='Search for movies or TV series' />
      <Trending />
      <Recommended />
    </main>
  );
};

export default Home;


