import React, {useState} from "react";

export default function CountFun (){
    const[count, setCount] = useState(0);

    return(
        <>
            <h1>Btn Click Count -- Functional Component</h1>
            <span>Click Count {count}</span>
            <button onClick={()=>setCount(count+1)}>Add Count</button>
        </>
    );

}