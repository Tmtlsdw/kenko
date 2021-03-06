import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  position: absolute;
  bottom: 50px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const googleSignInButtonStyles = css`
  background: #4285f4;
  color: white;
  border: none;

  &:hover {
    background: #357ae8;
  }
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : ButtonStyles;
};
const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
export default CustomButtonContainer