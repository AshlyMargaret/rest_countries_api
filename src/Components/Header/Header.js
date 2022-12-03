import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
         <div className="header_container_dark_light_mode">
            <div className="headerLeftSeciton">
                <h3>Where in the world?</h3>
            </div>
            <div className="headerRightSection">
              <p>Dark Mode</p>
              <i class="far fa-moon"></i>
            </div>
         </div>
    </div>
  )
}

export default Header