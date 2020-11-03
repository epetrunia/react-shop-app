import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import styles from './Directory.module.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          large: true,
          id: 4,
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          large: true,
          id: 5,
        },
      ],
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className={styles.directoryMenu}>
        {sections.map(({ title, imageUrl, large, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} large={large} />
        ))}
      </div>
    );
  }
}

export default Directory;
