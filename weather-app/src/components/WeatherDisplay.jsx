import React from "react";



function WeatherDisplay({ data, isLoading, error }) {

    if (isLoading) {
        return (
            <div className="text-center mt-4">
                <div class="spinner-border " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>            
            </div>
        )
    }

    if (error) {
        return (
            <div className="alert alert-danger mt-4" role="alert">
                {error}
            </div>
        )
    }

    if (data) {
        const iconWeather = data.weather[0].icon
        return (
            <div className="card mt-4" >
            <div className="row g-0" >
                <div className="col-6 align-self-center text-center">
                <img src={`https://openweathermap.org/img/wn/${iconWeather}@2x.png`} className="img-fluid rounded-start" alt="Icon weather" />
                </div>
                <div className="col-6">
                <div className="card-body ">
                    <h2 className="card-title">{data.name}, {data.sys.country}</h2>
                    <p className="card-text">
                    <strong>Temperatura:</strong> {data.main.temp}°C
                    </p>
                    <p className="card-text text-capitalize">
                    <strong>Clima:</strong> {data.weather[0].description}
                    </p>
                    <p className="card-text">
                    <strong>Humedad:</strong> {data.main.humidity}%
                    </p>
                    <p className="card-text">
                    <strong>Viento:</strong> {data.wind.speed} m/s
                    </p>
                </div>
                </div>
            </div>
            </div>        
        )
    }

    if (!data) {
        return (
            <div className="alert alert-info mt-4" role="alert">
                Por favor, busca una ciudad para ver el clima.
            </div>
        )
    }
    
    
    
    

}

export default WeatherDisplay;