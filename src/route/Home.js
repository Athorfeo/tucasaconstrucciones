import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/">Home</Link> |{" "}
      <Link to="about">About</Link>
    </div>
  );
}

export default Home;
