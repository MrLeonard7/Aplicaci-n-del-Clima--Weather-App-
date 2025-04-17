import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'

function App() {

  return (
    <>
      <div className="container mt-5">
        <h1>Aplicacion del Clima</h1>
        <SearchBar></SearchBar>
        <hr />
        <WeatherDisplay></WeatherDisplay>

      </div>
    </>
  )
}

export default App
