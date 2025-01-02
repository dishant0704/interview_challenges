import React, { useEffect, useRef, useState } from 'react'
import Style from './DragAndDrop-Style.module.css'

import ListItem from './ListItem';

const DragAndDrop = () => {
  const { mainContainer,formWrapper,inputGroup, dragItem, dropItem,empBtnWrapper,empBtnNone, dragContainer, searchBar } = Style;

  const [task, setTask] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  const [searchTask,setSearchTask]=useState("")

  const addTaskRef = useRef()

  useEffect(()=>{
    if (localStorage.getItem("localeData")) {
      const storedTask = localStorage.getItem("localeData");
      const localeData = JSON.parse(storedTask);
      setTask(localeData.pendingTasks);
      setDoneTask(localeData.doneTasks);
    }    
  },[])

  useEffect(()=>{
    if(task.length === 0) return;
    const localeStore = {
      pendingTasks:task,
      doneTasks:doneTask
      }
    localStorage.setItem('localeData',JSON.stringify(localeStore));
  },[task,doneTask])

  function handleOnDrag(e, obj) {
    e.dataTransfer.setData("objData", JSON.stringify(obj));
  }

  function handleDelete(id, sectin) {
    sectin === "task"? (setTask(task.filter((item) => item.id !== id)))
    : (setDoneTask(doneTask.filter((item) => item.id !== id)))    
  }

  function handleRedo(indID){
    const redoTask = doneTask[indID]
    redoTask.flag = false
    setTask([...task, redoTask])
    handleDelete(redoTask.id,"done")
  }

  function handleOnDropg(e) {
    const getDataObj = e.dataTransfer.getData("objData");
    const obj = JSON.parse(getDataObj);
    obj.flag = true
    setDoneTask([...doneTask, obj]);
    handleDelete(obj.id,"task");
  }

  function handleCheckBox(id) {    
    const obj = [...task][id]   
    obj.flag = true
    console.log(obj)
    setDoneTask([...doneTask, obj]);
    handleDelete(obj.id,"task");
  }

  function saveEditedData(id, data){
    const taskList = [...task];
    taskList[id].name = data
    setTask(taskList)   
  }

  function handleSubmit(e){
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData.entries()).newTask;
    const formData = addTaskRef.current.value;
    const newData = {
      id: new Date().getTime(),
      name: formData,
      flag: false,
    };
    setTask([...task, newData]);
    //reset input
    addTaskRef.current.value = "";
  }

  const filterData = task.filter((item)=>item.name.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()))

  return (
    <div className={mainContainer}>
      <div className={formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={inputGroup}>
            <input
              ref={addTaskRef}
              type="text"
              name="newTask"
              placeholder="Enter task name"
              required={true}
            />
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
      <div className={searchBar}>
        <input type="text" value={searchTask} onChange={(e)=>setSearchTask(e.target.value)} placeholder='Search Pending Tasks...'/>
      </div>
      <div className={dragContainer}>
        <div className={dragItem}>
          <h1>Pending Tasks</h1>
          {filterData.map((item, index) => {
            return (
              <ListItem
                key={item.id}
                index={index}
                data={item}
                saveData={saveEditedData}
                onDragStart={handleOnDrag}
                handleCheckBox={handleCheckBox}
                handleDelete={handleDelete}
                sectionFlag="task"
              />
            );
          })}
        </div>
        <div
          className={dropItem}
          onDrop={(e) => handleOnDropg(e)}
          onDragOver={(e) => e.preventDefault()}
        >
          {" "}
          <h1>Done Tasks</h1>
          {doneTask.map((item, index) => {
            return (
              <ListItem
                key={item.id}
                index={index}
                data={item}
                sectionFlag="done"
                handleRedo={handleRedo}
              />
            );
          })}
          <div className={doneTask.length > 0 ? empBtnWrapper : empBtnNone}>
            <button onClick={() => setDoneTask([])}>Empty task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop
