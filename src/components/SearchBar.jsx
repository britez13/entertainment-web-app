import { useState } from "react";
import IconSearch from "../assets/icon-search.svg";
import { UserDataContext } from "../context/UserContext";

const SearchBar = ({ text }) => {
  // const [focus, setFocus] = useState(false);
  const { searchedShow, setSearchedShow } = UserDataContext();

  // console.log(searchedShow)

  const handleChange = (e) => {
    
    if (window.location.pathname.includes("home")) {
      setSearchedShow( prev => { 
        return {...prev, homeSearch: e.target.value};
      })
    } 
    
    else if (window.location.pathname.includes("movies")) {
      setSearchedShow((prev) => {
        return { ...prev, moviesSearch: e.target.value };
      });
    } 
    else if (window.location.pathname.includes("series")) {
      setSearchedShow((prev) => {
        return { ...prev, seriesSearch: e.target.value };
      });
    }

    else {
      setSearchedShow((prev) => {
        return { ...prev, bookmarkedSearch: e.target.value };
      });
    }
  }

  return (
    <section className='flex items-center gap-4 overflow-y-hidden'>
      <img
        className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'
        src={IconSearch}
        alt='icon serch'
      />
      <input
        id='input'
        className='relative bg-darkBlue text-white caret-red text-base font-light grow outline-0 
        placeholder:opacity-50 placeholder:mix-blond-normal md:text-2xl'
        type='text'
        placeholder={text}
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchBar;
