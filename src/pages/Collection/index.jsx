import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem';

import styles from './Collection.module.scss';
import { selectCollection } from './../../redux/shop/selectors';

function Collection({ collection }) {
  const { title, items } = collection;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.items}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
