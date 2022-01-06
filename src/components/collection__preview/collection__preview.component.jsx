import React from "react";
import "./collection__preview.styles.css";

const CollectionPreview = ({ title, items }) => (
  <div className="collection__preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <div key={id} className="collection__item">
            <div className="image" />
            <div className="collection__footer">
              <span className="name">{otherItemProps.name}</span>
              <span className="price">{otherItemProps.price}</span>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
