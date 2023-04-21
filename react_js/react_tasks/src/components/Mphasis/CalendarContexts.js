import React, { createContext, useState } from "react";

export const CalendarContext = createContext({
    toDay: null,
    setToDay: () => null, 
    fromDate: null,
    setFromDate: () =>null,    
    toDate: null,
    setToDate: () =>null,
    testState: null,
    setTestState: () =>null   
})
export const CalendarProvider = ({children}) =>{
    const[toDay, setToDay] = useState(null);
    const[fromDate, setFromDate] = useState(null);
    const[toDate, setToDate] = useState(null);
    const[testState, setTestState] = useState(null);   
    const value = {toDay, setToDay, fromDate, setFromDate, toDate, setToDate, testState, setTestState}
    return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>
}