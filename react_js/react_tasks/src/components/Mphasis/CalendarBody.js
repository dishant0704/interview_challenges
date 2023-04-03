import React, { useState, useEffect, Fragment } from "react";
import {CalendarContext} from './CalendarContexts'

const CalendarBody = (props) =>{

    const days = props.dyasArray
    const month = props.currMonth
    const year = props.currYear
    const selectedDate = props.setSelDate
    const inputName = props.inputName

    const [daysCount, setDaysCount] = useState();
    const [startDate, setStartDate] = useState();
    const [clickedDate, setClickedDate] = useState();

    const dyasinMonth = () =>{
        let days =  new Date(year, (month+1), 0).getDate();
        setDaysCount(days)
    }

    const monthStartDate = () =>{
        const startDate = new Date(year+"-"+(month+1)+"-01").getDay();
        setStartDate(startDate);
    }

    useEffect(()=>{
        dyasinMonth();
        monthStartDate();
    },[year, month]) 
    
    const getClickDate = (e) =>{
       let currDate = Number(e.target.innerText)
       selectedDate(currDate); 
    }

    const calendarBody = (intRows, intColumns) =>{       
        var rows = [];
        var id = 0
        var date = 1;
        var dataFlag = false
        for (var i = 0; i < intRows; i++) {
            var columns = [];
            for (var j = 0; j < intColumns; j++) {
                var column;               
                if(i===0){
                    column = <div className="col calHedCol">{days[j].slice(0, 2)}</div>
                    }else{
                        var dateValue = " ";
                        if(id === startDate){
                            dateValue = date;
                            //date++
                            dataFlag = true
                        }
                        if(dataFlag && date <= daysCount){
                            dateValue = date;
                            date++
                        }else{dataFlag = false}
                        
                        column = <div id={"dateId_"+id} className={dataFlag?"col calBodyCol":"col calBodyCol disabled"}><a onClick={getClickDate}>{dateValue}</a></div>

                        id++;
                    }
                columns.push(column);
                
            }
            rows.push(<div key={"row"+i} className="row calHedRow">{columns}</div>);
        }
        return rows;
    }
    return(
        <Fragment>
            {calendarBody(7, 7)}
        </Fragment>
    )

}
export default CalendarBody;