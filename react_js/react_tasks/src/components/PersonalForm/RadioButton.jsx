import React, { useState } from "react";
import style from "./PersonalForm.module.css";

const RadioButton = (props) => {
  const { inputWrapperSpan2to1, radioWrapper, border10pxPadding, error, mainRadioWrapper } = style;
  const { name, type, options, label, required,errorMassage, focused, setfocused, ...otherProps } = props;
  const heandleFocused = () =>{
    setfocused(true)
  }
  return (
    <div className={`${inputWrapperSpan2to1} ${mainRadioWrapper}`}>
      <div>
        <div className={radioWrapper}>
          <span>{label} : </span>
          {options.map((item, inx) => (
            <>
              <input
                key={`${type}_${inx}_${item}`}
                type={type}
                value={item}
                name={name}
                required={required}
                {...otherProps}
                onFocus={() => name === "applyFor" && heandleFocused}
                onBlur={heandleFocused}
                focused={focused.toString()}
              />{" "}
              <label>{item}</label>
            </>
          ))}
        </div>
      </div>
      <span className={error}>{errorMassage}</span>
    </div>
  );
};

export default RadioButton
