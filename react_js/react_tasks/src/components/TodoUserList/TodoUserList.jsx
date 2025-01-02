import React, { useEffect, useState } from 'react'
import './TodoUserList.css'

import FormComponent from './FormComponent'
import UserList from './userList'

const TodoUserList = () => {    
    
    const [formData, setFormData] = useState([])

    const defaultData = {
        id:'',
        f_name: '',
        l_name:"",
        email: '',
        mobaile: '',
        age:''

    }

    const formFilds = [
        {
            name: 'f_name', 
            type: 'text', 
            placeholder: 'First Name',
            required:true,
            pattern:'[A-Za-z]{1,32}',
            errorMassage:'First name required'
        },
        {
            name: 'l_name', 
            type: 'text', 
            placeholder: 'Last Name',
            required:true,
            pattern:'[A-Za-z]{1,32}',
            errorMassage:'Last name required'
        },
        {
            name: 'email', 
            type: 'email', 
            placeholder: 'Email',
            required:true,
            pattern: "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+([-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*([-a-zA-Z0-9_]+)*([cC][oO][mM]))(:[0-9]{1,5})?", 
            errorMassage:'Email required'
        },
        {
            name: 'mobaile', 
            type: 'text', 
            placeholder: 'Mobaile Number',
            required:true,
            pattern:'^[0-9]{10}$',
            errorMassage:'Mobile number required'
        },
        {
            name: 'age', 
            type: 'text', 
            placeholder: 'Age',
            required:true,
            pattern:'^[0-9]{1,2}$',
            errorMassage:'Age required'
        },
    ]

    const [defaultFormData, setDefaultFormData] = useState(defaultData)
    const [editId, setEditId]=useState()
    const [editflag, setFditflag]=useState(false)


    // Store data in LocalStorage
    useEffect(()=>{
        if(formData.length === 0) return
        localStorage.setItem('userTodoData',JSON.stringify(formData))
    },[formData])

    useEffect(()=>{
        if(localStorage.getItem('userTodoData')){
            setFormData(JSON.parse(localStorage.getItem('userTodoData')))
        }
    },[])

   const handleFormSubmit = (Data={defaultFormData}) => {
        if(editflag){
            const formEditData = [...formData]
            formEditData[editId] = Data
            setFormData(formEditData)
            setDefaultFormData(defaultData)
        }else{
            Data.id = Date.now();
            setFormData([...formData, Data])       
        }
    }

    const handleEditeData = (id) =>{
        setEditId(id)
        setFditflag(true)        
        const formEditData = [...formData]
        const selectedItem = formEditData[id]
        setDefaultFormData(selectedItem)
    }

    const handleDeleteData = (id) =>{
        const formRemainData = formData.filter((item)=>item.id !== id)
        setFormData(formRemainData)
    }

  return (
    <div className='mainWrapper'>
      <div className='formSection'>
        <h1>Add User</h1>
        <FormComponent formFildsData = {formFilds} editFlag={editflag} defaultData={defaultFormData} onSubmit={handleFormSubmit}/>
      </div>
        <UserList deleteDataFun={handleDeleteData} editDataFun = {handleEditeData} data={formData}/>
    </div>
  )
}

export default TodoUserList
