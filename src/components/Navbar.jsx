import React from "react";
import logo from "../assets/images.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="flex gap-10 justify-around mt-5">
      <Link to="/">
        <div>
          <img src={logo} alt="brand logo" style={{ height: "50px" }} />
        </div>
      </Link>
      <div>
        {/* <form action="">
          <input type="text" placeholder="Search User..." />
        </form> */}
      </div>
      <div>
        <Link to="/login">
          <button className="text-white text-sm bg-red-500 hover:bg-red-300 px-4 py-0.5 rounded-sm hover:cursor-pointer">
            {path === "/" || path === "/login" ? "Sign in" : "Sign out"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
