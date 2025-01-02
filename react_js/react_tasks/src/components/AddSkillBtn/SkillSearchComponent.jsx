import React,{useEffect, useRef, useState} from 'react'
import style from './AddSkillBtn.module.css'

const SkillSearchComponent = (props) => {
  const {
    skillSearchWrapper,
    skillSuggestions,
    suggestionOpen,
    suggestionClose,
    searWrapper,
    dropListBtn,
    active
  } = style;
  const { skillData, onClick } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const resultContainer = useRef(null)

  useEffect(()=>{
    if(!resultContainer.current) return
    resultContainer.current.scrollIntoView({
      block: "center",
    });
  },[focusedIndex])

  const heandleFocused = () =>{
    setSearchTerm("")  
  }
  const filterData = skillData.filter((skill)=>skill.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

  const heandleKey = (e) =>{
    const {key} = e;
    let nextIndexCount = 0   
    //ArrowDown
    if(key === "ArrowDown"){
      nextIndexCount = (focusedIndex +1) % filterData.length
      console.log("nextIndexCount: ", nextIndexCount) 
      console.log("filterDataLength: ", filterData.length)      
    }
    //ArrowUp
    if(key === "ArrowUp"){
      nextIndexCount = (focusedIndex -1) % filterData.length 
    }
    //Enter
    if(key === "Enter"){
      const currItem = filterData[focusedIndex]
      const {id} = currItem
      onClick(id);
      setSearchTerm("") 
      
    }
    setFocusedIndex(nextIndexCount)    
  }
  
  return (
    <div className={skillSearchWrapper}>
      <h1>Search for a skill</h1>
      <div tabIndex={1} onKeyDown={heandleKey}  onBlur={heandleFocused} className={searWrapper}>
        <input
          type="text"
          name="searchSkill"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}          
        />
        <div
          className={`${skillSuggestions} ${
            searchTerm.length > 0 && filterData.length > 0 ? suggestionOpen : suggestionClose
          }`}
         >
          {filterData.map((skill, index)=>{
            return <div ref={index === focusedIndex? resultContainer: null} className={`${dropListBtn} ${index === focusedIndex? active: null }`} key={skill.id} onClick={()=>{onClick(skill.id); setSearchTerm("")}}>{skill.name}</div>
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillSearchComponent
