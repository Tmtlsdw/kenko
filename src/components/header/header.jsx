import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils.js";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {selectCurrentUser} from "../../redux/user/user.selectors.js";
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx";
import CartIcon from "../cart-icon/cart-icon.jsx";
import {
    HeaderContainer,
    LogoContainer,
    OptionContainer,
    OptionLink,
} from "./header.styled.jsx";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to={"/"}>
            <Logo/>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to={"/shop"}>Shop</OptionLink>
            <OptionLink to={"/contact"}>Contact</OptionLink>
            {currentUser ? (
                <OptionLink as="div" onClick={() => auth.signOut()}>
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
export default connect(mapStateToProps)(Header);
