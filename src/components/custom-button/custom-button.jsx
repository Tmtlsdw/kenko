import React from "react";
import { CustomButtonContainer } from "./custom-button.styled.jsx";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
