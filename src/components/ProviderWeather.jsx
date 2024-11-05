import { createContext, useContext, useEffect, useState } from "react";

// Créer le contexte
const WeatherContext = createContext(null);

// Composant Provider
const ProviderWeather = ({ children }) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [content, setContent] = useState(false);
  const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5';
  const REACT_APP_API_KEY = '7ab4338a56030b82d25ba8a78b578696';
  const [catchedValue, setCatchedValue] = useState('');

  const handleChange = (e) => {
    e.stopPropagation();
    setContent(!content);
  };

  const fetchData = async (lat, lon, cityName) => {
    try {
      let url;
      if (lat && lon) {
        url = `${REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`;
      } else if (cityName) {
        url = `${REACT_APP_API_URL}/weather?q=${cityName}&units=metric&APPID=${REACT_APP_API_KEY}`;
      }

      if (url) {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched Data:', data);
        setResult(data);
      } else {
        console.error('No valid parameters for weather data.');
      }

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const catchValue = (e) => {
    const catchedText = e.target.innerText;
    setCatchedValue(catchedText);
    setContent(!content);
  };

  useEffect(() => {
    if (navigator.geolocation && !catchedValue) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log('Updated Latitude:', lat);
          console.log('Updated Longitude:', lon);
          fetchData(lat, lon, null);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Si l'utilisateur refuse la géolocalisation, afficher la météo de Rabat par défaut
          fetchData(null, null, 'Rabat');
        },
        { enableHighAccuracy: true }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else if (catchedValue) {
      fetchData(null, null, catchedValue);
    }
  }, [catchedValue]); // Dépendance à catchedValue

  return (
    <WeatherContext.Provider value={{ catchValue, fetchData, REACT_APP_API_KEY,handleChange, value, setValue, result, content, catchedValue }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Hook personnalisé pour accéder plus facilement au contexte
export const useWeather = () => useContext(WeatherContext);

export default ProviderWeather;
