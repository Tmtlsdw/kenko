import React, {useState} from "react";
import {connect} from "react-redux";
import {signUpStart} from "../../redux/user/user.actions.js";
import CustomButtonComponent from "../custom-button/custom-button.component.jsx";
import FormInputComponent from "../form-input/form-input.component.jsx";
import SignUpStyled from "./sign-up.styled.jsx";


const SignUpComponent = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart({displayName, email, password});
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };

    return (
        <SignUpStyled>
            <h2 className={"title"}>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className={"sign-up-form"} onSubmit={handleSubmit}>
                <FormInputComponent
                    type={"text"}
                    name={"displayName"}
                    value={displayName}
                    onChange={handleChange}
                    label={"Display name"}
                    required
                />
                <FormInputComponent
                    type={"email"}
                    name={"email"}
                    value={email}
                    onChange={handleChange}
                    label={"Email"}
                    required
                />
                <FormInputComponent
                    type={"password"}
                    name={"password"}
                    value={password}
                    onChange={handleChange}
                    label={"password"}
                    required
                />
                <FormInputComponent
                    type={"password"}
                    name={"confirmPassword"}
                    value={confirmPassword}
                    onChange={handleChange}
                    label={"Confirm password"}
                    required
                />
                <CustomButtonComponent type={"submit"}>Sign Up</CustomButtonComponent>
            </form>
        </SignUpStyled>
    );
};
const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUpComponent);
