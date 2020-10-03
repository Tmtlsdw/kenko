import React from "react";
import FormInputStyled from "./form-input.styled.jsx";


const FormInputComponent = ({handleChange, label, ...otherProps}) => (
    <FormInputStyled>
        <input className={"form-input"} onChange={handleChange} {...otherProps} />
        {label ? (
            <label
                className={`${
                    otherProps.value.length ? "shrink" : ""
                } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </FormInputStyled>
);

export default FormInputComponent;