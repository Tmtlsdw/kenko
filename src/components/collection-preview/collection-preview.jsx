import React from "react";
import CollectionItem from "../collection-item/collection-item.jsx";

import "./collection-preview.sass";

const CollectionPreview = ({ title, items }) => (
  <div className={"collection-preview"}>
    {console.log(title)}
    {console.log(items)}
    <h1 className={"title"}>{title.toUpperCase()}</h1>
    <div className={"preview"}>
      {items
        .filter((item, i) => i < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
