import { Link, NavLink, Outlet } from "react-router";

const College = () => {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h2>College pages</h2>
      <h3>
        <Link to="/"> Go to Home</Link>
      </h3>
      <NavLink className="link" to="">
        Student
      </NavLink>
      <NavLink className="link" to="department">
        Department
      </NavLink>
      <NavLink className="link" to="collegedetails">
        College details
      </NavLink>
      <Outlet />
    </div>
  );
};

export default College;
