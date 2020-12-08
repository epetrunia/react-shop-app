import React from 'react';
import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer } from './CollectionPreview.style';
import CollectionItem from './../CollectionItem';

function CollectionPreview({ title, items, history, match, routeName }) {
  return (
    <CollectionPreviewContainer>
      <h1 onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </h1>
      <div>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);
