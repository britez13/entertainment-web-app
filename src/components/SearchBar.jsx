import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconSearch from "../assets/icon-search.svg";
import { UserDataContext } from "../context/UserContext";

const SearchBar = ({ text }) => {
  const [focus, setFocus] = useState(false);
  const { user, setSearchedShow } = UserDataContext();
  const navigate = useNavigate();


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

  useEffect(() => {
    if (!user?.email) {
      navigate("/login");
    }
  });

  return (
    <>
      <section className='flex items-center gap-4'>
        <img
          className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'
          src={IconSearch}
          alt='icon serch'
        />
        <input
          id='input'
          className='relative bg-darkBlue text-white caret-red text-base font-light grow outline-0 
        placeholder:opacity-50 placeholder:mix-blond-normal md:text-2xl '
          type='search'
          placeholder={text}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </section>
      <div className='mt-3 flex items-center gap-4 lg:mr-3'>
        <span className='w-[18px] h-0 md:w-[24px]'></span>
        <span
          id='underline'
          className={`w-full h-[1px] bg-greyishBlue ${focus ? 'active' : ''}`}
        ></span>
      </div>
    </>
  );
};

export default SearchBar;
