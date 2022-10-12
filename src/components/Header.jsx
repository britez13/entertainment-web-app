import logo from "../assets/logo.svg";
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as SeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";
import IconHome from "./IconHome";
import avatar from "../assets/image-avatar.png";

const Header = () => {
  return (
    <header className='w-full h-[56px] bg-semiDarkBlue flex justify-between items-center px-4 md:w-[93%] 
    md:h-[72px] md:px-5 md:mt-6 md:mx-auto md:rounded-[10px] lg:w-[96px] lg:h-[95vh] lg:flex-col lg:justify-start 
    lg:gap-[70px] lg:rounded-[20px] lg:mx-0 lg:ml-6 lg:py-6'>
      <img
        className='w-[25px] h-[20px] object-cover md:w-[32px] md:h-[26.5px]'
        src={logo}
        alt='logo image'
      />
      <nav className='flex items-center gap-6 lg:flex-col'>
        <IconHome fill={"#fff"} />
        <MoviesIcon className='fill-white hover:fill-red cursor-pointer' />
        <SeriesIcon />
        <BookmarkIcon />
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
