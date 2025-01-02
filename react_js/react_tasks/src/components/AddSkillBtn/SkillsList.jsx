import React from 'react'
import style from './AddSkillBtn.module.css'

const SkillsList = (props) => {
    const{skillWrapper, skillItem}=style
    const{listArray, deleteFun}=props
  return (
    <div className={skillWrapper}>
      {listArray.map((item, index) => {
        const { id, name} = item
        return (
          <div key={id} className={skillItem}>
            <label>{name}</label>
            <button onClick={()=>deleteFun(id)} >X</button>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsList
