import React from "react";
import "./collection__item.styles.css";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection__item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection__footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
