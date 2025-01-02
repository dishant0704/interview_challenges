import React, { useEffect, useState } from 'react'
import './TodoUserList.css'

import FormInput from './FormInput'

const FormComponent = (props) => {    
    const {formFildsData, defaultData, onSubmit, editFlag} = props
    const [inpuValues, setInpuValues] = useState(defaultData)
    const formDefaultValue = {...defaultData }   

    useEffect(()=>{setInpuValues(defaultData)},[defaultData])

    const onChangeFun=(e) => {
        setInpuValues({...inpuValues, [e.target.name]:e.target.value})
    }
    const onSubmitFun = (e) => {
        e.preventDefault();
        onSubmit(inpuValues);
        setInpuValues(formDefaultValue); 
       
        const errorCont = document.getElementsByClassName('error') 
        
        for(var i = 0; i < errorCont.length; i++){
            errorCont[i].style.display = "none";
        }
        
    }
  return (
    <form className='formWrapper' onSubmit={(e)=>{onSubmitFun(e)}} >
        {
            formFildsData.map((item, index) => {
                const{name,} = item
                return <FormInput key={`fild_${index}`} name={name} value={inpuValues[name]} onChange={onChangeFun} {...item}/>
            })
        }
        <div className='btnWrapper'>
        {editFlag?(<button>UpdateUser</button>):(<button>Add User</button>)}
        </div>
        
    </form>
  )
}

export default FormComponent
