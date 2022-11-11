import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { data } from "../data";

const UserContext = createContext();

export function UserContextProvider({ children }) {

  const [user, SetUser] = useState();
  const [shows, setShows] = useState(data);

  const [searchedShow, setSearchedShow] = useState({
    homeSearch: "",
    moviesSearch: "",
    seriesSearch: "",
    bookmarkedSearch: "",
  });


  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    // setDoc(doc(db, "users", email), {
    //   savedMovies: [],
    // });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <UserContext.Provider value={{ signUp, logIn, logOut, user, shows, setShows, searchedShow, setSearchedShow }}>
      {children}
    </UserContext.Provider>
  );
}

export function UserDataContext() {
  return useContext(UserContext);
}
