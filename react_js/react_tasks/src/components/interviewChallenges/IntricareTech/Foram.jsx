import React from 'react'
import formStyle from './Form.module.css'

const Foram = (props) =>{
  const{formFildData, onSubmit} = props
  const{formWrapper}=formStyle

  const onChangeFild = (e) =>{
    formFildData[e.target.name] = e.target.value
  }

  const formSubmit = (e)=>{
    onSubmit(e)
    e.target.reset()
  }

  return (
    <div className={formWrapper}>
      <form onSubmit={(e)=>formSubmit(e)}>
        <div>
          <label>Task Name:</label>
          <input name='taskName' onChange={(e)=>onChangeFild(e)} required={true}/>
          <span>error</span>
        </div>
        <div>
        <label>Task Status:</label>
          <select name='taskStatus' onChange={(e)=>onChangeFild(e)} required>
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <span>error</span>
        </div>
        <div>
          <button>Add Task</button>
        </div>
      </form>
    </div>
  )
}
export default Foram;
