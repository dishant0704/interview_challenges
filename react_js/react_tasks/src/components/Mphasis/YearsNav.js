import React, { useState, useEffect, Fragment, useContext } from "react";
import { CalendarContext } from "./CalendarContexts";
import {
    FaAngleLeft,
    FaAngleDoubleLeft,
    FaAngleRight,
    FaAngleDoubleRight
} from 'react-icons/fa'

const YearsNav = (props) => {
    
    //Month Array from Props 
    const {toDay} = useContext(CalendarContext);   
    const monthsArray = props.monthsArray
    const setMonthValue = props.setMonth
    const setYearValue = props.setYear
    
    //Get Date methord form Javascript
    const dateObj = new Date(toDay);
    const currMonthIndex = (dateObj.getMonth()+1);
    const currYearIndex = dateObj.getFullYear();

    //Defind and store value     
    const [year, setYear] = useState(currYearIndex);
    const [curMonthInx, setCurMonthInx] = useState(currMonthIndex - 1);
    const [month, setMonth] = useState(monthsArray[curMonthInx]);
    
    useEffect(()=>{
        setMonth(monthsArray[curMonthInx]);
        setMonthValue(curMonthInx);
        console.log(curMonthInx);           
    },[curMonthInx]);

    useEffect(()=>{
        setYearValue(year);
    },[year])   

    return (
        <Fragment>
            <div className="row">
                <div key={"yn_doubLeft"} className="headBtn col" onClick={()=>setYear(year - 1)}><FaAngleDoubleLeft /></div>
                <div key={"yn_left"} className={curMonthInx === 0? "headBtn col disabled": "headBtn col"} onClick={()=>setCurMonthInx(curMonthInx - 1)}><FaAngleLeft/></div>
                <div key={"yn_monthDis"} className="headBtn col-6">{month} <span>{year}{curMonthInx+" === "+month}</span></div>
                <div key={"yn_right"} className={curMonthInx === month? "headBtn col disabled": "headBtn col"} onClick={()=>setCurMonthInx(curMonthInx + 1)}><FaAngleRight /></div>
                <div key={"yn_doubRight"} className={currYearIndex === year? "headBtn col disabled": "headBtn col"} onClick={()=>setYear(year + 1)}><FaAngleDoubleRight /></div>
            </div>
        </Fragment>
    )

}
export default YearsNav;