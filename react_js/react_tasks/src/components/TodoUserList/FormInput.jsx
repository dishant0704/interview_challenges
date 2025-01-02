import React from 'react'
import './TodoUserList.css'
import { useState } from 'react'
const FormInput = (props) => {    
    const {type, name, value, onChange, placeholder, errorMassage, ...otherProps } = props
    const [focused, setFocused]=useState(false) //focused

    const heandleFocused = () =>{
        setFocused(true)
    }

  return (
    <div className='imputWrapper'>
      <input name={name} value={value} onChange={onChange} onBlur={heandleFocused} onFocus={()=>name === "age" && setFocused(true)} {...otherProps} type={type} placeholder={placeholder} focused={focused.toString()}/>
      {errorMassage && <span id="spanCon" className='error'>{errorMassage}</span>}
    </div>
  )
}

export default FormInput
