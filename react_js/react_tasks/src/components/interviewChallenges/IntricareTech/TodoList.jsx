import React from 'react'
import { Fragment } from 'react';
import formStyle from './Form.module.css'
import { useReducer } from 'react';
import Foram from './Foram';
import TaskList from './TaskList';
import ACTION from './Action';

// Interview Invite | Ketan Sawant | Frontend end Developer - Intricare Technologies
// Manish Dagur, arpan@intricaretech.com,hr@intricaretech.com
// Thursday, May 16⋅15:00 – 15:30

 const TodoList = () => {
  const {sectionTitle} = formStyle
  const data = {}

  // const ACTION = {
  //   ADDDATA:'addData',
  //   DELETEDATA:'deleteData',
  //   FILTERDATA:'filterData'
  // }
  
  const taskReducer = (state, action) =>{
      switch(action.type){
        case ACTION.ADDDATA:
          action.payload.id = new Date().getTime();
          return[...state, action.payload]
        case ACTION.DELETEDATA:
          console.log(action.payload.id)
          return state.filter((item)=>item.id !== action.payload.id)
        default:
        return state
      }
  }

  const [formData, dispatch] = useReducer(taskReducer,[])
  
  const onSubmitForm=(e)=>{
    e.preventDefault();
    dispatch({type:ACTION.ADDDATA,payload:data})
    console.log(e.target)    
  }
  console.log(formData)
  return (
    <Fragment>
      <h1 className={sectionTitle}>TodoList</h1>
      <Foram formFildData={data} onSubmit={onSubmitForm}/>      
      <TaskList listData={formData} dispatchFun ={dispatch}/>
    </Fragment>
  )
}
export default TodoList;
