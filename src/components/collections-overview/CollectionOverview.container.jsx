import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shopSelector'
import WithSpinner from '../with-spinner/WithSpinner'
import CollectionOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
})

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
