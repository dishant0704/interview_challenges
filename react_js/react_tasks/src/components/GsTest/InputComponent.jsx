import React from 'react'

const InputComponent = (props) => {
  return (
    <div className='inputWrapper'>
        <input {...props}/>
    </div>
  )
}

export default InputComponent
