import React,{useEffect,useState} from "react";

const DateDisplay = (props) =>{
    
    const dateObjct = props.dateObjct   
    
    let disVal = "dd / mm / yyyy | hh:mm";
    
    const defaultDataStru = {
        "dateObj":null,
        "year": null,
        "month": null,
        "date": null,
        "hh": null,
        "mm": null
    }

    const [disDate, setDisDate] = useState(disVal);
    const [dataStru, setDataStru] = useState(defaultDataStru) 
     
    useEffect(()=>{        
        let tempDataStru = dataStru;
        let dateMeth = new Date(dateObjct);
        tempDataStru.year = dateMeth.getFullYear();
        tempDataStru.month = (dateMeth.getMonth() + 1);
        tempDataStru.date = dateMeth.getDate();
        tempDataStru.hh = (new Date().getHours());
        tempDataStru.mm = (new Date().getMinutes());
        tempDataStru.dateObj =  tempDataStru.year+"-"+tempDataStru.month+"-"+tempDataStru.date
        setDataStru(tempDataStru)
        dateObjct? setDisDate(tempDataStru.date+" / "+tempDataStru.month+" / "+tempDataStru.year+" | "+tempDataStru.hh+":"+tempDataStru.mm)
        : setDisDate(disVal);
     },[dateObjct])
    
    //Return Date:
    return disDate
}
export default DateDisplay