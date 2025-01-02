import React,{ useRef, useState, useEffect} from 'react'
import style from './AddSkillBtn.module.css'

import FormComponent from './FormComponent'
import SkillsList from './SkillsList'
import SkillSearchComponent from './SkillSearchComponent'


const AddSkillBtn = () => {

    const{mainAddSkillWrapper}=style
    
    const skillTextBox = useRef()
    const [skills, setSkills] = useState([])
    const [searchskills, setSearchSkills] = useState([])

    const skillData = [
      {id: 1, name: "JavaScript"},
      {id: 2, name: "ReactJs"},
      {id: 3, name: "ES6"},
      {id: 4, name: "Sass"},
      {id: 5, name: "CSS"},
      {id: 6, name: "SCSS"},
      {id: 7, name: "jQuery"},
      {id: 8, name: "TypeScript"},
      {id: 9, name: "nestjs"},
      {id: 10, name: "Next Js"},
      {id: 11, name: "HTML"},
      {id: 12, name: "Ajax"},
      {id: 13, name: "Vite"},
      {id: 14, name: "Node"},
      {id: 15, name: "Bootstrap"},
    ]

    const [defaultSkillData, setDefaultSkillData] = useState(skillData)

    useEffect(()=>{
        if(localStorage.getItem('skillData')){
          const localeData = JSON.parse(localStorage.getItem('skillData'))
            setSkills(localeData.skills) 
            syncLocaleStore(localeData.searchskills);  
        }
        
    },[])

    useEffect(()=>{
        if(skills.length === 0 && searchskills.length === 0  ) return;
        const skillObj = {skills: skills, searchskills:searchskills}
        localStorage.setItem("skillData", JSON.stringify(skillObj))
        syncLocaleStore(searchskills)               
    },[skills, searchskills])

    function syncLocaleStore(data){
      setSearchSkills(data)
      // not common data logic
      const localedataArray = data.map((item) => item.name)      
      setDefaultSkillData(skillData.filter((item)=>!localedataArray.includes(item.name)))
    }

    const heandleSubmit = (e) =>{
        e.preventDefault()
        const newSkill = skillTextBox.current
        const newSkillObj = {id:new Date().getTime(), name:newSkill.value.trim()}
        setSkills([...skills, newSkillObj])
        newSkill.value="";        
    }

    const deleteHeandle = (id) =>{
        setSkills(skills.filter(skill => skill.id !== id))
    }

    const searchDeleteHeandle = (id) =>{
      setSearchSkills(searchskills.filter(skill => skill.id !== id))
  }

    const getSearchSkillName = (id) =>{      
      const searchSkillName = defaultSkillData.find(skill => skill.id === id)
      setSearchSkills([...searchskills, searchSkillName])
      setDefaultSkillData(defaultSkillData.filter(skill => skill.id !== id))
    }
    
  return (
    <div className={mainAddSkillWrapper}>
      <FormComponent textBoxRef={skillTextBox} onSubmit={heandleSubmit} />
      {skills.length > 0 && (
        <SkillsList listArray={skills} deleteFun={deleteHeandle} />
      )}
      {/* Search by name */}
      <SkillSearchComponent skillData={defaultSkillData} onClick={getSearchSkillName} />
      {searchskills.length > 0 && (
        <SkillsList listArray={searchskills} deleteFun={searchDeleteHeandle} />
      )}      
    </div>
  ); 
}

export default AddSkillBtn
