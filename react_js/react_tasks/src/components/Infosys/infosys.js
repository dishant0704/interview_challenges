// Company infosys
//Technical Discussion for Ketan- ReactJS
//Tuesday, 25 June⋅15:30 – 16:00
//alpeshtanaji.damame@infosys.com and nikita_kuvalekar@infosys.com

import React, { Fragment, useRef, useState } from 'react'

const Infosys = () => {

    const [counter, setCounter] = useState(0)
    const [flag, setsetFlag] = useState(false)
    
    let timer = useRef(null)

    const startCounter = () =>{
        timer.current = setInterval(() => {
            setCounter((counter) => counter = counter +1)
    }, 1000)
    setsetFlag(true)
    }

    const stopeCounter = () =>{
      setCounter(counter)
      clearInterval(timer.current)
      setsetFlag(false)
    }

    const resetCounter = () =>{
      setCounter(0)
      clearInterval(timer.current)
      setsetFlag(false)
    }

  return (
    <Fragment>
      <h1>Counter</h1>
      <h2>Infosys</h2>
      <span>{counter}</span>      
      <button onClick={startCounter} disabled={flag}>Start Counter</button>
      <button onClick={stopeCounter} disabled={counter === 0}>Stope Counter</button>
      <button onClick={resetCounter} disabled={counter === 0}>Reset Counter</button>
    </Fragment>
  )
}

export default Infosys
