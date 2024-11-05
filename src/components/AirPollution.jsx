// src/AirPollution.js

import React, { useEffect, useState } from 'react';
import { FaWind, FaSmog, FaCloudSunRain } from 'react-icons/fa'; // Ajout d'icônes

const AirPollution = () => {
    const lat = 34.020882; // Latitude for Rabat
    const lon = -6.841650;
    const [pollutionData, setPollutionData] = useState(null);
    const apiKey = '7ab4338a56030b82d25ba8a78b578696'; // Remplacez par votre clé API OpenWeatherMap

    useEffect(() => {
        const fetchAirPollutionData = async () => {
            try {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
                const data = await response.json();
                setPollutionData(data);
            } catch (error) {
                console.error('Error fetching air pollution data:', error);
            }
        };

        fetchAirPollutionData();
    }, [lat, lon, apiKey]);

    return (
        <div className="flex justify-center items-center min-h-screen py-10">
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full transition-transform duration-300 transform hover:scale-105">
                <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-6">
                    Pollution de l'Air
                </h2>
                <div className="flex justify-between items-center mb-4">
                    <FaWind className="text-blue-600 text-3xl" />
                    <h3 className="text-2xl font-semibold text-blue-800">AQI: 
                        <span className={`ml-2 font-bold ${pollutionData && pollutionData.list[0].main.aqi === 1 ? 'text-green-500' : pollutionData && pollutionData.list[0].main.aqi === 2 ? 'text-yellow-500' : pollutionData && pollutionData.list[0].main.aqi === 3 ? 'text-orange-500' : pollutionData && pollutionData.list[0].main.aqi === 4 ? 'text-red-500' : 'text-purple-500'}`}>
                            {pollutionData ? pollutionData.list[0].main.aqi : 'N/A'}
                        </span>
                    </h3>
                    <FaSmog className="text-blue-600 text-3xl" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-blue-800">Polluants Principaux:</h4>
                <ul className="list-disc pl-5 space-y-2">
                    {pollutionData ? (
                        Object.entries(pollutionData.list[0].components).map(([key, value]) => (
                            <li key={key} className="flex justify-between text-blue-600">
                                <span className="capitalize">{key}:</span>
                                <span>{value} µg/m³</span>
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-600">Chargement...</li>
                    )}
                </ul>
                <div className="mt-6 flex justify-center">
                    <FaCloudSunRain className="text-blue-600 text-4xl animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default AirPollution;
