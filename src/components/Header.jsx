import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import logo from "../assets/logo.svg";
import HomeIcon from "./svg/HomeIcon";
import MoviesIcon from "./svg/MoviesIcon";
import SeriesIcon from "./svg/SeriesIcon";
import BookmarkedIcon from "./svg/BookmarkedIcon";
import avatar from "../assets/image-avatar.png";
import { UserDataContext } from "../context/UserContext";


const Header = () => {
  const [isHeaderDisplay, setIsHeaderDisplay] = useState(true);
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

  
  const {user, setShows} = UserDataContext()

  const navigate = useNavigate();

  const getUserData = async() => {
    
    const docRef = doc(db, "users", `${user?.email}`);

    try {
      const docSnap = await getDoc(docRef);
      const savedShows = docSnap.data().shows
      if(savedShows.length > 0) {
        setShows(savedShows);
      }
      
    } catch (error) {
      console.log(error);
    }

  }




  useEffect(() => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      navigate("/home");
    }

    if (window.location.href.includes("movies")) {
      setActiveNav({ home: "", movies: "white", series: "", bookmarked: "" });
    } else if (window.location.href.includes("series")) {
      setActiveNav({ home: "", movies: "", series: "white", bookmarked: "" });
    } else if (window.location.href.includes("bookmarked")) {
      setActiveNav({ home: "", movies: "", series: "", bookmarked: "white" });
    } else {
      setActiveNav({ home: "white", movies: "", series: "", bookmarked: "" });
    }

    if (
      window.location.href.includes("login") ||
      window.location.href.includes("signup")
    ) {
      setIsHeaderDisplay(false);
    } else {
      setIsHeaderDisplay(true);
    }

    setColor((prev) => prev);
  }, [window.location.href]);


  
  
  useEffect( () => {
    getUserData()
  }, [])


  return (
    isHeaderDisplay && (
      <header
        className='w-full h-[56px] bg-semiDarkBlue flex justify-between items-center px-4 md:w-[93%] 
    md:h-[72px] md:px-5 md:mt-6 md:mx-auto md:rounded-[10px] lg:min-w-[96px] lg:w-[96px] lg:h-[95vh] lg:flex-col lg:justify-start 
    lg:gap-[70px] lg:rounded-[20px] lg:mx-0 lg:ml-6 lg:mr-auto lg:py-6'
      >
        <img
          className='w-[25px] h-[20px] object-cover md:w-[32px] md:h-[26.5px]'
          src={logo}
          alt='logo image'
        />
        <nav>
          <ul className='flex items-center gap-6 lg:flex-col lg:gap-10'>
            <li>
              <NavLink to='/home'>
                <HomeIcon color={activeNav.home || color.homeIconColor} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/movies'>
                <MoviesIcon color={activeNav.movies || color.moviesIconColor} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/series'>
                <SeriesIcon color={activeNav.series || color.seriesIconColor} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/bookmarked'>
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
    )
  );
};

export default Header;
