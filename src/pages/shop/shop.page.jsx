import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionsOverViewContainer from "../../components/collections-overview/collections-overview.container.jsx";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js";
import CollectionPageContainer from "../collection/collection.container.jsx";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className={"shop-page"}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);