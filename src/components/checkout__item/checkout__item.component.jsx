import React from "react";

import "./checkout__item.styles.css";

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button">
      <i class="fas fa-trash"></i>
    </span>
  </div>
);

export default CheckoutItem;
