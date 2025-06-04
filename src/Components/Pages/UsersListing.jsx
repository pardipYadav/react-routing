import { Link } from "react-router";
const UsersListing = () => {
  const userListing = [
    {
      id: "1",
      name: "pardeep",
    },
    {
      id: "2",
      name: "abhinav",
    },
    {
      id: "3",
      name: "simran",
    },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>user list with dynamic routes </h2>
      {userListing.map((item, index) => (
        <h2 key={index}>
          <Link to={"/users/" + item.id}>{item.name}</Link>
        </h2>
      ))}
      <hr />
      <h2>user list with dynamic optional segment </h2>
      {userListing.map((item, index) => (
        <h2 key={index}>
          <Link to={"/users/" + item.id + "/" + item.name}>{item.name}</Link>
        </h2>
      ))}
    </div>
  );
};

export default UsersListing;
