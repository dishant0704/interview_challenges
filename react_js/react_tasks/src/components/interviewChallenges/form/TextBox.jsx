import React, { Fragment, useState } from 'react'
import './form.css'

export default function TextBox(props) {
    const [focused, setFocused] = useState(false);
    const{name, label, placeholder, onChange, cssClass, required, errorMassage, value, pattern} = props
    const handleFocus = (e) => {
        setFocused(true);
      };
  return (
    <Fragment>
    <div className={`fildname ${cssClass? cssClass: ''}`}>
        <label disabled={!label}>{label}</label>   
        <input 
        name={name} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required}
        onBlur={handleFocus}
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()}
        value={value}
        pattern={pattern}        
        />
        <span className='error errorMass'>{errorMassage}</span>
    </div>
    </Fragment>
  )
}
