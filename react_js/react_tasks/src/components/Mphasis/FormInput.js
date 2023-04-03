import React, { useState, useEffect, Fragment, useContext} from "react";
import CalendarWed from "./Calendar";
import { FaCalendarAlt } from 'react-icons/fa'

import {CalendarContext} from './CalendarContexts'

const FormInput = (props) => {
    const lableText = props.label
    const setDate = props.setDate
    const inputName = props.name
    //let disabledFlag = false
    let defaultValue = props.value
    

    const dataStru = {
        "dateObj":null,
        "year": null,
        "month": null,
        "date": null,
        "hh": null,
        "mm": null
    }
    
    const [value, setValue] = useState();
    const [calndFlag, setCalndFlag] = useState(false);
    const [pickerFlag, setPickerFlag] = useState(false);
    const [valueFlag,setValueFlag] = useState(false);
    const [disabledFlag, setDisabledFlag]= useState(false);
    const [disValue, setDisValue] = useState(defaultValue);    
    
    const {setFromDate} = useContext(CalendarContext)
    const {setToDate} = useContext(CalendarContext) 
    
    const {fromDate} = useContext(CalendarContext);
    const {toDate} = useContext(CalendarContext);

    const enabledCal = () =>{
        console.log(inputName)
        let toDataFliag = fromDate    
        if(inputName === "toInput" && !toDataFliag){           
            setDisabledFlag(false)
        }else{
            setDisabledFlag(true)
        }

        if(inputName === "toInput"){
            setValue(toDate);
        }else{
            setValue(fromDate);
        }

        console.log(inputName+" = "+disabledFlag);
    }
   
    useEffect(() => {       
       setPickerFlag(props.pickerFlag);
       enabledCal();        
    }, []);

    useEffect(()=>{        
        if(value && valueFlag){
            setDate(value);
            setPickerFlag(true);           
            let dateData = new Date(value);
            let dd = dateData.getDate();
            let mm = (dateData.getMonth()+2);
            let yyyy = dateData.getFullYear();
            let hh = (new Date().getHours());
            let minm = (new Date().getMinutes());
            let disVal = dd+" /"+mm+" / "+yyyy+" | "+hh+":"+minm
            setDisValue(disVal);
        }
        enabledCal();
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
                <div key={"disDataCon"} className={disabledFlag ? "disDataCon" : "disDataCon disabled"} onClick={openCalender}>{pickerFlag? <FaCalendarAlt className="icon" />: null} {disValue}: {calndFlag}</div>
                {calndFlag && pickerFlag ? <CalendarWed setValue={setValue} valueFlag={setValueFlag} flagClose = {setCalndFlag} nameFlag={inputName}/> : null}
            </div>
        </Fragment>
    )

}
export default FormInput;