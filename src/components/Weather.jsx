import React, { useEffect, useState } from 'react'
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

    const [weatherData, setWeatherData] = useState(false);

   
    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13n": snow_icon,
        "13d": snow_icon,
    }
   
    const search = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`                
        const response = await fetch(url);
        const data = await response.json();
        const icon = allIcons[data.weather[0].icon]
        return setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
        })
    } 
    catch (error) {
        console.log("error",error);
        
    }
   }

   useEffect(()=> {
    search("london")
   }, [])

  return (
    <div className='weather'>
        
        {/*----- Search -----*/}
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} />
      </div>
        {/*----- Weather Details -----*/}
        <img className='weather-icon' src={weatherData.icon} />
        <p className='temperature'>{weatherData.temperature}°c</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
           <div className="col">
            <img src={humidity_icon}/>
            <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
            </div>
           </div>
           <div className="col">
            <img src={wind_icon}/>
            <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Weather
