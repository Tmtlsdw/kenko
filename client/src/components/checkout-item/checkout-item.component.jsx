import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions.js";
import CheckoutItemStyled from "./checkout-item.styled.jsx";

const CheckoutItemComponent = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}) => {
  const { imageUrl, quantity, price, name } = cartItem;
  return (
    <CheckoutItemStyled>
      <div className={"image-container"}>
        <img alt={name} src={imageUrl} />
      </div>
      <span className={"name"}> {name} </span>
      <span className={"quantity"}>
        <div className={"arrow"} onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className={"value"}>{quantity}</span>
        <div className={"arrow"} onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={"price"}> {`${price}€`} </span>
      <div onClick={() => clearItem(cartItem)} className={"remove-button"}>
        &#10005;
      </div>
    </CheckoutItemStyled>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItemComponent);
