import React from "react";
import CustomButtonContainer from "./custom-button.styled.jsx";


const CustomButtonComponent = ({children, ...props}) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButtonComponent;
