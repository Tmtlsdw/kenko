import React from "react";
import {connect} from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions.js";
import CustomButtonComponent from "../custom-button/custom-button.component.jsx";
import FormInputComponent from "../form-input/form-input.component.jsx";
import SignInStyled from "./sign-in.styled.jsx";


class SignInComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    const {emailSignInStart} = this.props;
    const {email, password} = this.state;
    emailSignInStart(email, password);
  };
  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };


  render () {
    const {googleSignInStart} = this.props;
    return (
        <SignInStyled>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInputComponent
                name={"email"}
                type={"email"}
                value={this.state.email}
                handleChange={this.handleChange}
                label={"email"}
                required
            />
            <FormInputComponent
                name={"password"}
                type={"password"}
                value={this.state.password}
                handleChange={this.handleChange}
                label={"password"}
                required
            />
            <div className={"buttons"}>
              <CustomButtonComponent type={"submit"}>
                Sign In
              </CustomButtonComponent>
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
  }
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignInComponent);
