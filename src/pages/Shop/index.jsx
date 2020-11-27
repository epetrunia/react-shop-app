import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from './../../components/CollectionOverview';
import Collection from '../Collection';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from './../../firebase/utils';

class Shop extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) =>
      convertCollectionsSnapshotToMap(snapshot)
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

export default Shop;
