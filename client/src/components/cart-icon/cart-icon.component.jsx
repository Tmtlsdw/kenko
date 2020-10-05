import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";
import CartIconStyled from "./cart-icon.styled.jsx";

const CartIconComponent = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyled onClick={toggleCartHidden}>
    <ShoppingIcon className={"shopping-icon"} />
    <span className={"item-count"}>{itemCount}</span>
  </CartIconStyled>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);