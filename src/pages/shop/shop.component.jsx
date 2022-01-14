import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import "./shop.styles.css";

const ShopPage = ({ collections }) => (
  <div className="shop__page">
    <h1 className="title">Collections</h1>
    <CollectionsOverview collections={collections} />
  </div>
);

export default ShopPage;
