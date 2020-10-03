import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";

import CollectionPreviewStyled from "./collection-preview.styled.jsx";


const CollectionPreviewComponent = ({title, items}) => (
    <CollectionPreviewStyled>
        <h1 className={"title"}>{title.toUpperCase()}</h1>
        <div className={"preview"}>
            {items
                .filter((item, i) => i < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
        </div>
    </CollectionPreviewStyled>
);

export default CollectionPreviewComponent;
