import React, {useEffect, useState, useContext} from "react";
import { CalendarContext } from "./CalendarContexts";
import DateDisplay from "./DateDisplay";

const DisplayData = () =>{

    const {toDay, setToDay, fromDate, setFromDate, toDate, setToDate, testState, setTestState} = useContext(CalendarContext);
   
    let disVal = "dd / mm / yyyy | hh:mm";
    const[diffValue, setDiffValue] = useState(disVal); 
    
    const date = new Date()
    const dateFormate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    
    //const dateFormate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getMilliseconds();
    //2018, 11, 24, 10, 33, 30, 0 //Year, Month, Day, hh, mm, mms, 0
    // let sateArray = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getMilliseconds(), 0]
    
    

    useEffect(()=>{
        const date = new Date()       
        setToDay(date);
        setFromDate(date);        
        setTestState(date);
    },[])
    useEffect(()=>{        
        
        if(fromDate && toDate){
            diffValueCal(fromDate,toDate);
        } else{
            let diffString = "0d  0w 0m."       
            setDiffValue(diffString); 
        } 
        
    },[fromDate, toDate])
   
    const diffValueCal = (fromData, toData) =>{        
        var from = new Date(fromData)
        var to = new Date(toData)
        const diffMonth = to.getMonth() - from.getMonth();        
        var diff = to.getTime() - from.getTime();
        var daydiff = Math.round(diff / (1000 * 60 * 60 * 24)); 
        var weekdiff = Math.round(diff / (1000 * 60 * 60 * 168));
        var diffString = daydiff+"d / "+weekdiff+"w / "+diffMonth+"m."        
        setDiffValue(diffString);               
    }
    return(
        <div  className="datePickerInput col">
            <label>Todya's Date:</label>            
            <DateDisplay dateObjct={toDay}/>
            <label>From Date:</label>
            <DateDisplay dateObjct={fromDate}/>
            <label>To Date:</label>
            <DateDisplay dateObjct={toDate}/>
            <label>Show Last:</label>
            <div className="diffDataCon">{diffValue}</div>
        </div>
    )
}
export default DisplayData;