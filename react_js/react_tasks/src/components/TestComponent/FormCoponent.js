import React, { useState } from 'react'
import style from './TestComponent.module.css'

import InputCoponents from './InputCoponents'

const FormCoponent = (props) => {
    const {formWrapper} = style
    const {data, saveData, flagObj} = props
    const [subMitFlag, setSubMitFlag] = useState(false)
    
    const{flag}=flagObj

    const handlesubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        saveData(data)       
        e.target.reset() 
        setSubMitFlag(true)      
    }
  return (
    <div className={formWrapper}>
        <h1>Add Applicants</h1>
        <form name="applicantsForm" onSubmit={handlesubmit}>
            {
                data.map((item, index) => {
                    return (
                        <InputCoponents key={`inputID_${index}`} flag={subMitFlag} {...item} />            
                    )
                })
            }
            <button>{flag? 'Save' : 'Submit'}</button>
        </form>
    </div>
  )
}

export default FormCoponent
