import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
function Navbar({ loggedIn, setLoggedIn }) {
    const Navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    Navigate("/login");
  };
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container mx-1">
          <Link className="navbar-brand" to="/">
            <img
              src="https://mindemy.app/wp-content/uploads/2024/02/Asset-2.png#114"
              height="50"
              width="100%"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="search-bar d-flex align-items-center mx-auto">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search for anything"
              />
              <button className="btn btn-outline-secondary search-button">
                <FaSearch />
              </button>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link  ml-2" to="/">
                  Home
                </Link>
              </li>
              {
              loggedIn ? <>
                 <li className="nav-item">
                 <Link className="nav-link  ml-2" to="/my-courses">
                   My Courses
                 </Link>
               </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={logout}>
                    Logout
                  </button>
                </li></>
               : 
                <>
                <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <FaUser size={20} className="mr-1" />
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  ml-2" to="/signup">
                  <FaUser size={20} className="mr-1" />
                  Register
                </Link>
              </li></>
              }

              

             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
