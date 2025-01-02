import React, { useEffect, useState } from 'react'
import style from './TestComponent.module.css'

import FormCoponent from './FormCoponent'
import ListComponent from './ListComponent'

const TestComponent = () => {
    const {mainWrapper} = style

    const[applicationData, setApplicationData]=useState([])
    const[editFlag, setEditFlag]=useState({flag:false, index:null})
    

    const formData = [
        {
            name: 'f_name',
            type: 'text',
            label: 'First Name',
            placeholder:"First Name",
            required:"true",
            pattern:'[A-Za-z]{2,32}',
            errormassage:"First Name Require",
        },
        {
            name: 'l_name',
            type: 'text',
            label: 'Last Name',
            placeholder:"Last Name",
            required:"true",
            pattern:'[A-Za-z]{2,32}',
            errormassage:"Last Name Require",
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email Address',
            placeholder:"Email Address",
            required:"true",
            pattern: "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+([-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*([-a-zA-Z0-9_]+)*([cC][oO][mM]))(:[0-9]{1,5})?", 
            errormassage:"Email Address Require",
        },
        {
            name: 'm_number',
            type: 'tel',
            label: 'Mobile Number',
            placeholder:"Mobile Number",
            required:"true",
            pattern:'^[0-9]{10}$',
            errormassage:"Mobile Number Require",
        }
    ]
    // update logal storage
    useEffect(()=>{
        if(applicationData.length === 0) return
        localStorage.setItem("testData", JSON.stringify(applicationData))
    },[applicationData])

    // getData from logal storage
    useEffect(()=>{
        if(localStorage.getItem("testData")){
            setApplicationData(JSON.parse(localStorage.getItem("testData")));
        }
    },[])

    const handleFormSubmit = (data) => {        
        const {flag, index} = editFlag
        if(flag){
            const currData = [...applicationData]
            currData[index] = data
            setApplicationData(currData)
            setEditFlag({flag:false, index:null})
        }else{
            data.id = new Date().getTime()
            setApplicationData([...applicationData, data])            
        }        
    }

    const handleDelete = (id)=>{
        setApplicationData(applicationData.filter((item)=>item.id !== id))
    }

    const handleEdit = (index)=>{
        const data = [...applicationData]
        const currData = data[index]
        const formObj = document.applicantsForm
        formObj.f_name.value = currData.f_name
        formObj.l_name.value = currData.l_name
        formObj.email.value = currData.email
        formObj.m_number.value = currData.m_number       
        setEditFlag({flag:true, index:index})        
    }

  return (
    <div className={mainWrapper}>
      <FormCoponent data={formData} saveData={handleFormSubmit} flagObj = {editFlag}/>
      <ListComponent data={applicationData} deleteFun={handleDelete} editFun={handleEdit}/>      
    </div>
  )
}

export default TestComponent
