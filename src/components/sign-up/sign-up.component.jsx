import React from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions.js";
import CustomButtonComponent from "../custom-button/custom-button.component.jsx";
import FormInputComponent from "../form-input/form-input.component.jsx";
import SignUpStyled from "./sign-up.styled.jsx";

class SignUpComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpStyled>
        <h2 className={"title"}>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className={"sign-up-form"} onSubmit={this.handleSubmit}>
          <FormInputComponent
            type={"text"}
            name={"displayName"}
            value={displayName}
            onChange={this.handleChange}
            label={"Display name"}
            required
          />
          <FormInputComponent
            type={"email"}
            name={"email"}
            value={email}
            onChange={this.handleChange}
            label={"Email"}
            required
          />
          <FormInputComponent
            type={"password"}
            name={"password"}
            value={password}
            onChange={this.handleChange}
            label={"password"}
            required
          />
          <FormInputComponent
            type={"password"}
            name={"confirmPassword"}
            value={confirmPassword}
            onChange={this.handleChange}
            label={"Confirm password"}
            required
          />
          <CustomButtonComponent type={"submit"}>Sign Up</CustomButtonComponent>
        </form>
      </SignUpStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUpComponent);
