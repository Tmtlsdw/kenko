import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils.js";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {selectCurrentUser} from "../../redux/user/user.selectors.js";
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx";
import CartIcon from "../cart-icon/cart-icon.jsx";
import "./header.sass";

const Header = ({currentUser, hidden}) => (
    <div className={"header"}>
        <Link className={"logo-container"} to={"/"}>
            <Logo className={"logo"}/>
        </Link>
        <div className={"options"}>
            <Link className={"option"} to={"/shop"}>
                Shop
            </Link>
            <Link className={"option"} to={"/contact"}>
                Contact
            </Link>
            {currentUser ? (
                <div className={"option"} onClick={() => auth.signOut()}>
                    Sign Out
                </div>
            ) : (
                <Link className={"option"} to={"/signin"}>
                    Sign In
                </Link>
            )}
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
