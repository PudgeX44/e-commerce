import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../ContextReducer/Context";

function Footer() {
  let navigate = useNavigate();
  const [{ user }] = useStateValue();
  return (
    <div className="footer">
      <div className="footer-top-section">
        <h2>E-COMMERCE</h2>
        <div className="footer-top-icons">
          <Link
            to="//facebook.com"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <FaFacebook className="icons" />
          </Link>
          <Link
            to="//twitter.com"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <FaTwitter className="icons" />
          </Link>
          <Link
            to="//instagram.com"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <FaInstagram className="icons" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="footer-divs">
          <h4 className="footer-titles">CONTACT</h4>
          <p className="footer-title-contact">
            21 React St. Quezon City, Philippines
          </p>
          <p className="footer-title-contact">e-commerce@gmail.com</p>
          <p className="footer-title-contact">09123457890</p>
        </div>
        <div className="footer-divs">
          <h4 className="footer-titles">MENU</h4>
          <p className="footer-title-details" onClick={(e) => navigate("/")}>
            Home
          </p>
          <p
            className="footer-title-details"
            onClick={(e) => (user ? navigate("/wishlist") : navigate("/login"))}
          >
            Wishlist
          </p>
          <p
            className="footer-title-details"
            onClick={(e) => (user ? navigate("/cart") : navigate("/login"))}
          >
            Cart
          </p>
        </div>
        <div className="footer-divs">
          <h4 className="footer-titles">FAQ</h4>
          <p className="footer-title-details" onClick={(e) => navigate("/faq")}>
            How to buy
          </p>
          <p className="footer-title-details" onClick={(e) => navigate("/faq")}>
            How to checkout
          </p>
          <p className="footer-title-details" onClick={(e) => navigate("/faq")}>
            How to pay
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
