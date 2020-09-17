import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions.js";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import CartItem from "../cart-item/cart-item.jsx";
import CustomButton from "../custom-button/custom-button.jsx";
import "./cart-dropdown.sass";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className={"cart-dropdown"}>
    <div className={"cart-items"}>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className={"empty-message"} children={"Your cart is empty"} />
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden())
      }}
      children={"GO TO CHECKOUT"}
    />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
