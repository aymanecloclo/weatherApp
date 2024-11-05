// src/WeatherMap.js

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap = ({ city }) => {
    const mapRef = useRef(null);
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '7ab4338a56030b82d25ba8a78b578696'; // Replace with your OpenWeatherMap API key

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                const data = await response.json();
                setWeatherData(data);

                if (data.coord) {
                    const { lat, lon } = data.coord;

                    // Initialize the map
                    const map = L.map(mapRef.current).setView([lat, lon], 10);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                    }).addTo(map);

                    // Add a marker for the city
                    const marker = L.marker([lat, lon]).addTo(map);

                    // Popup with weather information
                    marker.bindPopup(`
                        <strong>${city}</strong><br>
                        Temperature: ${data.main.temp} °C<br>
                        Weather: ${data.weather[0].description}
                    `).openPopup();

                    // Center the map on the city
                    map.setView([lat, lon], 10);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [city, apiKey]);

    return (
        <div>
            <h2> carte radar {city}</h2>
            <div ref={mapRef} style={{ height: '600px' }}></div>
            {weatherData && (
                <div>
                    <h3>Weather Details:</h3>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherMap;
