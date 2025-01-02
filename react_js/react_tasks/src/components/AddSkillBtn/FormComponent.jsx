import React from 'react'

import style from './AddSkillBtn.module.css'

const FormComponent = (props) => {
  const{formWrapper}=style
  const {onSubmit, textBoxRef} = props
  return (
    <div className={formWrapper}>
      <h1>Skills Required</h1>
      <form onSubmit={onSubmit}>
        <input ref={textBoxRef} name='addSkill' type="text" placeholder="Enter Skill"  required/>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default FormComponent
