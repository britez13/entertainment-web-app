import React from 'react'
import MovieIcon from "../assets/icon-nav-movies.svg"
import SeriesIcon from "../assets/icon-nav-tv-series.svg"
import CircleIcon from "../assets/icon-circle.svg"

const Card = ({item}) => {

  return (
    <div className='max-w-[164px] h-[154px] md:max-w-[220px] md:h-[192px] lg:max-w-[280px] lg:h-[226px]'>
      <img
        className='w-full h-[110px] rounded-lg object-cover md:h-[140px] lg:h-[174px]'
        src={item.thumbnail.regular.large}
        alt={item.title}
      />
      <div className='flex items-center gap-1 my-1 text-white text-[13px] font-light opacity-75 mix-blend-normal'>
        <p>{item.year}</p>
        <span>*</span>
        <span className='flex items-center gap-1'>
          <img
            className='w-[10px] h-[10px]'
            src={item.category === "Movie" ? MovieIcon : SeriesIcon}
            alt={item.category + "icon"}
          />{" "}
          <p>{item.category}</p>{" "}
        </span>
        <span><img src={CircleIcon} alt="circle icon" /></span>
        <p>{item.rating}</p>
      </div>
      <h2 className='text-white text-sm font-medium md:text-lg'>
        {item.title}
      </h2>
    </div>
  );
}

export default Card

