import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors.js";
import CollectionPreview from "../collection-preview/collection-preview.jsx";
import "./collections-overview.sass";

const CollectionsOverview = ({ collections }) => (
  <div className={"collections-overview"}>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
