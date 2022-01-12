import React from "react";
import "./cart__item.styles.css";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart__item">
    <img src={imageUrl} alt="item" />
    <div className="item__details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
