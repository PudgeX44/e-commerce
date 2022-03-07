import React, { useState } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../ContextReducer/Context";
import { auth } from "../firebase";

function Header() {
  let navigate = useNavigate();
  const [{ cart, wishlist, user }, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const handleAuthentication = () => {
    auth.signOut();
  };
  const searchProduct = () => {
    if (search) {
      dispatch({ type: "SEARCH", payload: search });
      navigate("/search");
    }
  };
  return (
    <div className="header">
      <div className="top-header">
        <div className="top-header-sections">
          <h5 className="top-header-elements">
            {user && `User: ${user.email}`}
          </h5>
          <h5
            className="top-header-elements"
            onClick={(e) => (user ? navigate("/wishlist") : navigate("/login"))}
          >
            My Wishlist ({wishlist.length})
          </h5>
          <h5
            className="top-header-elements"
            onClick={(e) => (user ? navigate("/cart") : navigate("/login"))}
          >
            Cart ({cart.length})
          </h5>
          <h5
            className="top-header-elements"
            onClick={user ? handleAuthentication : (e) => navigate("/login")}
          >
            {user ? "Logout" : "Login"}
          </h5>
        </div>
      </div>
      <div className="bottom-header">
        <div className="bottom-header-sections">
          <h1 onClick={(e) => navigate("/")}>E-COMMERCE</h1>
          <div className="bottom-header-search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />
            <FaSearch className="icons" onClick={searchProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
