import React, { useState, useRef, useEffect } from "react";
import style from "./PersonalForm.module.css";

const CheckBox = (props) => {
  const {inputWrapperSpan2to1, checkWrapper, radioWrapper, hiddenInput, error } = style;
  const { type,options, label, required, name, errorMassage, focused, setfocused, ...otherProps } = props;  
 
  const heandleFocused = () =>{
    setfocused(true)
  }
  const [checkArray, setCheckArray ] = useState([])
  const checkValue = useRef([])
  

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    //console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setCheckArray([...checkArray, value]);
    }

    // Case 2  : The user unchecks the box
    else {
      setCheckArray(checkArray.filter((e) => e !== value));
    }
  };
  useEffect(()=>{
    checkValue.current.value = checkArray.join(", ")
  },[checkArray])
  return (
    <div className={inputWrapperSpan2to1}>
      <div className={checkWrapper}>
        <h1>{label} : </h1>
        {options.map((item, inx) => (
          <div key={`check_${inx}`} className={radioWrapper}>
            <input type={type} value={item}  onChange={handleChange}/> <label>{item}</label>
          </div>
        ))}
        <div><input ref={checkValue} className={hiddenInput} type="text" name={name} required={required} {...otherProps} onFocus={()=>name === "applyFor" && heandleFocused} onBlur={heandleFocused} focused={focused.toString()}/></div>
        <span className={error}>{errorMassage}</span>
      </div>
    </div>
  );
};

export default CheckBox;
