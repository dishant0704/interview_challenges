import React, { useState } from 'react'
import  './TodoUserList.css'

const UserList = (props) => {
    const{data, editDataFun, deleteDataFun}=props

    const [searchText, setSearchText] = useState("")

    const filterData = data.filter((item)=>item.f_name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  return (
    <div className='istWrapper'>
        <h1>User List</h1>
        <div className='searchBarWrapper'>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="Search for first name..." />
        </div>
        <div className='listItems'>
            {filterData.map((user, index) =>{ 
                const{id, f_name, l_name}=user
                return(
                <div key={id} className='listItem'>
                    <label className='strech'>{f_name} {l_name}</label>
                    <button onClick={()=>editDataFun(index)} >Edit</button>
                    <button onClick={()=>deleteDataFun(id)}>Delete</button>
                </div>
                )}
            )}            
        </div>
    </div>
  )
}

export default UserList
