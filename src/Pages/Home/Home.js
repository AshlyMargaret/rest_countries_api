import React from 'react'
import CountryInformation from '../../Components/CountryInformation/CountryInformation'
import DropDown from '../../Components/DropDown/DropDown'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import './Home.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {baseUrl} from '../../api'
import Globe from '../../76469-globe-world.gif'


function Home() {

  const [countries, setCountries] = useState([])
  const [loading ,setLoading] = useState(true)

  useEffect(() => {  
      getCountryListAPI();   
  }, [])


 const getCountryListAPI = (region = "all") => { 
  setLoading(true) 
  setTimeout(()=>{
    axios.get(`${baseUrl}${region}?fields=name,region,flag,capital,population,nativeName,subregion,topLevelDomain,currencies,languages,borders`).then((response) => {
      setCountries(response.data)   
      setLoading(false)
  })  
  },1000)
   
  }

const getCountryListByName = (name)=>{
  axios.get(`${baseUrl}/name/${name}`).then((response) => {
    setCountries(response.data)
      })
  // https://restcountries.com/v2/name/Afghanistan
}
  return (
    
    <div className='home'>
        <header>
            <Header/>
        </header>
        <main>
          <div className="search_filter_country_region">
            <div className="searchBar">
                <Search getCountryListByName={getCountryListByName}/>
            </div>
            <div className="filterDropBox">
             <DropDown getCountryListAPI={getCountryListAPI}/>
            </div>
          </div>
          <div className="flagRegionSection">
            {
              loading ? <img src={Globe} alt="Globe" className='globe' /> : <CountryInformation countries = {countries}/> 
            }   
             
          </div> 
        </main>     
    </div>
  
  )
}

export default Home