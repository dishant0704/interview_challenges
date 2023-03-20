//telusinternational.com
//Interview Details || Telus International || Frontend Developer || 1st Round
//Wednesday, 22 February⋅15:00 – 16:00
//Task:  convert class component to function component
//localStorage.setItem("mytime", Date.now());

import React,{useEffect,useState} from "react"

 class ClassComponent extends React.Component{
    constructor(){
        super()
        this.state = {value:localStorage.getItem("mytime")||""}
    }
    componentDidMount(){
        this.readValue();
    }

    readValue() {
        localStorage.setItem("mytime", Date.now());
        const timeValue = localStorage.getItem("mytime")
        this.setState({value:timeValue})
      }
      

    render(){
        return(
            <>                
                <h2>Class Component</h2>
                <p>Click the button to get the item value:</p>
                <p>{this.state.value}</p>
                <button onClick={() =>this.readValue()}>Get the item value</button>
            </>
        )
    }
 }

 const FunctionComponent = () =>{
    const[value, setValue] = useState()

    useEffect(()=>{
        readValue();
    },[])

    const readValue = () => {
        localStorage.setItem("mytime", Date.now());
        const timeValue = localStorage.getItem("mytime")
        setValue(timeValue);
      }
    return(
        <>                
            <h2>Functional Component</h2>
            <p>Click the button to get the item value:</p>
            <p>{value}</p>
            <button onClick={readValue}>Get the item value</button>
        </>
    )
 }

 export {ClassComponent, FunctionComponent}

