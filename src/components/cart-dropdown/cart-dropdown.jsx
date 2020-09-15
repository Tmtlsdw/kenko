import React from "react";
import CustomButton from "../custom-button/custom-button.jsx";

import "./cart-dropdown.sass";

const CartDropdown = () => (
  <div className={"cart-dropdown"}>
    <div className={"cart-items"} />
    <CustomButton children={"GO TO CHECKOUT"} />
  </div>
);
export default CartDropdown;
