import React from 'react'
import './DropDown.css'

function DropDown(props) {
  const getCountryListAPI = props.getCountryListAPI
  return (
    <div className='DropDown'>
       <div class="select-dropdown">
	      <select onChange={(e)=>{
           console.log(e.target.value)
           getCountryListAPI(`region/${e.target.value}`)
        }}>
        <option value="Option 1">Filter by Region</option>
		    <option value="Africa">Africa</option>
		    <option value="Americas">Americas</option>
		    <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
		    <option value="Oceania"></option>       
	     </select>
       </div>
    </div>
  )
}

export default DropDown