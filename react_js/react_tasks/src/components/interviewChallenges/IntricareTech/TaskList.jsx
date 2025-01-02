import React from 'react'
import { Fragment } from 'react'
import formStyle from './Form.module.css'
import { useState } from 'react'
import ACTION from './Action';
import { useEffect } from 'react';
const TaskList = (props)=> {
    
    const {sectionTitle, listMainWrapper,dataWrapper, listRow, listHeader} = formStyle
    const {listData, dispatchFun} = props
    const [searchText, setSearchText] = useState('')
    const [btnFlag, setBtnFlag]= useState(false)
    useEffect(()=>{
        listData.length > 0? setBtnFlag(false) : setBtnFlag(true)         
    },[listData])
    console.log("btnFlag", btnFlag);

   //filterData
  const filterData = listData.filter((task) => {
    return task.taskStatus.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
  });

    return (
        <Fragment>
            <div className={listMainWrapper}>
                <div className={listHeader}>
                <h1 className={sectionTitle}>Task List</h1>
                <select name='taskStatus' onChange={(e)=>setSearchText(e.target.value)} required disabled={btnFlag}>
                    <option value="">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
                </div>
                <div className={dataWrapper}>
                    {
                        filterData.map((item)=>{
                            const {id, taskName, taskStatus} = item
                        return(<div key={id} className={listRow}>
                            <div>{taskName}</div>
                            <div>{taskStatus}</div>
                            <div><button onClick={()=>dispatchFun({type:ACTION.DELETEDATA, payload:{id:id}})}>Delete task</button></div>
                        </div>)
                        }) 
                    }
                </div>            
            </div>
        </Fragment>
    )
}
export default TaskList