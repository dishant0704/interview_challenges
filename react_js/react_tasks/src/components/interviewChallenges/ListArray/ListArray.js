import React, { useState } from 'react'
import style from './style.module.css'

function ListArray() {

    const {listWrapper, listItems, active} = style
    const listArray = [
        {name:"All", flag: true},
        {name:"Ketan", flag: false},
        {name:"Dishant", flag: false},
        {name:"Megha", flag: false},
        {name:"Rajani", flag: false},
        {name:"Dattatraya", flag: false},
        {name:"Anjali", flag: false},
        {name:"Swara", flag: false}
    ]

    const [searchValue, setSearchValue] =useState("")
    const [listData, setListData] = useState(listArray)

    const filterData = listData.filter((item)=>item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    const buttonTogg = (index) => {
        const arrayData = [...listData]
        arrayData[index].flag = !arrayData[index].flag
        setListData(arrayData)
    }
    
  return (
    <div className={listWrapper}>
      <input type='text' name='searchText' value={searchValue} on onChange={(e)=>setSearchValue(e.target.value)} />
      <div className={listItems}>
            {
                filterData.map((item, inx)=>{
                    const{name, flag}=item
                    return <button className={flag? active : ""} onClick={(e)=>buttonTogg(inx)} >{name}</button>
                })
            }
      </div>
    </div>
  )
}
export default ListArray
