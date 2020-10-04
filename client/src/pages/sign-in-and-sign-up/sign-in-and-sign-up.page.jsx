import React from "react";
import SignInComponent from "../../components/sign-in/sign-in.component.jsx";
import SignUpComponent from "../../components/sign-up/sign-up.component.jsx";
import SignInAndSignUpStyled from "./sign-in-and-sign-up.styled.jsx";


const SignInAndSignUpPage = () => (
	<SignInAndSignUpStyled>
		<SignInComponent/>
		<SignUpComponent/>
	</SignInAndSignUpStyled>
);

export default SignInAndSignUpPage;
