import React, { useState, useEffect, Fragment, useContext} from "react";
import CalendarWed from "./Calendar";
import { FaCalendarAlt } from 'react-icons/fa'
import DateDisplay from "./DateDisplay";
import {CalendarContext} from './CalendarContexts'

const FormInput = (props) => {
    const lableText = props.label
    const inputName = props.name
    //let disabledFlag = false  
    
    const [value, setValue] = useState();
    const [calndFlag, setCalndFlag] = useState(false);
    const [pickerFlag, setPickerFlag] = useState(false);
    const [valueFlag,setValueFlag] = useState(false);
    const [disabledFlag, setDisabledFlag]= useState(false);

    const [disValue, setDisValue] = useState(); 
    const [dataStru, setDataStru] = useState();

    const {toDay, setToDay} = useContext(CalendarContext); 
    const {fromDate, setFromDate} = useContext(CalendarContext);    
    const {toDate, setToDate} = useContext(CalendarContext); 

    useEffect(() => {       
       setPickerFlag(props.pickerFlag);       
    if(inputName === "toInput"){
        setToDate(dataStru)
        setValue(dataStru);
       
    }else if(inputName === "fromInput"){
        setFromDate(dataStru)            
        setValue(dataStru);           
    }else{
        setValue({})
    }          
    }, []);

    useEffect(()=>{        
        if(value && valueFlag){
            setPickerFlag(true);           
            let dateData = new Date(value);
            let dd = dateData.getDate();
            let mm = (dateData.getMonth()+1);
            let yyyy = dateData.getFullYear();
            let hh = (new Date().getHours());
            let minm = (new Date().getMinutes());
            let disVal = dd+" /"+mm+" / "+yyyy+" | "+hh+":"+minm
            setDisValue(disVal);
        }  
        if(inputName === "toInput" && toDay == fromDate){           
            setDisabledFlag(false)
        }else{
            setDisabledFlag(true)
        }      
    },[value, fromDate])

    const openCalender = (e) => {
        e.preventDefault();
        if(!calndFlag){
            setCalndFlag(true)
        }else{setCalndFlag(false);}
       
    }
    return (
        <Fragment>
            <div key={lableText} className="datePickerInput col">
                <label>{lableText}</label>                
                <div key={"disDataCon"} className={disabledFlag ? "disDataCon" : "disDataCon disabled"} onClick={openCalender}><FaCalendarAlt className="icon" /> <DateDisplay dateObjct={value}/></div>
                {calndFlag && pickerFlag ? <CalendarWed setValue={setValue} valueFlag={setValueFlag} flagClose = {setCalndFlag} nameFlag={inputName}/> : null}
            </div>
        </Fragment>
    )

}
export default FormInput;