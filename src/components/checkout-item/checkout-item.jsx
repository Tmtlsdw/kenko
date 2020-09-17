import React from "react";
import "./checkout-item.sass";

const CheckoutItem = ({ cartItem: { imageUrl, quantity, price, name } }) => (
  <div className={"checkout-item"}>
    <div className={"image-container"}>
      <img alt={name} src={imageUrl} />
    </div>
    <span className={"name"} children={name} />
    <span className={"quantity"} children={quantity} />
    <span className={"price"} children={`${price}€`} />
    <div className={"remove-button"}>&#10005;</div>
  </div>
);
export default CheckoutItem;
