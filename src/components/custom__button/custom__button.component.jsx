import React from "react";

import "./custom__button.styles.css";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom__button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
