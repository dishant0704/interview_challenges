import React, { memo, useEffect, useState,useRef } from 'react'
import style from "./PersonalForm.module.css";

const SearchBox = (props) => {
    const {
      inputWrapper,
      inputWrapperSpan2to1,
      searWrapper,
      skillSuggestions,
      suggestionOpen,
      suggestionClose,
      dropListBtn,
      active,
      error
    } = style;
    const { name, type, placeholder, colSpan, required, options, setState, errorMassage } = props;

    const [searchText, setSearchText] = useState('')
    const [countryData, setCountryData] = useState([])
    const [dataFlag, setDataFlag] = useState(false)
    const [categoryName, setCategoryName] = useState([])    
    const [focusedIndex, setFocusedIndex] = useState(-1)
    const resultContainer = useRef(null)
    
    
    let filterData = []

    useEffect(()=>{
      if(options !== undefined && options.length > 0){
        const category = options.map((item)=>Object.keys(item))
        setCategoryName(category)
        setCountryData(options)        
        setDataFlag(true)
      }else{
        setDataFlag(false)
      }
    },[options])

    useEffect(()=>{
      if(!resultContainer.current) return
      resultContainer.current.scrollIntoView({
        block: "center",
      });
    },[focusedIndex])

    if(dataFlag && searchText.length>0){      
      filterData = countryData.filter((item, index) => item[categoryName[index][0]].toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) 
    }

    const onSearchBtnClick = (value) =>{
      setSearchText(value);
      setState(value)
      setDataFlag(false)
    }

    const heandleFocused = () =>{
      //setSearchText("")  
    }

    const heandleKey = (e) =>{
      const {key} = e;
      let nextIndexCount = 0   
      //ArrowDown
      if(key === "ArrowDown"){
        nextIndexCount = (focusedIndex +1) % filterData.length      
      }
      //ArrowUp
      if(key === "ArrowUp"){
        nextIndexCount = (focusedIndex -1) % filterData.length 
      }
      //Enter
      if(key === "Enter"){
        const currItem = filterData[focusedIndex]
        onSearchBtnClick(currItem[Object.keys(currItem)[0]])        
      }
      setFocusedIndex(nextIndexCount)    
    }
    
    return (
      <div
        tabIndex={1}
        onKeyDown={heandleKey}
        onBlur={heandleFocused}
        className={
          colSpan
            ? `${inputWrapperSpan2to1} ${searWrapper} ${inputWrapper}`
            : `${searWrapper} ${inputWrapper}`
        }
      >
        <input
          type={type}
          name={name}
          value={searchText}
          onFocus={() => setDataFlag(true)}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder={placeholder}
          required={required}
        />
        <div
          className={`${skillSuggestions} ${
            dataFlag > 0 && filterData.length > 0
              ? suggestionOpen
              : suggestionClose
          }`}
        >
          {filterData.map((item, index) => {
            return (
              <div
                ref={index === focusedIndex ? resultContainer : null}
                className={`${dropListBtn} ${
                  index === focusedIndex ? active : null
                }`}
                onClick={() => {
                  onSearchBtnClick(item[categoryName[index][0]]);
                }}
              >
                {item[categoryName[index][0]]}
              </div>
            );
          })}
        </div>
        <span className={error}>{errorMassage}</span>
      </div>
    );
}

export default memo(SearchBox)
