import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
const Weather = () => {
  return (
    <div className='weather'>
        
        {/*----- Search -----*/}
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} />
      </div>
        {/*----- Weather Details -----*/}
        <img className='weather-icon' src={clear_icon} />
        <p className='temperature'>16°c</p>
        <p className='location'>London</p>
        <div className='weather-data'>
           <div className="col">
            <img src={humidity_icon}/>
            <div>
                <p>91 %</p>
                <span>Humidity</span>
            </div>
           </div>
           <div className="col">
            <img src={wind_icon}/>
            <div>
                <p>4.2 Km/h</p>
                <span>Wind Speed</span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Weather
