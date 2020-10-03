import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import CheckoutPage from "./components/checkout/checkout.component.jsx";
import Header from "./components/header/header.component.jsx";
import Homepage from "./pages/homepage/homepage.page.jsx";
import ShopPage from "./pages/shop/shop.page.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page.jsx";
import { checkUserSession } from "./redux/user/user.actions.js";
import selectCurrentUser from "./redux/user/user.selectors.js";

const App = ({ checkUserSession, currentUser }) => {
  const unsubscribeFromAuth = null;
  useEffect(() => {
    checkUserSession();
    return () => {
      unsubscribeFromAuth();
    };
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/shop"} component={ShopPage} />
        <Route exact path={"/checkout"} component={CheckoutPage} />
        <Route
          exact
          path={"/signin"}
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
