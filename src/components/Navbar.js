import React from "react";
import { Link } from "react-router-dom";
import {useLogout} from "../hooks/useLogout"
const Navbar = () => {
  const {logout}=useLogout();
  return (
    <nav>
      <h1>My Library</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li onClick={logout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
