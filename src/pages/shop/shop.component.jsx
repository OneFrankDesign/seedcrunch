import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection__preview/collection__preview.component";
import "./shop.styles.css";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop__page">
        <h1 className="title">Collections</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
