import React from 'react';
import styles from './CollectionPreview.module.scss';
import CollectionItem from './../CollectionItem';

function CollectionPreview({ title, items }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
