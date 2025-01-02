import React from 'react'
import currConv from'./currConv.module.css'
import { HiStar, HiOutlineStar } from 'react-icons/hi2'
const {dropWrapper, favoriteBtn} = currConv
function Dropdown(props) {
    const {
        title, 
        currencies, 
        onChange, 
        currency,
        handleFavorite,
        favorites
    } = props
    const isFavorite = (curr) => favorites.includes(curr)
    
  return (
    <div className={dropWrapper}>
        <label >{title}</label>
        <select className="form-select" defaultValue="" value={currency} onChange={(e)=>onChange(e.target.value)} disabled={currencies.length === 0}>
            <option selected value="" key={title}>Select Currency</option>
            {favorites && favorites.map((currency)=>{                   
                    return(<option key={currency} value={currency}>{currency}</option>)
                })
            }
            {favorites && <hr/>}
            {currencies && currencies.filter((currency)=> !favorites.includes(currency)).map((currency)=>{                   
                    return(<option key={currency} value={currency}>{currency}</option>)
                })
            }
        </select>
        <button
          onClick={() => handleFavorite(currency)}
          className={`position-absolute border-0 float-right ${favoriteBtn}`}
          disabled={!currency?true:false}
        >
          {isFavorite(currency) ? <HiStar /> : <HiOutlineStar />}
        </button>
    </div>
  )
}

export default Dropdown     