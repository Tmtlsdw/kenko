import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import CartItemComponent from "../cart-item/cart-item.component.jsx";
import CustomButtonComponent from "../custom-button/custom-button.component.jsx";
import CartDropdownStyled from "./cart-dropdown.styled.jsx";

const CartDropdownComponent = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyled>
    <div className={"cart-items"}>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className={"empty-message"}>Your cart is empty</span>
      )}
    </div>
    <CustomButtonComponent
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      {" "}
      GO TO CHECKOUT
    </CustomButtonComponent>
  </CartDropdownStyled>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdownComponent));
