import { Link, Outlet } from "react-router";
import "./Navbar.css";

const Navbars = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link>
            <h2>Logo</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/college">college</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Navbars;
