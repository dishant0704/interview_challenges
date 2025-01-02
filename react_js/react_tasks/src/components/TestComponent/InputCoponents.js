import React,{useEffect, useState} from 'react'
import style from './TestComponent.module.css'

const InputCoponents = (props) => {
    const {inputWrapper, error} = style 
    const { name, errormassage, flag} = props 
    const [focused, setFocused] = useState(false)
    useEffect(()=>{
      if(flag){
        setFocused(false)
      }
    },[flag])
      
    const handleFocused = () => {
      setFocused(true)
    }
  return (
    <div className={inputWrapper}>
        <input onFocus={()=>name==='m_number' && handleFocused} onBlur={handleFocused} focused={focused.toString()}{...props}/>
        {focused.toString()}
        <span className={error}>{errormassage}</span>        
     </div>
  )
}

export default InputCoponents
