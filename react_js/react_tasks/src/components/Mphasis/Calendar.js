import React, { useState, useEffect, Fragment, useContext} from "react";
import {     
    FaRegClock, 
    FaAngleUp, 
    FaAngleDown } from 'react-icons/fa'
import { CalendarContext } from "./CalendarContexts";
import YearsNav from "./YearsNav";
import CalendarBody from "./CalendarBody";
   

const Calendar = (props) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const[selMonth, setSelMonth] = useState();
    const[selYear, setSelYear] = useState();
    const[selDate, setSelDate] = useState();
    //const[fromDate, setFromDate] = useState();

    const setValue = props.setValue
    const valueFlag = props.valueFlag
    const flagClose = props.flagClose 
    const inputName = props.nameFlag
    
    const {setFromDate} = useContext(CalendarContext)
    const {setToDate} = useContext(CalendarContext) 
    
    const {fromDate} = useContext(CalendarContext);
    const {toDate} = useContext(CalendarContext);

    useEffect(()=>{       
             
       if(selYear && selMonth && selDate){
        setValue(selYear+"-"+(selMonth+1)+"-"+selDate);
        const dateObj = selYear+"-"+(selMonth+1)+"-"+selDate;
        valueFlag(true);
        flagClose(false);
        
        if(inputName == "fromInput"){
            setFromDate(dateObj)
        }else if(inputName == "toInput"){
            setToDate(dateObj);
        }else{
            setFromDate({})
            setToDate({})
        }
    }else{
        setValue(null);
    }
    // console.log(fromDate);
    // console.log(toDate);

    },[selDate])
   
    return (
        <Fragment>
            <div className="calendarWrapper">
                <div className="panel panel-default panelDefault">
                    <div className="panel-heading panelHeading text-center col-12 col-sm-12">
                        <YearsNav monthsArray = {months} setMonth = {setSelMonth} setYear = {setSelYear}/>
                    </div>
                    <div className="panel-body panelBody">
                        <CalendarBody dyasArray={days} currMonth={selMonth} currYear={selYear} setSelDate={setSelDate}  />
                    </div>
                    {/* <div className="panel-footer panelFooter text-center">
                        <div className="row">
                            <div className="footerLabel col"><FaRegClock /></div>
                            <div className="footerLabel col">hh:</div>
                            <div className="footerBtn col">
                                <FaAngleUp /><br/>
                                <FaAngleDown />
                                </div>
                            <div className="footerLabel col">mm:</div>
                            <div className="footerBtn col">
                                <FaAngleUp /><br/>
                                <FaAngleDown />
                                </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Calendar;