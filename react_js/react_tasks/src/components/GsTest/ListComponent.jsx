import React, { useState } from 'react'

const ListComponent = (props) => {
    const{data, deleteItem, editItem} = props
    const [searchText, setSearchText] = useState("")

    const filterData = data.filter((item)=>item.f_name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))    
  return (
    <div className='listWrapper'>
        <input type='text' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
       {
        filterData.map((item, index) => {
            const {id, f_name} = item
            return (
                <div>
                    <label>{f_name}</label>
                    <button onClick={() =>deleteItem(id)}>Delete</button>
                    <button onClick={() =>editItem(index)}>Edit</button>
                </div>
            )
        })
       }
    </div> 
  )
}

export default ListComponent
