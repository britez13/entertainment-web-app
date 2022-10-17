import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Login = () => {
  return (
    <main>
      <img
        className='w-[32px] h-[25.6px] mx-auto mt-12'
        src={logo}
        alt='Logo icon'
      />
      <form
        className='bg-semiDarkBlue w-[90%] min-h-[365px] mx-auto mt-12 rounded-[10px] px-[24px] py-[24px] 
      md:max-w-[400px] md:rounded-[20px]'
      >
        <h1 className='text-white text-[32px] font-light tracking-[-0.5px]'>
          Login
        </h1>
        <input
          className='bg-semiDarkBlue w-full mt-[40px] pl-4 pb-[17px] border-b border-greyishBlue
         text-white opacity-50 mix-blend-normal font-light text-[15px]'
          type='text'
          placeholder='Email address'
        />
        <input
          className='bg-semiDarkBlue w-full mt-[24px] pl-4 pb-[17px] border-b border-greyishBlue
         text-white opacity-50 mix-blend-normal font-light text-[15px]'
          type='text'
          placeholder='Password'
        />
        <button
          className='bg-red mt-[40px] w-full py-3 rounded-md text-white text-[15px] font-light hover:bg-white hover:text-semiDarkBlue'
          type='submit'
        >
          Login to your account
        </button>
        <p className='mt-[24px] text-center text-white text-[15px] font-light'>
          Don't have an account?{" "}
          <span className='ml-[6px] text-red'>
            <Link to='/signup'>Sign Up</Link>
          </span>
        </p>
      </form>
    </main>
  );
}

export default Login
