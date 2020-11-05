import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from './../../components/CollectionPreview';

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
