import React from 'react'
import './CountryInformation.css'
import axios from 'axios';
import { useEffect, useState } from 'react'



function CountryInformation() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountryListAPI();
    }, [])


   const getCountryListAPI = (region = "all") => {
        axios.get(`https://restcountries.com/v2/${region}?fields=name,region,flag,capital,population`).then((response) => {
            setCountries(response.data)
        })
    }

    return (
        <div className='country_Information'>
            {
                countries.map((country, index) => {
                    return (

                        <div className="countryDetails">
                            <div className="flagImage">
                                <img src={country.flag} alt="" />
                            </div>
                            <div className="countryName">
                                <h5>{country.name}</h5>
                            </div>
                            <div className="informationAbtPopulationRegionFlag">
                                <div className="population">
                                    <p><span>Population:</span>{country.population}</p>
                                </div>
                                <div className="region">
                                    <p><span>Region:</span>{country.region}</p>
                                </div>
                                <div className="capital">
                                    <p><span>Capital:</span>{country.capital}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default CountryInformation