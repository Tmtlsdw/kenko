import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors.js";
import CollectionPreviewComponent from "../collection-preview/collection-preview.component.jsx";
import CollectionsOverviewStyled from "./collections-overview.styled.jsx";

const CollectionsOverviewComponent = ({ collections }) => (
  <CollectionsOverviewStyled>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreviewComponent key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewStyled>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionsOverviewComponent);
