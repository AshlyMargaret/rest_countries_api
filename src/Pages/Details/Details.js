import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import './Details.css'
import { useNavigate } from "react-router-dom";


function Details() {

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.state);
  const countryState = location.state;
 
  return (
    <div className='details'>
      <div className="details_Header">
        <Header/>
      </div>
      <div className="buttonSec">
        <button onClick={()=>{
          navigate(-1)
        }}>Back</button>
      </div>
      <div className="countryDetailsBlock">
        <div className="countryImage">
          {/* <img src={location.state.country.flag} alt="" /> */}
          <img src={countryState.country.flag} alt="" />
        </div>
        <div className="countryDetailsSecBloc">
          <div className="countryName">
            {/* <h3>{location.state.country.name}</h3> */}
            <h3>{countryState.country.name}</h3>
          </div>
          <div className="leftRight">
          <div className="countryOtherDetailsLeft">
            <div className="nativeName">
             <p>Native Name : {location.state.country.nativeName}</p>
            </div>
            <div className="population">
              <p>Population : {location.state.country.nativeName}</p>
            </div>
            <div className="region">
              <p>Region : {location.state.country.population}</p>
            </div>
            <div className="subRegion">
              <p>Sub region : {location.state.country.subregion}</p>
            </div>
            <div className="capital">
              <p>Capital : {location.state.country.capital}</p>
            </div>
          </div>
          <div className="countryOtherDetailsRight">
            <div className="topLevelDomain">
              <p>Top Level Domain : {location.state.country.topLevelDomain}</p>
            </div>
            <div className="currencies">
              <p>Currencies : {location.state.country.currencies[0].name}</p>
            </div>
            <div className="languages">
              <p>Languages : {location.state.country.languages[0].name}</p>
            </div>
          </div>
          </div>
        </div>
        <div className="boredercountries">            
        </div>
      </div>
    </div>
  )
}

export default Details