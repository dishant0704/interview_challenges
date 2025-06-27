
import React, {useState, useEffect, useRef} from 'react'

export default function ListItem(props) {
    const [editFlag, setEditFlag] = useState(false)    
    const {itemProp, index, onChange, deleteItem, section, saveData , undoTask} = props
    const {id,name, checked} = itemProp
    const [value, setValue] = useState(name) 
    useEffect(()=>setValue(name),[name])

    const inputRef = useRef(null)

    const outSideClick = (e) =>{
      e.target.focus()
      setEditFlag(false)
      console.log(document.getElementsByName("name")[0])
      
    }
    
  return (
    <div>
      <div className="task">
            <form >  
            <input type="checkbox" checked={checked} onChange={onChange} disabled={checked}/>
            <input type='text' id={`${name}_${id}`} name='name' value={value} onChange={(e)=>setValue(e.target.value)} disabled={!editFlag} onBlur={outSideClick}/>
            {section === "task"?  
            <>{editFlag? <button onClick={(e) =>{e.preventDefault() ;saveData(value,index); setEditFlag(!editFlag)}} >Save</button>:
              <button onClick={(e) =>{ e.preventDefault(); document.getElementById(`${name}_${id}`).focus(); setEditFlag(!editFlag)}}>Edit</button>
            }</>            
            : <> <button onClick={()=>undoTask(index)}>undo</button></>}
            <button onClick={()=>deleteItem(id, section)}>delete</button>
            </form>      
        </div>
    </div>
  )
}
