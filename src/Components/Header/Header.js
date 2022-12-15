import React from 'react'
import './Header.css'
import { useState,useEffect } from 'react';


function Header() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
     if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
  };
  
 useEffect(() => {
    document.body.className = theme;
   }, [theme]);

  return (
    <div className='header'>
         <div className="header_container_dark_light_mode">
            <div className="headerLeftSeciton">
                <h3>Where in the world?</h3>
            </div>
            <div className="headerRightSection">
              <i onClick={toggleTheme} class="far fa-moon"></i>
            </div>
         </div>
    </div>
  )
}

export default Header