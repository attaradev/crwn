import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';
import { Collection } from '../../components/collection/collection.component';
import { selectIsFetching } from '../../redux/shop/shop.selectors';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

export const CollectionWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);