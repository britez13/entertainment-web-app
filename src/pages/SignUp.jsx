
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const SignUp = () => {
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
          Sign Up
        </h1>
        <input
          className='bg-semiDarkBlue w-full mt-[40px] pl-4 pb-[17px] border-b border-greyishBlue outline-none font-light text-[15px]
         text-white placeholder:opacity-50 placeholder:mix-blend-normal '
          type='text'
          placeholder='Email address'
        />
        <input
          className='bg-semiDarkBlue w-full mt-[24px] pl-4 pb-[17px] border-b border-greyishBlue outline-none font-light text-[15px]
         text-white placeholder:opacity-50 placeholder:mix-blend-normal'
          type='text'
          placeholder='Password'
        />
        <input
          className='bg-semiDarkBlue w-full mt-[24px] pl-4 pb-[17px] border-b border-greyishBlue outline-none
         text-white placeholder:opacity-50 placeholder:mix-blend-normal font-light text-[15px]'
          type='text'
          placeholder='Repeat Password'
        />
        <button
          className='bg-red mt-[40px] w-full py-3 rounded-md text-white text-[15px] font-light hover:bg-white hover:text-semiDarkBlue'
          type='submit'
        >
          Create an account
        </button>
        <p className='mt-[24px] text-center text-white text-[15px] font-light'>
          Already have an account?{" "}
          <span className='ml-[6px] text-red'>
            <Link to='/login'>Login</Link>
          </span>
        </p>
      </form>
    </main>
  );
}

export default SignUp