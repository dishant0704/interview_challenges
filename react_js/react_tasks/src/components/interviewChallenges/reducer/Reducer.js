import React, { Fragment, useState, useReducer, } from "react";
import "./reducer.css";
import Form from "../form/Form";

const Reducer = () => {
  
  const defultUserData = {
    id:null,
    fname:"",
    lname:"",
    bdate:"",
    email:"",
    age:"",
    city:""
  }
  
  const ACTION = {    
    ADDUSER: "addUser",
    DETELEUSER: "deleteUser",
    EDITUSER: "editUser",
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case ACTION.ADDUSER:
        action.payload.id = Date.now();
        return [...state, action.payload];
      case ACTION.DETELEUSER:
        return state.filter((user) => user.id !== action.payload.id);
      case ACTION.EDITUSER:
        return state.map((user) =>{ 
          if(user.id === action.payload.id) user = action.payload
          return user
        });      
      default:
        return state;
    }
  };

  const inputs = [
    {
      id:0,
      type: "text",
      name: "fname",
      placeholder: "First Name",
      label: "First Name",
      required:true,
      cssClass:"redFormfild",
      pattern:"^[A-Za-z0-9]$",
      errorMassage:'First name required'
    },
    {
      id:1,
      type: "text",
      name: "lname",
      placeholder: "Last Name",
      label: "Last Name",
      required:true,
      cssClass:"redFormfild",
      pattern: "^[A-Za-z0-9]$",
      errorMassage: 'last name required'
    },
    {
      id:2,
      type: "date",
      name: "bdate",
      cssClass:"redFormfild",
      placeholder: "Birthe Date",
      label: "Birthe Date",      
    },
    {
      id:3,
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email",
      required:true,
      cssClass:"redFormfild",
      pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$",
      errorMassage: 'It should be a valid email address!'
    },
    {
      id:4,
      type: "number",
      name: "age",
      placeholder: "Age",
      label: "Age",
      required:true,
      cssClass:"redFormfild",
      pattern:"^[0-9]$",
      errorMassage: 'Age required'
    },    
    {
      id:5,
      type: "text",
      name: "city",
      placeholder: "City",
      label: "City",
      required:true,
      cssClass:"redFormfild",
      pattern:"^[A-Za-z0-9]$",
      errorMassage: 'City required'
    }    
  ]

  //dispatch 
  const [userstate, userDispatch] = useReducer(userReducer, []);
  const [newData, setNewData]=useState(defultUserData)
  const [editFlag, setEditFlag] = useState(false)
 
  const heanderSubmit = (e)=>{
    e.preventDefault()
    //const Data = new FormData(e.target)
    if(editFlag){
      userDispatch({type: ACTION.EDITUSER, payload:newData})
    }else{
      userDispatch({type: ACTION.ADDUSER, payload:newData});
    }    
    
    setNewData({
      id:"",
      fname:"",
      lname:"",
      bdate:"",
      email:"",
      age:"",
      city:""
    }) 
    e.target.reset();
    setEditFlag(false)        
  }
  const editData = (id) =>{
    const currData = userstate.filter((item)=>item.id === id )[0]  
    setNewData(currData)
    setEditFlag(true)
  }
 // console.log("newData",userstate[0])
 

  return (
    <Fragment>
      <div className="pageWrapper">        
        <h2 className="pageTitle">Add User</h2>
        <Form className="form clo" onSubmit={heanderSubmit} fildData = {inputs} setData={setNewData} priData = {newData} btnFlag={editFlag}/> 
        {/* <form className="form clo" onSubmit={heanderSubmit} autoComplete="off">
             {/* <input name="fname" onChange={(e)=>newData.fname = e.target.value} placeholder="First Name"></input>
            <input name="lname" onChange={(e)=>newData.lname = e.target.value} placeholder="Last Name"></input>
            <input name="age" onChange={(e)=>newData.age = e.target.value} placeholder="Age"></input>
            <input name="city" onChange={(e)=>newData.city = e.target.value} placeholder="City"></input> 
            {
              inputs.map((input)=><TextBox key={input.id} {...input} onChange={onChange} />)
              
            }
            <button>Submit</button>
        </form>*/}
        {userstate.length>0?<><h2 className="pageTitle">User list</h2><ul className="listWrapper">
          {userstate.map((data, i) => {
            const { fname, lname, id } = data;
            return <li key={i} className="listItem"><div>{fname} {lname}</div><div><button onClick={()=>userDispatch({type: ACTION.DETELEUSER, payload:{id:id}})}>Delete</button></div><div><button onClick={()=>editData(id)}>Edit</button></div></li>;
          })}
        </ul></>
        : null}
      </div>
    </Fragment>
  );
};

export default Reducer;
