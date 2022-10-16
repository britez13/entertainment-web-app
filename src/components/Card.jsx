import React from "react";
import MovieIcon from "../assets/icon-nav-movies.svg";
import SeriesIcon from "../assets/icon-nav-tv-series.svg";
import CircleIcon from "../assets/icon-circle.svg";
import PlayIcon from "../assets/icon-play.svg";

const Card = ({ item }) => {
  return (
    <div className='max-w-[164px] h-[154px] md:max-w-[220px] md:h-[192px] lg:max-w-[280px] lg:h-[226px]'>
      <div
        id='overlay'
        className='w-full h-[110px] rounded-lg object-cover md:h-[140px] lg:h-[174px] relative cursor-pointer'
      >
        <img
          className='w-full h-full rounded-lg object-cover'
          src={item.thumbnail.regular.large}
          alt={item.title}
        />
        <div className='flex justify-center items-center absolute rounded-lg inset-0 z-10 hover:bg-[#00000080]'>
          <div
            id='play'
            className='hidden w-[97px] h-[38px] rounded-[28.5px] bg-[#ffffff3b] pl-2 md:w-[117px] md:h-[48px]'
          >
            <img
              className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]'
              src={PlayIcon}
              alt='Play icon'
            />
            <p className='text-white font-medium text-lg'>Play</p>
          </div>
        </div>
        <div className='absolute z-20 top-2 right-2 w-[25px] h-[25px] rounded-full bg-darkBlue opacity-50 mix-blend-normal md:top-4 md:right-4 md:w-[32px] md:h-[32px]'></div>
      </div>
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
      <h2 className='text-white text-sm font-medium md:text-lg'>
        {item.title}
      </h2>
    </div>
  );
};

export default Card;
