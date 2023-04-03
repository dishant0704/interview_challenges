import React, { useState, useEffect, Fragment, useContext } from "react";
import './DateRangePicker.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { CalendarProvider } from "./CalendarContexts";
import { CalendarContext } from "./CalendarContexts";

import FormInput from "./FormInput";

//Client Video Interview - Ketan Sawant - React Developer
//Dated on Thursday, 30 March⋅18:30 – 19:00 

const DateRangePicker = () => {

    let disVal = "dd / mm / yyyy | hh:mm"

    const[fromDate, setFromDate] = useState(disVal);
    const[toDate, setToDate] = useState(disVal);
    const[diffValue, setDiffValue] = useState(disVal);

    // const {fromDate} = useContext(CalendarContext);
    // const {toDate} = useContext(CalendarContext);
    // console.log(fromDate);
    // console.log(toDate);
    useEffect(()=>{        
        
        if(fromDate && toDate){
            diffValueCal(fromDate,toDate);
        } else{
            let diffString = "0d  0w 0m."       
            setDiffValue(diffString); 
        }      

    },[fromDate, toDate])

    const diffValueCal = (fromData, toData) =>{
        console.log(fromData+" == "+toData)
        var from = new Date(fromData)
        var to = new Date(toData)
        const diffMonth = to.getMonth() - from.getMonth();        
        var diff = to.getTime() - from.getTime();
        var daydiff = Math.round(diff / (1000 * 60 * 60 * 24)); 
        var weekdiff = Math.round(diff / (1000 * 60 * 60 * 168));
        var diffString = daydiff+"d / "+weekdiff+"w / "+diffMonth+"m."
        console.log(diffString)
        setDiffValue(diffString);               
    }

    return (
        <CalendarProvider >
        <Fragment>
            <div className="container text-center datRangPikWrapper">
                <div className="panel panel-default panelDefault col-12 col-sm-8">
                    <div className="panel-heading panelHeading col-12">Date Range Picker</div>
                    <div className="panel-body panelBody col-12">
                        <div className="row">
                            <FormInput name="fromInput" label="From: " pickerFlag = {true} setDate ={setFromDate} value={fromDate}/>
                            <FormInput name="toInput" label="To: " pickerFlag = {true}  setDate ={setToDate} value={toDate} defaultFlag={false}/>
                        </div>
                        <div className="row">
                            <div  className="datePickerInput col">
                                <label>Show Last:</label>
                                <div className="diffDataCon">{diffValue}</div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer panelFooter col-12">
                        <p>
                            <span>Ketan Sawant</span><br />
                            React Developer,<br />
                            <a href="mailTo:ketandutt@gmail.com" target="_blank">ketandutt@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
        </CalendarProvider>
    )
}

export default DateRangePicker;