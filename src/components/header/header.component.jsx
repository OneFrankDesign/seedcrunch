import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/floral-152207.svg";
import "./header.styles.css";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo__container">
      <Logo className="logo" />
      <div className="logo__text">
        <h1>SeedCrunch</h1>
      </div>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
