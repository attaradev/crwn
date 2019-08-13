import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';
import { Collection } from '../../components/collection/collection.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';


const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

export const CollectionWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);