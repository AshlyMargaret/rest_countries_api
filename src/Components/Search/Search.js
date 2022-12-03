import React from 'react'
import './Search.css'


function Search() {
    
  return (
    <div className='search'>
        <input type="text" id="searchInput" placeholder="Search.."></input>
        <div id='submitsearch'></div>
    </div>
  )
}

export default Search