import React from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart__icon.styles.css";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart__icon" onClick={toggleCartHidden}>
    <ShoppingCartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
