import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import { useState } from 'react'
const apiKeyMain = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [weatherData, setWearthData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  const HandleSearch = async (location) => {
    setIsLoading(true)
    setErrors(null)
    setWearthData(null)
    try {
      const urlApiMain = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=${apiKeyMain}`
      await fetch(urlApiMain)
      .then(response => response.json())
      .then(data => setWearthData(data));
      
      if (!weatherData) {
        throw new Error("No se encontraron datos para la ciudad proporcionada.")
      }
      console.log(weatherData)
      

    } catch (error) {
      console.error("Error al obtener datos del clima:", error)
      setErrors(error.message || "No se pudo obtener la información del clima. Por favor, verifica el nombre de la ciudad.")
    }
    finally {
      setIsLoading(false)
    }


  }

  return (
    <>
      <div className="container mt-5">
        <h1 className='text-center mb-5 '>Aplicacion del Clima</h1>
        <SearchBar onSearch={HandleSearch} ></SearchBar>
        <WeatherDisplay data={weatherData} isLoading={isLoading} error={errors}></WeatherDisplay>

      </div>
    </>
  )
}

export default App
