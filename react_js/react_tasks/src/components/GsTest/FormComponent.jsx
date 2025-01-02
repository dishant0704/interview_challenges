import React from 'react'

import InputComponent from './InputComponent'

const FormComponent = (props) => {
    const {data, saveData, flag} = props
    const heanderSubmit = (e) =>{   
        e.preventDefault()
        const formObj = e.target
        const formData = new FormData(formObj)
        const inputData = Object.fromEntries(formData)
        saveData(inputData)        
       formObj.reset()
    }
  return (
    <div className='formWrapper'>
        <form name='dataForm' onSubmit={heanderSubmit}>
            {
                data.map((item, index) => {
                    return <InputComponent key={`inputID_${index}`}  {...item} />
                })
            }
            
          <button>{flag?'Save':'Submit'}</button>  
        </form>
    </div> 
  )
}

export default FormComponent
