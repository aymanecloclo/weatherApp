// src/Geocode.js

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa'; // Ajout d'icônes

const Geocode = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState('');
    const apiKey = '7ab4338a56030b82d25ba8a78b578696'; // Remplacez par votre clé API OpenWeatherMap

    const fetchGeocodeData = async () => {
        if (!city || !country) {
            setError('Veuillez entrer une ville et un pays.');
            return;
        }

        setError('');
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`
            );
            const data = await response.json();

            if (data.length > 0) {
                setLocationData(data[0]);
            } else {
                setError('Emplacement non trouvé.');
                setLocationData(null);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données de géocodage:', error);
            setError('Échec de la récupération des données. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-10">
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full transition-transform duration-300 transform hover:scale-105">
                <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-6">
                    Recherche de Géocodage
                </h2>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center border border-gray-300 rounded p-2">
                        <FaMapMarkerAlt className="text-blue-600 mr-2" />
                        <input
                            type="text"
                            placeholder="Ville"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value);
                            }}
                            className="w-full outline-none"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded p-2">
                        <FaMapMarkerAlt className="text-blue-600 mr-2" />
                        <input
                            type="text"
                            placeholder="État (optionnel)"
                            value={state}
                            onChange={(e) => {
                                setState(e.target.value);
                            }}
                            className="w-full outline-none"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded p-2">
                        <FaMapMarkerAlt className="text-blue-600 mr-2" />
                        <input
                            type="text"
                            placeholder="Pays"
                            value={country}
                            onChange={(e) => {
                                setCountry(e.target.value);
                            }}
                            className="w-full outline-none"
                        />
                    </div>
                    <button
                        onClick={fetchGeocodeData}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        <FaSearchLocation className="inline mr-2" />
                        Obtenir les Coordonnées
                    </button>
                </div>

                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                {locationData && (
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-blue-800">Détails de l'Emplacement:</h3>
                        <p className="text-lg">Latitude: <span className="font-bold">{locationData.lat}</span></p>
                        <p className="text-lg">Longitude: <span className="font-bold">{locationData.lon}</span></p>
                        <p className="text-lg">Pays: <span className="font-bold">{locationData.country}</span></p>
                        <p className="text-lg">État: <span className="font-bold">{locationData.state || 'N/A'}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Geocode;
