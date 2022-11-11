import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import logo from "../assets/logo.svg";
import { UserDataContext } from "../context/UserContext";

const SignUp = () => {
  const { signUp } = UserDataContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    password2Error: false,
    notEqualError: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    if (e.target.name === "email" && e.target.value.length) {
      setError((prev) => {
        return { ...prev, emailError: false };
      });
    } else if (e.target.name === "password" && e.target.value.length) {
      setError((prev) => {
        return { ...prev, passwordError: false, notEqualError: false };
      });
    } else if (e.target.name === "password2" && e.target.value.length) {
      setError((prev) => {
        return { ...prev, password2Error: false, notEqualError: false };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email && !user.password && !user.password2) {
      setError({ emailError: true, passwordError: true, password2Error: true });
    } else if (!user.email && !user.password) {
      setError((prev) => ({ ...prev, emailError: true, passwordError: true }));
    } else if (!user.email && !user.password2) {
      setError((prev) => ({ ...prev, emailError: true, password2Error: true }));
    } else if (!user.password && !user.password2) {
      console.log("here?");

      setError((prev) => ({
        ...prev,
        passwordError: true,
        password2Error: true,
      }));
    } else if (!user.email) {
      setError((prev) => ({ ...prev, emailError: true }));
    } else if (!user.password) {
      console.log("here");
      setError((prev) => ({
        ...prev,
        passwordError: true,
        notEqualError: false,
      }));
    } else if (!user.password2) {
      console.log("here  ?");

      setError((prev) => ({ ...prev, password2Error: true }));
    } else if (user.password !== user.password2) {
      setError((prev) => ({ ...prev, notEqualError: true }));
    } else if (user.email && user.password) {
      try {
        console.log(user);
        // const userAuthed = await createUserWithEmailAndPassword(auth, user.email, user.password)
        await signUp(user.email, user.password);
        await setDoc(doc(db, "users", user.email), {
          shows: [],
        });
        // console.log();
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
        <h1 className='text-white text-[32px] font-light tracking-[-0.5px]'>
          Sign Up
        </h1>
        <div className='relative'>
          <input
            className={`bg-semiDarkBlue w-full mt-[40px] pl-4 pb-[17px] border-b ${
              error.emailError ? "border-red" : "border-greyishBlue"
            } outline-none focus:border-white font-light text-[15px]
         text-white placeholder:opacity-50 placeholder:mix-blend-normal`}
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
          <div className='text-red font-light text-[13px] absolute top-[50%] right-3'>
            {error.emailError ? "Can't be empty" : ""}
          </div>
        </div>

        <div className='relative'>
          <input
            className={`bg-semiDarkBlue w-full mt-[24px] pl-4 pb-[17px] border-b ${
              error.passwordError || error.notEqualError
                ? "border-red"
                : "border-greyishBlue"
            } outline-none focus:border-white font-light text-[15px]
         text-white placeholder:opacity-50 placeholder:mix-blend-normal`}
            type='text'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <div className='text-red font-light text-[13px] absolute top-[50%] right-3'>
            {error.notEqualError
              ? "Password doesn't match"
              : error.passwordError
              ? "Can't be empty"
              : ""}
          </div>
        </div>

        <div className='relative'>
          <input
            className={`bg-semiDarkBlue w-full mt-[24px] pl-4 pb-[17px] border-b ${
              error.password2Error || error.notEqualError
                ? "border-red"
                : "border-greyishBlue"
            } outline-none focus:border-white
         text-white placeholder:opacity-50 placeholder:mix-blend-normal font-light text-[15px]`}
            type='text'
            placeholder='Repeat Password'
            name='password2'
            onChange={handleChange}
          />
          <div className='text-red font-light text-[13px] absolute top-[50%] right-3'>
            {error.notEqualError
              ? "Password doesn't match"
              : error.password2Error
              ? "Can't be empty"
              : ""}
          </div>
        </div>
        <button
          className='bg-red mt-[40px] w-full py-3 rounded-md text-white text-[15px] font-light hover:bg-white hover:text-semiDarkBlue'
          type='submit'
          onClick={handleSubmit}
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
};

export default SignUp;
