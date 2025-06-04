import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Navbars from "./Components/Navbar/Navbars";
import College from "./Components/Pages/College";
import Login from "./Components/Pages/Login";
import Student from "./Components/Pages/CollegesData/Student";
import Department from "./Components/Pages/CollegesData/department";
import CollegeDetails from "./Components/Pages/CollegesData/CollegeDetails";
import PageNotFound from "./Components/Pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbars />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collegedetails" element={<CollegeDetails />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
