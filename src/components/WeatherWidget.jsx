// src/WeatherWidget.js

import React, { useEffect } from 'react';
import { useWeather } from './ProviderWeather';

const WeatherWidget = ({ cityId }) => {
    const units = 'metric'; // Déclarez units ici
    const { REACT_APP_API_KEY } = useWeather(); // Appelez useWeather pour obtenir la clé API

    useEffect(() => {
        // Vérifiez si apiKey est défini
        if (!REACT_APP_API_KEY) {
            console.error("API key is not defined.");
            return;
        }

        window.myWidgetParam = window.myWidgetParam || [];
        window.myWidgetParam.push({
            id: 11,
            cityid: cityId, // Utilise le cityId passé en props
            appid: REACT_APP_API_KEY, // Utilise la clé API
            units: units, // Utilise les unités
            containerid: 'openweathermap-widget-11',
        });

        const script = document.createElement('script');
        script.async = true;
        script.charset = 'utf-8';
        script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
        document.body.appendChild(script);

        // Cleanup the script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, [cityId, REACT_APP_API_KEY, units]); // Re-exécute l'effet si l'une de ces valeurs change

    return <div id="openweathermap-widget-11"></div>;
};

export default WeatherWidget;
