import React from 'react';
import './shop.styles.scss';
import { collections } from '../../data';
import { CollectionsPreview } from '../../components/collections-preview/collections-preview.component';


export class ShopPage extends React.Component {
  state = { collections }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop'>
        {collections.map(({ id, ...collectionProps }) => <CollectionsPreview key={id} {...collectionProps} />)}
      </div>
    );
  }
}