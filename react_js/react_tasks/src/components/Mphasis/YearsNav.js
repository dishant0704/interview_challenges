import React, { useState, useEffect, Fragment } from "react";
import {
    FaAngleLeft,
    FaAngleDoubleLeft,
    FaAngleRight,
    FaAngleDoubleRight
} from 'react-icons/fa'

const YearsNav = (props) => {
    
    //Month Array from Props
    const monthsArray = props.monthsArray
    const setMonthValue = props.setMonth
    const setYearValue = props.setYear
    
    //Get Date methord form Javascript
    const dateObj = new Date();
    const currMonthIndex = dateObj.getMonth();
    const currYear = dateObj.getFullYear();
    
    //Defind and store value     
    const [year, setYear] = useState(currYear);
    const [curMonthInx, setCurMonthInx] = useState(currMonthIndex);
    const [month, setMonth] = useState(monthsArray[curMonthInx]);
    
    useEffect(()=>{
        setMonth(monthsArray[curMonthInx]);
        setMonthValue(curMonthInx);       
    },[curMonthInx]);

    useEffect(()=>{
        setYearValue(year);
    },[year])

    //Previous MonethBtn;    

    //Next MonethBtn;
   
    console.log()
    return (
        <Fragment>
            <div className="row">
                <div key={"yn_doubLeft"} className="headBtn col" onClick={()=>setYear(year - 1)}><FaAngleDoubleLeft /></div>
                <div key={"yn_left"} className={curMonthInx === 0? "headBtn col disabled": "headBtn col"} onClick={()=>setCurMonthInx(curMonthInx - 1)}><FaAngleLeft/></div>
                <div key={"yn_monthDis"} className="headBtn col-6">{month} <span>{year}</span></div>
                <div key={"yn_right"} className={curMonthInx < (monthsArray.length - 1)? "headBtn col": "headBtn col disabled"} onClick={()=>setCurMonthInx(curMonthInx + 1)}><FaAngleRight /></div>
                <div key={"yn_doubRight"} className={currYear === year? "headBtn col disabled": "headBtn col"} onClick={()=>setYear(year + 1)}><FaAngleDoubleRight /></div>
            </div>
        </Fragment>
    )

}
export default YearsNav;