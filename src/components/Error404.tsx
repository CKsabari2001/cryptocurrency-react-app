import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <h1>404</h1>
      <Link to={"/"}>Home</Link>
    </>
  );
}

export default Error404;
