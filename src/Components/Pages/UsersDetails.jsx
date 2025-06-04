import { useParams } from "react-router";
import { Link } from "react-router";

const UsersDetails = () => {
  const userIdByuseParam = useParams();
  console.log(userIdByuseParam);
  console.log(userIdByuseParam);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>
        user details of userId: {userIdByuseParam.id}{" "}
        {userIdByuseParam.name ? `and name is : ${userIdByuseParam.name}` : ""}{" "}
      </h2>
      <Link to="/users">back</Link>
    </div>
  );
};

export default UsersDetails;
