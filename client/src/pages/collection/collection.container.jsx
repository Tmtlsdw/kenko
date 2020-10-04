import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinnerComponent from "../../components/with-spinner/with-spinner.component.jsx";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors.js";
import CollectionPage from "./collection.page.jsx";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinnerComponent
)(CollectionPage);

export default CollectionPageContainer;
