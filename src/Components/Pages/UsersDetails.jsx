import { useParams } from "react-router";
import { Link } from "react-router";

const UsersDetails = () => {
  const userIdByuseParam = useParams();
  console.log(userIdByuseParam);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>user details of {userIdByuseParam.id}</h2>
      <Link to="/users">back</Link>
    </div>
  );
};

export default UsersDetails;
