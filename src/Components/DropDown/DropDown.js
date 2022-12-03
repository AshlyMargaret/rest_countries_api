import React from 'react'
import './DropDown.css'

function DropDown() {
  return (
    <div className='DropDown'>
       <div class="select-dropdown">
	      <select>
        <option value="Option 1">Filter by Region</option>
		    <option value="Option 1">Africa</option>
		    <option value="Option 2">America</option>
		    <option value="Option 3">Asia</option>
        <option value="Option 1">Europe</option>
		    <option value="Option 2">Oceania</option>       
	     </select>
       </div>
    </div>
  )
}

export default DropDown