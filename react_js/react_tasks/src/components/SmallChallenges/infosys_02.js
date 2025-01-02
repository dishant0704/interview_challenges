import React, { useState, useRef } from 'react'
import styled from 'styled-components'
// Company infosys
//Technical Discussion for Ketan- ReactJS
//Tuesday, 25 June⋅15:30 – 16:00
//alpeshtanaji.damame@infosys.com and nikita_kuvalekar@infosys.com
const App = () => {
  const [count, setCount] = useState(0)   
   const timerCount = useRef(null)
  const counter = () =>{
    console.log("call")
    timerCount.current  = setInterval(()=>{setCount((arg)=>arg+1)}, 1000)
  }
  const stopCount = () =>{
    clearInterval(timerCount.current)
    clearInterval
    setCount(count)
  }
  const resetCount = () =>{
    clearInterval(timerCount.current)
    setCount(0)
  }
  return (
    <>
      <h1>{count}</h1>
      <Button onClick={counter}>Start Timer</Button>
      <Button onClick={stopCount}>Stope Timer</Button>
      <Button onClick={resetCount}>ResetTimer</Button>
    </>
    
  )
}

const Button = styled.button`
  font-size: 2rem;
`

export default App

// import { useCallback, useRef, useState } from 'react';

// const IntervalComponent = () => {
//   const intervalId = useRef(null);
//   const [count, setCount] = useState(0);

//   const startInterval = useCallback(() => {
//     intervalId.current = setInterval(() => {
//       if (count < 5) {
//         setCount((count) => count + 1);
//       } else {
//         clearInterval(intervalId.current);
//       }
//     }, 1000);
//   }, [count]);

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={startInterval}>
//         Start interval
//       </button>
//     </>
//   );
// };