import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import { useState } from 'react'
const apiKeyMain = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [weatherData, setWearthData] = useState(null)

  const HandleSearch = async (location) => {
    try {
      const urlApiMain = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=${apiKeyMain}`
      await fetch(urlApiMain)
      .then(response => response.json())
      .then(data => setWearthData(data));

      console.log(weatherData)
      

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
        <WeatherDisplay data={weatherData}></WeatherDisplay>

      </div>
    </>
  )
}

export default App
