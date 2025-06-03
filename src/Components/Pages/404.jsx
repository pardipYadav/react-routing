import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <>
      <div>
        <h1>Page Not Found</h1>
        <Link to="/">Go To Home</Link>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8onAEjhZl4lQDj8Xnz4VpqcrCIBK-uG23Q&s" />
      </div>
    </>
  );
};
export default PageNotFound;
