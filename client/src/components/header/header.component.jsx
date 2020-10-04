import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {signOutStart} from "../../redux/user/user.actions.js";
import selectCurrentUser from "../../redux/user/user.selectors.js";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import {
    HeaderContainer,
    LogoContainer,
    OptionContainer,
    OptionLink,
} from "./header.styled.jsx";


const HeaderComponent = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to={"/"}>
            <Logo/>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to={"/shop"}>Shop</OptionLink>
            <OptionLink to={"/contact"}>Contact</OptionLink>
            {currentUser ? (
                <OptionLink as="div" onClick={signOutStart}>
                    Sign Out
                </OptionLink>
            ) : (
                <OptionLink to={"/signin"}>Sign In</OptionLink>
            )}
            <CartIcon/>
        </OptionContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
