import React from 'react'
import './CountryInformation.css'
import { useNavigate } from "react-router-dom";


function CountryInformation(props) {
  

    const navigate = useNavigate();


    const handleChange = (country)=>{
        console.log(country.name);
        navigate(`details/${country.name}`, {state:{country : country}});

    }

    return ( 
        <div className='country_Information'>
            {
                props.countries.map((country, index) => {
                    return (
                        <div key={index} className="countryDetails" onClick={()=>{
                            handleChange(country)
                        }}>
                       
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