import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import HomeIcon from "./svg/HomeIcon";
import MoviesIcon from "./svg/MoviesIcon";
import SeriesIcon from "./svg/SeriesIcon";
import BookmarkedIcon from "./svg/BookmarkedIcon";
import avatar from "../assets/image-avatar.png";

const Header = () => {
  const [isHeaderDisplay, setIsHeaderDisplay] = useState(true)
  const [color, setColor] = useState({
    homeIconColor: "",
    moviesIconColor: "",
    seriesIconColor: "",
    bookmarkedIconColor: "",
  });
  const [activeNav, setActiveNav] = useState({
    home: "white",
    movies: "",
    series: "",
    bookmarked: "",
  });

  const navigate = useNavigate()

  // let activeNav = { home: "white", movies: "", series: "", bookmarked: "" };

  useEffect(() => {

    console.log(window.location.pathname);
    
    
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "" 
    ) {
      navigate("/home");
    }

    if (window.location.href.includes("movies")) {
      // activeNav = { home: "", movies: "white", series: "", bookmarked: "" };
      setActiveNav({ home: "", movies: "white", series: "", bookmarked: "" });
    } else if (window.location.href.includes("series")) {
      // activeNav = { home: "", movies: "", series: "white", bookmarked: "" };
      setActiveNav({ home: "", movies: "", series: "white", bookmarked: "" });
    } else if (window.location.href.includes("bookmarked")) {
      // activeNav = { home: "", movies: "", series: "", bookmarked: "white" };
      setActiveNav({ home: "", movies: "", series: "", bookmarked: "white" });
    } else {
      // activeNav = { home: "white", movies: "", series: "", bookmarked: "" };
      setActiveNav({ home: "white", movies: "", series: "", bookmarked: "" });
    }

    
    
    
    if(window.location.href.includes("login") || window.location.href.includes("signup")) {
      setIsHeaderDisplay(false)
      console.log("hide header");
    }

    else {
      setIsHeaderDisplay(true)
      console.log("display header");
    }

    setColor((prev) => prev);

    console.log(activeNav);
  }, [window.location.href]);

  return (
    isHeaderDisplay && <header
      className='w-full h-[56px] bg-semiDarkBlue flex justify-between items-center px-4 md:w-[93%] 
    md:h-[72px] md:px-5 md:mt-6 md:mx-auto md:rounded-[10px] lg:min-w-[96px] lg:w-[96px] lg:h-[95vh] lg:flex-col lg:justify-start 
    lg:gap-[70px] lg:rounded-[20px] lg:mx-0 lg:ml-6 lg:py-6'
    >
      <img
        className='w-[25px] h-[20px] object-cover md:w-[32px] md:h-[26.5px]'
        src={logo}
        alt='logo image'
      />
      <nav>
        <ul className='flex items-center gap-6 lg:flex-col'>
          <li>
            <NavLink
              // onMouseOver={() =>
              //   setColor((prev) => {
              //     return { ...prev, homeIconColor: "red" };
              //   })
              // }
              // onMouseOut={() =>
              //   setColor((prev) => {
              //     return { ...prev, homeIconColor: "#5A698F" };
              //   })
              // }
              to='/home'
            >
              <HomeIcon color={activeNav.home || color.homeIconColor} />
            </NavLink>
          </li>
          <li>
            <NavLink
              // onMouseOver={() =>
              //   setColor((prev) => {
              //     return { ...prev, moviesIconColor: "red" };
              //   })
              // }
              // onMouseOut={() =>
              //   setColor((prev) => {
              //     return { ...prev, moviesIconColor: "#5A698F" };
              //   })
              // }
              to='/movies'
            >
              <MoviesIcon color={activeNav.movies || color.moviesIconColor} />
            </NavLink>
          </li>
          <li>
            <NavLink
              onMouseOver={() =>
                setColor((prev) => {
                  return { ...prev, seriesIconColor: "red" };
                })
              }
              onMouseOut={() =>
                setColor((prev) => {
                  return { ...prev, seriesIconColor: "#5A698F" };
                })
              }
              to='/series'
            >
              <SeriesIcon color={activeNav.series || color.seriesIconColor} />
            </NavLink>
          </li>
          <li>
            <NavLink
              onMouseOver={() =>
                setColor((prev) => {
                  return { ...prev, bookmarkedIconColor: "red" };
                })
              }
              onMouseOut={() =>
                setColor((prev) => {
                  return { ...prev, bookmarkedIconColor: "#5A698F" };
                })
              }
              to='/bookmarked'
            >
              <BookmarkedIcon
                color={activeNav.bookmarked || color.bookmarkedIconColor}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      <img
        className='w-[24px] h-[24px] rounded-full border border-white md:w-[32px] md:h-[32px] lg:mt-auto'
        src={avatar}
        alt='avatar image'
      />
    </header>
  );
};

export default Header;
