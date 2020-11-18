import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './../CollectionPreview';

import styles from './CollectionOverview.module.scss';
import { selectCollections } from './../../redux/shop/selectors';

function CollectionOverview({ collections }) {
  return (
    <div className={styles.container}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
