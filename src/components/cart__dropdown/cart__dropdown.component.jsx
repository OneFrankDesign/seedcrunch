import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom__button/custom__button.component";
import CartItem from "../cart__item/cart__item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart__dropdown.styles.css";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
