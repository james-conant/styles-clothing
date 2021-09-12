import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { SelectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !SelectIsCollectionsLoaded(state),
});

// const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;