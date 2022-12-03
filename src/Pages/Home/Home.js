import React from 'react'
import CountryInformation from '../../Components/CountryInformation/CountryInformation'
import DropDown from '../../Components/DropDown/DropDown'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <header>
            <Header/>
        </header>
        <main>
          <div className="search_filter_country_region">
            <div className="searchBar">
                <Search/>
            </div>
            <div className="filterDropBox">
             <DropDown/>
            </div>
          </div>
          <div className="flagRegionSection">
            <CountryInformation/>
          </div>

        </main>

    </div>
  )
}

export default Home