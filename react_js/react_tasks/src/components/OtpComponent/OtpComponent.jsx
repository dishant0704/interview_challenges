import React, { useEffect, useRef, useState } from "react";
import style from "./OtpComponent.module.css";

//Two-factor code input
//Ref: https://frontendeval.com/questions/code-input?tab=question

const OtpComponent = ({ length = 4, onOtpSubmit = () => {} }) => {
  const { container, inputContainer, btnContainer, error } = style;
  const inputValue = new Array(length).fill();
  const refs = useRef([]);
  const [input, setInput] = useState(inputValue);
  const [missing, setMissing] = useState(inputValue);
  const [otpCode, setOtpCode] = useState();

  const code = "8585";

  useEffect(() => {
    if(refs.current[0]){
      refs.current[0].focus()
    }
  }, []);

  const handleInputChange = (e, index) => {
    const IValue = e.target.value;
    //check if inserted value number or not
    if (isNaN(IValue)) return;
    //move to next input    
    if (IValue && index < input.length - 1 && refs.current[index + 1]) {
      refs.current[index + 1].focus();
    }  
    //set value in var
    const inValue = [...input];
    inValue[index] = IValue;
    setInput(inValue);
  };

  const handleClick = (index) =>{
    if(index > 0 && (!input[index - 1])){
      console.log("input: ", input)
      console.log("==> ", input.indexOf(undefined))
      refs.current[input.indexOf(undefined)].focus();
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !input[index] && index > 0 && refs.current[index - 1]) {
      const inValue = [...input];
      inValue[index] = "";
      setInput(inValue);
      //move to previous input
        //console.log(e.target.previousSibling)
        //e.target.previousSibling.focus()
      refs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (isNaN(data) || data.length !== input.length) return;
    const pasteValue = data.split("");
    setInput(pasteValue);
    refs.current[0].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = input
      .map((item, i) => {
        if (item === "") return i;
      })
      .filter((item) => item || item === 0);
    setMissing(inputValue);
    if (inputValue.length > 0) return;
    if (input.join("") == code) {
      setOtpCode(input.join());
      setInput(["", "", "", ""]);
    } else {
      setOtpCode("");
    }
  };
  
  return (
    <div className={container}>
      <h1>Two-factor code input</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={inputContainer}>
          {inputValue.map((inputItem, i) => {
            return (
              <input
                value={input[i]}
                key={i}
                type="text"
                maxLength="1"
                ref={(input) => (refs.current[i] = input)}
                className={missing.includes(i) ? error : ""}
                //required='true'
                pattern="[0-9]"
                onClick={()=>handleClick(i)}                
                onPaste={(e) => handlePaste(e)}
                onChange={(e) => handleInputChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            );
          })}
        </div>
        <div className={btnContainer}>
          <button>Submit</button>
        </div>
        {otpCode}
      </form>
    </div>
  );
};

export default OtpComponent;
