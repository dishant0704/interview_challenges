import React, { createContext, useState } from "react";

export const CalendarContext = createContext({    
    fromDate: null,
    setFromDate: () =>null,
    toDate: null,
    setToDate: () =>null
})
export const CalendarProvider = ({children}) =>{
    const[fromDate, setFromDate] = useState(null);
    const[toDate, setToDate] = useState(null);
    const value = {fromDate, setFromDate, toDate, setToDate}
    return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>
}