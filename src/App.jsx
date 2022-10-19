// import reactLogo from './assets/react.svg'
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Bookmarked from "./pages/Bookmarked";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import SignUp from "./pages/SignUp";
import { data } from "./data";

export const DataContext = createContext();

function App() {
  const [shows, setShows] = useState(data);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <DataContext.Provider value={{ shows, setShows }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='home' element={<Home />} />
            <Route path='movies' element={<Movies />} />
            <Route path='series' element={<Series />} />
            <Route path='bookmarked' element={<Bookmarked />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
