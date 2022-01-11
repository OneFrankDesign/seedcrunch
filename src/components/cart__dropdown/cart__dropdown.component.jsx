import React from "react";
import CustomButton from "../custom__button/custom__button.component";
import "./cart__dropdown.styles.css";

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;
