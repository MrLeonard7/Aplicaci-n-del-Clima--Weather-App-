import React from "react";

function WeatherDisplay({ data }) {
    if (!data) {
        return (
            <div className="text-center mt-4">
                <p className="text-muted">Buscando ciudad...</p>
            </div>
        );
    }

    return (
        <div className="card text-center mt-4 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p className="card-text">
                    <strong>Temperatura:</strong> {data.main.temp}°C
                </p>
                <p className="card-text">
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
    );
}

export default WeatherDisplay;