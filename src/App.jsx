// import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Bookmarked from "./pages/Bookmarked";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
        <Route path='/bookmarked' element={<Bookmarked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


