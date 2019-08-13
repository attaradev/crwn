import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import { selectIsFetching } from '../../redux/shop/shop.selectors';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

export const CollectionsOverviewWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);