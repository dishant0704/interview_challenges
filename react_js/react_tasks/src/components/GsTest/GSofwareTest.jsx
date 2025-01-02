import React,{useState} from 'react'

import FormComponent from './FormComponent'
import ListComponent from './ListComponent'

const GSofwareTest = () => {

    const [data, setData] = useState([])
    const [editFlag, setEditFlag] = useState({flag:false, index:null})

    const formData = [
        {
            name:'f_name',
            type: 'text',
            placeholder:"First Name",
            required:true,
            key: "formInput01"
        },
        {
            name:'l_name',
            type: 'text',
            placeholder:"Last Name",
            required:true,
            key: "formInput02"
        },
        {
            name:'address',
            type: 'text',
            placeholder:"Address",
            required:true,
            key: "formInput03"
        },
    ]

    const insertData = (formData) =>{
        const {flag, index} = editFlag
        if(flag){
            const f_data = [...data]
            f_data[index] = formData
            setData(f_data);
            setEditFlag({flag:false, index:null})
        }else{
            formData.id = new Date().getTime()
            setData([...data, formData])
        }
    }

    //deleteItem, 
    const deleteData = (id) =>{
        setData(data.filter((item)=>item.id !== id))
    }
    
    //editItem
    const editData = (id) =>{
        const f_data = [...data]
        const currData = f_data[id]
        const dataForm = document.dataForm
        dataForm.f_name.value = currData.f_name
        dataForm.l_name.value = currData.l_name
        dataForm.address.value = currData.address
        console.log(dataForm)
        setEditFlag({flag:true, index:id})
    }

    console.log(data)
  return (
    <div className='mainWrapper'>
        <FormComponent data={formData} saveData={insertData}  flag={editFlag.flag}/>
        <ListComponent data={data} deleteItem={deleteData} editItem={editData} />            
    </div>
  )
}

export default GSofwareTest
