import React, { useState } from 'react'
import style from './TestComponent.module.css'

const ListComponent = (props) => {
    const{listWrapper, listItem} = style
    const{data, deleteFun, editFun} = props
    const [searchData, setSearchData] = useState("")

    const filterData = data.filter((item)=>item.f_name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()))

  return (
    <div className={listWrapper}>
        <h1>Applicants List</h1>
        <input type='text' value={searchData} onChange={(e)=>setSearchData(e.target.value)} placeholder='Search by name'></input>
      {
        filterData.map((item, index) => {
            const{id, f_name, l_name,}=item
            return (
                <div className={listItem} key={item.id}>
                   <label>{f_name} {l_name}</label>
                   <button onClick={()=>editFun(index)}>Edit</button> 
                   <button onClick={()=>deleteFun(id)}>Delete</button> 
                </div>
            )
        })
      }
    </div>
  )
}

export default ListComponent
