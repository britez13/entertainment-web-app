import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
// import { signInWithEmailAndPassword } from "firebase/auth";
import Subtitle from "../components/Subtitle";
import logo from "../assets/logo.svg";
import { UserDataContext } from "../context/UserContext";

const Login = () => {
  const { logIn } = UserDataContext()
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ emptyEmail: false, emptyPassword: false, invalidEmail: false }); 
 
  const navigate = useNavigate();

  const handleChange = (e) => {

    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    if(e.target.name === "email" && e.target.value.length) {
      setError(prev => { 
        return {...prev,  emptyEmail: false, invalidEmail: false }
      })
    }

    else if(e.target.name === "password" && e.target.value.length) {
      setError((prev) => {
        return { ...prev, emptyPassword: false };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (user.email && user.password) {
    //   setError((prev) => {
    //     return { emptyEmail: false, emptyPassword: false };
    //   });

    //   try {
    //     await logIn(user.email, user.password);
    //     // console.log(user);
    //     // const userAuthed = await signInWithEmailAndPassword(
    //     //   auth,
    //     //   user.email,
    //     //   user.password
    //     // );
    //     // console.log(userAuthed);
    //     navigate("/home");
    //   } catch (error) {
    //     alert(error);
    //   }
    // } 


    if (!user.email && !user.password) {
      setError({ emptyEmail: true, emptyPassword: true });
    } 
    
    else if (!user.email) {
      setError((prev) => ({...prev, emptyEmail: true}));
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      setError((prev) => ({ ...prev, invalidEmail: true }));
    } else if (!user.password) {
      setError((prev) => ({ ...prev, emptyPassword: true }));
    } else {
      setError((prev) => {
        return { emptyEmail: false, emptyPassword: false, invalidEmail: false };
      });

      try {
        await logIn(user.email, user.password);
        // console.log(user);
        // const userAuthed = await signInWithEmailAndPassword(
        //   auth,
        //   user.email,
        //   user.password
        // );
        // console.log(userAuthed);
        navigate("/home");
      } catch (error) {
        alert(error);
      }
    }




  };

  return (
    <main>
      <img
        className='w-[32px] h-[25.6px] mx-auto mt-12'
        src={logo}
        alt='Logo icon'
      />
      <form
        className='bg-semiDarkBlue w-[90%] min-h-[365px] mx-auto mt-12 rounded-[10px] px-[24px] py-[24px] 
      md:w-[400px] md:rounded-[20px]'
      >
        <Subtitle text={"Login"} />
        <div className='relative'>
          <input
            className={`bg-semiDarkBlue w-full mt-[40px] pl-4 pb-[17px] border-b ${
              error.emptyEmail || error.invalidEmail ? "border-red" : "border-greyishBlue"
            } outline-none focus:border-white
         text-white placeholder:opacity-50 placeholder:mix-blend-normal font-light text-[15px]`}
            type='email'
            placeholder='Email address'
            name='email'
            onChange={handleChange}
          />
          <div className='text-red font-light text-[13px] absolute top-[50%] right-3'>
            {error.emptyEmail ? "Can't be empty" : error.invalidEmail ? "Invalid email" : ""}
          </div>
        </div>

        <div className='relative'>
          <input
            className={`bg-semiDarkBlue w-full mt-[24px] pl-4 pb-[17px] border-b ${
              error.emptyPassword ? "border-red" : "border-greyishBlue"
            } outline-none focus:border-white
         text-white placeholder:opacity-50 placeholder:mix-blend-normal font-light text-[15px]`}
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <div className='text-red font-light text-[13px] absolute top-[40%] right-3'>
            {error.emptyPassword ? "Can't be empty" : ""}
          </div>
        </div>
        <button
          className='bg-red mt-[40px] w-full py-3 rounded-md text-white text-[15px] font-light hover:bg-white hover:text-semiDarkBlue'
          type='submit'
          onClick={handleSubmit}
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
};

export default Login;
