
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";

const Header = () => {
  return (
    <header className="w-full h-[56px] bg-semiDarkBlue flex justify-between items-center px-4">
        <img className="w-[25px] h-[20px] object-cover" src={logo} alt="logo image" />
        <nav>

        </nav>
        <img className="w-[24px] h-[24px]" src={avatar} alt="avatar image" />
    </header>
  )
}

export default Header
