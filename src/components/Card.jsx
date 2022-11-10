import React, { useState } from "react";
import { db } from "../firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import MovieIcon from "../assets/icon-nav-movies.svg";
import SeriesIcon from "../assets/icon-nav-tv-series.svg";
import CircleIcon from "../assets/icon-circle.svg";
import PlayIcon from "../assets/icon-play.svg";
import BookmarkedToggle from "./svg/BookmarkedToggle";
import { UserDataContext } from "../context/UserContext";
  const Card = ({ item, shows, setShows }) => {
    const { user } = UserDataContext();
  
   const userDataRef = doc(db, "users", `${user?.email}`);
  
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
     } else  {
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
    <div className='max-w-[164px] h-[154px] md:max-w-[220px] md:h-[192px] lg:max-w-[280px] lg:h-[226px]'>
      <div
        id='container'
        className='w-full h-[110px] rounded-lg object-cover md:h-[140px] lg:h-[174px] relative'
      >
        <img
          className='w-full h-full rounded-lg object-cover'
          src={item.thumbnail.regular.large}
          alt={item.title}
        />
        <div
          id='overlay'
          className='bg-[#00000080] flex justify-center items-center absolute rounded-lg inset-0 z-10'
        >
          <div
            id='play'
            className='flex items-center gap-4 w-[97px] h-[38px] rounded-[28.5px] cursor-pointer bg-[#ffffff3b] pl-2 
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
          rounded-full bg-darkBlue opacity-80 mix-blend-normal md:top-4 md:right-4 md:w-[32px] md:h-[32px]'
        >
          <BookmarkedToggle color={item.isBookmarked ? "white" : "none"} />
        </div>
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
