import { db } from "../firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserDataContext } from "../context/UserContext";


import MovieIcon from "../assets/icon-nav-movies.svg";
import SeriesIcon from "../assets/icon-nav-tv-series.svg";
import CircleIcon from "../assets/icon-circle.svg";
import PlayIcon from "../assets/icon-play.svg";
import BookmarkedToggle from "./svg/BookmarkedToggle";

const TrendingCard = ({ item,shows, setShows }) => {

const handleClick = async () => {
  if (item.isBookmarked) {
    setShows((prev) => {
      const newShows = prev.map((show) => {
        if (show.title === item.title) {
          console.log(`${show.title}: ${show.isBookmarked}`);
          return { ...show, isBookmarked: false };
        }
        return show;
      });
      return newShows;
    });

    // console.log(shows);

    try {
      await updateDoc(userDataRef, {
        shows: { ...shows },
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    setShows((prev) => {
      const newShows = prev.map((show) => {
        if (show.title === item.title) {
          console.log(`${show.title}: ${show.isBookmarked}`);
          return { ...show, isBookmarked: true };
        }

        return show;
      });

      return newShows;
    });

    // console.log(shows);

    try {
      await updateDoc(userDataRef, {
        shows: { ...shows },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

  return (
    <div
      id='container'
      className='min-w-[240px] h-[140px] snap-start md:min-w-[470px] md:h-[230px] md:basis-[470px] relative'
    >
      <img
        className='w-full h-full rounded-lg object-cover'
        src={item.thumbnail.trending.large}
        alt={item.title}
      />

      <div className='absolute rounded-lg bottom-[24px] left-[24px] z-10'>
        <div className='flex items-center gap-2 mt-2 text-white text-[13px] font-light opacity-75 mix-blend-normal'>
          <p>{item.year}</p>
          <span className='mx-[2px]'>
            <img src={CircleIcon} alt='circle icon' />
          </span>
          <span className='flex items-center gap-1'>
            <img
              className='w-[10px] h-[10px]'
              src={item.category === "Movie" ? MovieIcon : SeriesIcon}
              alt={item.category + "icon"}
            />{" "}
            <p>{item.category}</p>{" "}
          </span>
          <span className='mx-[2px]'>
            <img src={CircleIcon} alt='circle icon' />
          </span>
          <p>{item.rating}</p>
        </div>
        <h2 className='text-white text-2xl font-medium'>{item.title}</h2>
      </div>

      <div
        id='overlay'
        className='bg-[#00000080] flex justify-center items-center absolute rounded-lg inset-0 z-10'
      >
        <div
          id='play'
          className='flex items-center gap-5 w-[97px] h-[38px] rounded-[28.5px] cursor-pointer bg-[#ffffff3b] pl-2 
          md:w-[117px] md:h-[48px]'
        >
          <img
            className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]'
            src={PlayIcon}
            alt='Play icon'
          />
          <p className='text-white font-medium text-lg'>Play</p>
        </div>
      </div>

      <div
        onClick={handleClick}
        className='flex justify-center items-center absolute z-20 top-2 right-2 w-[25px] h-[25px] 
          rounded-full bg-darkBlue opacity-1 mix-blend-normal md:top-4 md:right-4 md:w-[32px] md:h-[32px]'
      >
        <BookmarkedToggle color={item.isBookmarked ? "white" : "none"} />
      </div>
    </div>

    // <div className="bg-red min-w-[470px] h-[230px] inline-block">
    //   <div className="bg-semiDarkBlue w-full h-[50%] inline-block">
    //     <h2>Hola a todos los presentes</h2>
    //   </div>
    // </div>

    // <img
    //   className='w-[240px] h-[140px] snap-start rounded-lg object-cover md:w-[470px] md:h-[230px]'
    //   src={item.thumbnail.trending.large}
    //   alt={item.title}
    // />
  );
};

export default TrendingCard;
