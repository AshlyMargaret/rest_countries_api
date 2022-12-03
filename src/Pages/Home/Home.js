import React from 'react'
import CountryInformation from '../../Components/CountryInformation/CountryInformation'
import DropDown from '../../Components/DropDown/DropDown'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import './Home.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {baseUrl} from '../../api'

function Home() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
      getCountryListAPI();
  }, [])


 const getCountryListAPI = (region = "all") => {
      axios.get(`${baseUrl}${region}?fields=name,region,flag,capital,population`).then((response) => {
          setCountries(response.data)
      })

      
  }
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
             <DropDown getCountryListAPI={getCountryListAPI}/>
            </div>
          </div>
          <div className="flagRegionSection">
            <CountryInformation countries = {countries}/>
          </div>
        </main>
    </div>
  )
}

export default Home