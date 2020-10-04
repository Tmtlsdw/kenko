import React, { useState } from "react";
import { connect } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions.js";
import CustomButtonComponent from "../custom-button/custom-button.component.jsx";
import FormInputComponent from "../form-input/form-input.component.jsx";
import SignInStyled from "./sign-in.styled.jsx";

const SignInComponent = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInStyled>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          name={"email"}
          type={"email"}
          value={email}
          handleChange={handleChange}
          label={"email"}
          required
        />
        <FormInputComponent
          name={"password"}
          type={"password"}
          value={password}
          handleChange={handleChange}
          label={"password"}
          required
        />
        <div className={"buttons"}>
          <CustomButtonComponent type={"submit"}>Sign In</CustomButtonComponent>
          <CustomButtonComponent
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButtonComponent>
        </div>
      </form>
    </SignInStyled>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignInComponent);
