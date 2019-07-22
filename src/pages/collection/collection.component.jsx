import React from 'react';
import { connect } from 'react-redux';
import { CollectionItem } from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state)
})


export const CollectionPage = connect(mapStateToProps)(
  ({ collection: { title, items } }) => (
    <div className='collection'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
);