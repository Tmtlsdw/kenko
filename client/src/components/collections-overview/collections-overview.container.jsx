import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors.js";
import WithSpinnerComponent from "../with-spinner/with-spinner.component.jsx";
import CollectionsOverview from "./collections-overview.component.jsx";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinnerComponent
)(CollectionsOverview);

export default CollectionsOverViewContainer;
