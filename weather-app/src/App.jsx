import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import { useState } from 'react'
const apiKeyMain = import.meta.env.VITE_OPENWEATHER_API_KEY;
const apiKeyGeo = import.meta.env.VITE_OPENWEATHER_API_KEY_GEO;

function App() {
  const [weatherData, setWearthData] = useState(null)
  const [geoData, setGeoData] = useState(null)

  const HandleSearch = async (location) => {
    try {
      const urlApiGeo=`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKeyGeo}`
      let lat, lon;
      
      await fetch(urlApiGeo)
      .then(response => response.json())
      .then(data => setGeoData(data));
      lat = geoData[0].lat
      lon = geoData[0].lon

      console.log(lat, lon)

      if(lat && lon){
      const urlApiMain = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKeyMain}`
      await fetch(urlApiMain)
      .then(response => response.json())
      .then(data => setWearthData(data));

      console.log(weatherData)
      }
      

    } catch (error) {
      console.error("Error al obtener datos del clima:", error)
    }


  }

  return (
    <>
      <div className="container mt-5">
        <h1>Aplicacion del Clima</h1>
        <SearchBar onSearch={HandleSearch} ></SearchBar>
        <hr />
        <WeatherDisplay></WeatherDisplay>

      </div>
    </>
  )
}

export default App
