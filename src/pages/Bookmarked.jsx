import SearchBar from "../components/SearchBar";
import Subtitle from "../components/Subtitle";

const Bookmarked = () => {
  return (
    <main className='mt-4 px-4 md:px-6 lg:mt-12 lg:px-0'>
      <SearchBar text={"Search for bookmarked shows"} />
      {/* <Subtitle  /> */}
    </main>
  );
}

export default Bookmarked