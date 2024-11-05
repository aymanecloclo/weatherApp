// src/WeatherForecast.js

import React, { useEffect, useState } from 'react';

const WeatherForecast = ({ lat, lon, apiKey }) => {
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherForecast = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
                if (!response.ok) {
                    throw new Error('Error fetching weather data');
                }
                const data = await response.json();
                setForecastData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherForecast();
    }, [lat, lon, apiKey]);

    if (loading) {
        return <p>Loading weather forecast...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Weather Forecast</h2>
            <ul>
                {forecastData.list.map((forecast) => (
                    <li key={forecast.dt}>
                        <p>Date: {new Date(forecast.dt * 1000).toLocaleString()}</p>
                        <p>Temperature: {forecast.main.temp} °C</p>
                        <p>Weather: {forecast.weather[0].description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherForecast;
