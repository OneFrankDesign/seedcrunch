import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/floral-152207.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.css";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
