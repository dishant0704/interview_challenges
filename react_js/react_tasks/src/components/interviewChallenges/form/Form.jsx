import React, { Fragment } from 'react'
import TextBox from "../form/TextBox";
const Form = (props) => {
    const{className, onSubmit, fildData, setData, priData, btnFlag} = props
    const onChange = (e) =>{
        setData({...priData, [e.target.name]: e.target.value})
      }
  return (
    <Fragment>
        <form className={className} onSubmit={onSubmit} autoComplete="off">            
            {
              fildData.map((input)=>{
               return <TextBox key={input.id} {...input} onChange={onChange} value={priData[input.name]}/>
            })
            }
            <button>{btnFlag? "Edite":"Add Data"}</button>
        </form>
    </Fragment>
  )
}
export default Form