import React from 'react'
import style from "./PersonalForm.module.css";

const SelectComponent = (props) => {
    const {inputWrapperSpan2to1} = style;
    const { options, placeholder, colSpan,required } = props;
  return (
    
      <select className={colSpan? `${inputWrapperSpan2to1}` : ``} required={required}>
        <option value="">{placeholder}</option>
        {options.length > 0 && options.map((option, index) => {
            return <option>{option}</option>
        })}
      </select>
  )
}

export default SelectComponent
