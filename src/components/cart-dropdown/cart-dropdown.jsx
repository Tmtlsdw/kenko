import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import CartItem from "../cart-item/cart-item.jsx";
import CustomButton from "../custom-button/custom-button.jsx";
import "./cart-dropdown.sass";

const CartDropdown = ({ cartItems }) => (
  <div className={"cart-dropdown"}>
    <div className={"cart-items"}>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton children={"GO TO CHECKOUT"} />
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
