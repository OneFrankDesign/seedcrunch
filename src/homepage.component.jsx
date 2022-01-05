import React from "react";
import "./homepage.styles.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory__menu">
        <div className="menu__item">
          <div className="content">
            <h1 className="title">FRUITS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">VEGETABLES</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">GEAR</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">ORNAMENTALS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">HERBS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
