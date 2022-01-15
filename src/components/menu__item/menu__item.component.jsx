import React from "react";
import { Link } from "react-router-dom";
import "./menu__item.styles.css";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={`${size} menu__item`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      >
        {" "}
      </div>
      <div className="content">
        <Link className="link" style={{ textDecoration: "none" }} to={linkUrl}>
          <h1 className="title">{title.toUpperCase()}</h1>

          <span className="subtitle">SHOP NOW</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
