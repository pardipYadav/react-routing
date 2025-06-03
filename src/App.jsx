import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Navbars from "./Components/Navbar/Navbars";
import PageNotFound from "./Components/Pages/404";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
