import React from "react";

import CollectionItem from "../../components/collection__item/collection__item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CollectionPage = () => {
  let params = useParams();
  const collection = useSelector(selectCollection(params.collectionId));
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
