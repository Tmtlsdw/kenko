import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";
import CustomButtonComponent from "../custom-button/custom-button.component.jsx";

import CollectionItemStyled from "./collection-item.styled.jsx";

const CollectionItemComponent = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyled>
      <div
        className={"image"}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={"collection-footer"}>
        <span className={"name"}>{name}</span>
        <span className={"price"}>{price}€</span>
      </div>
      <CustomButtonComponent onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonComponent>
    </CollectionItemStyled>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItemComponent);
