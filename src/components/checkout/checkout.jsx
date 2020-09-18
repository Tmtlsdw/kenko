import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import CheckoutItem from "../checkout-item/checkout-item.jsx";
import StripeCheckoutButton from "../stripe-button/stripe-button.jsx";
import "./checkout.sass";

const CheckoutPage = ({cartItems, total}) => (
    <div className={"checkout-page"}>
        <div className={"checkout-header"}>
            <div className={"header-block"}>Product</div>
            <div className={"header-block"}>Description</div>
            <div className={"header-block"}>Quantity</div>
            <div className={"header-block"}>Price</div>
            <div className={"header-block"}>Remove</div>
        </div>
        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <div className={"total"}>TOTAL: ${total}€</div>
        <div className="test-warning">
            Use this card info
            <br/>
            3782 822463 10005
            <br/>
            Any future date
            <br/>
            Any 4-digits number
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);