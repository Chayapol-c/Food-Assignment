import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-start w-full mb-20">
      <Link to="/">
        <h1 className="capitalize font-bold">cooking master</h1>
      </Link>
    </div>
  );
};

export default NavBar;
