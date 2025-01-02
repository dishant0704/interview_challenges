import React, { useState } from "react";
import style from "./PersonalForm.module.css";
const InputComponent = (props) => {
  const { inputWrapper, inputWrapperSpan2to1, error} = style;
  const {name, type, placeholder, colSpan, required, errorMassage, focused, setfocused, ...otherProps} = props  
  const heandleFocused = () =>{
    setfocused(true)
  }
  return (
    <div className={colSpan? `${inputWrapperSpan2to1} ${inputWrapper}` : `${inputWrapper}`}>
      <input type={type} name={name}  placeholder={placeholder} required={required} {...otherProps} onFocus={()=>name === "applyFor" && heandleFocused} onBlur={heandleFocused} focused={focused.toString()}/>
      <span className={error}>{errorMassage}</span>
    </div>
  );
};

export default InputComponent;
