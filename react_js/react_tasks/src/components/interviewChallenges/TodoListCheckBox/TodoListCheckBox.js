import React, { useState, useRef, useEffect } from 'react'
import ListItem from './ListItem'

const TodoListCheckBox = () => {   

    const [tasks, setTasks] = useState([])
    const [doneTask, setDoneTask] = useState([]) 
    const [searchText, setSearchText] = useState('')  
    const addTextBox = useRef()    

    const submitFun = (e) => {
        e.preventDefault()        
        const taskObj = {
            id: new Date().getTime(),
            name: addTextBox.current.value,
            checked: false
        }
        setTasks([...tasks, taskObj])
    }

    const localStore = {
        tasks: [],
        doneTask: []
    }

    useEffect(()=>{
        if(tasks.length === 0 && doneTask.length === 0) return
        localStore.tasks = tasks
        localStore.doneTask = doneTask
        localStorage.setItem('taskObj', JSON.stringify(localStore))
    },[tasks, doneTask])

    useEffect(()=>{        
        if(localStorage.getItem('taskObj')){
            const localStore = JSON.parse(localStorage.getItem('taskObj'))
            setTasks(localStore.tasks)
            setDoneTask(localStore.doneTask)
        }
    },[])

    const updateData = (value, index) =>{        
        const newTasks = [...tasks]
        newTasks[index].name = value           
        setTasks(newTasks) 
    }

    const deleteTask = (id, section)=>{
       let array
       let setter;
       if(section === "task"){
        array = [...tasks]
        setter = setTasks
       }else if (section === "done"){
        array = [...doneTask]
        setter = setDoneTask
       }
       const newTasks = array.filter(task=>task.id !== id)
       console.log("id: ", id)
       console.log(newTasks)
       setter(newTasks)
    }

    const undoTaskfun = (id) => {
        const doneTaskArr = [...doneTask]
        const moveTask = doneTaskArr[id]
        moveTask.checked = false
        setTasks([...tasks, moveTask])
        deleteTask(moveTask.id, "done")
    }

    const checkedFun = (e, inx) =>{
        const currTask = [...tasks]       
        currTask[inx].checked = e.target.checked        
        setDoneTask([...doneTask, currTask[inx]])
        deleteTask(currTask[inx].id, "task")
    }

    const taskFilter = tasks.filter((item)=>item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    const doneFilter = doneTask.filter((item)=>item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))


  return (
    <div className='formWrapper'>
        <div className='formCont'>
            <form onSubmit={submitFun} >
                <input ref={addTextBox} type="text" name="task" required/>
                <button type="submit">Add</button>
            </form>
        </div>
        <div>
            <input type='text' placeholder='Search Task' value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
        </div>
        {taskFilter.length>0 && <div className='listCont panddingCont'>
            <h1>Pandding Task</h1>
            {taskFilter.map((task, index) => {
                return <ListItem section="task" itemProp = {task} saveData={updateData} index = {index} onChange={(e)=>checkedFun(e, index)} deleteItem={deleteTask}/>               
            })}
        </div>}
        {doneFilter.length>0 && <div className='listCont doneCont'>
            <h1>Complited Task</h1>
            {doneFilter.map((task, index) => {
                    return <ListItem section="done" itemProp = {task} undoTask={undoTaskfun} index = {index} onChange={(e)=>checkedFun(e, index)} deleteItem={deleteTask}/>                    
                })}
        </div>}
    </div>
  )
}

export default TodoListCheckBox
