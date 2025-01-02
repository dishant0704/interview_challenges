import React, { useState } from 'react'

import Style from './DragAndDrop-Style.module.css'

const ListItem = (props) => {
const [editFlag, setEditFlag] = useState(true)
const {taskItem} = Style
const {data, index, handleCheckBox, handleDelete, onDragStart, sectionFlag, handleRedo, saveData} = props
const {id, name, flag }= data

const [value, setValue] = useState(name)
  return (
    <div
      key={id}
      className={taskItem}
      draggable
      onDragStart={(e) => onDragStart(e, data)}
    >
      <input type="checkbox" checked={flag} onChange={()=>handleCheckBox(index)} disabled={flag}/>     
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} disabled = {editFlag}/>
      {sectionFlag === "task"? (
        <>
        {
            editFlag ? (<button onClick={()=>setEditFlag(!editFlag)}>Edit</button>):(<button onClick={()=>{saveData(index, value);setEditFlag(!editFlag)}}>Save</button>)
        }
        <button onClick={()=>handleDelete(id,sectionFlag)}>Delete</button>
        </>
        ):(<button onClick={()=>handleRedo(index)} >Redo</button>)}
      
    </div>
  );
}

export default ListItem
