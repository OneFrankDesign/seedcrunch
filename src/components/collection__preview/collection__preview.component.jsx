import React from "react";
import "./collection__preview.styles.css";

import CollectionItem from "../collection__item/collection__item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection__preview">
    <h3 className="title">{title.toUpperCase()}</h3>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
