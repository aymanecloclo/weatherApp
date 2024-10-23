import './App.css';
import React, { useEffect, useState } from "react";
import Search from './components/Search';
import Navbar from './components/Navbar';
import logo_app from './assets/images/logoApp.png';
import WeatherDisplay from './components/WeatherDisplay'; 
import SearchBox from './components/SearchBox';

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null); // Initialize as null
  const [content,setContent]=useState(false);//Initialize as false for displaying searchBox
  const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5';
  const REACT_APP_API_KEY = '7ab4338a56030b82d25ba8a78b578696';
  const [catchedValue, setCatchedValue] = useState('');
  const handleChange=()=>{
      setContent(!content);
  }
 
const fetchData = async (lat, lon, cityName) => {
    try {
      let url;
      if (lat && lon) {
        // If latitude and longitude are available, use them
        url = `${REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`;
      } else if (cityName) {
        // If city name is provided, use it
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

  useEffect(() => {
    if (navigator.geolocation && !catchedValue) {
      // If geolocation is available and no city name is provided, use geolocation
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log('Updated Latitude:', lat);
          console.log('Updated Longitude:', lon);
          fetchData(lat, lon, null); // Fetch data using coordinates
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        { enableHighAccuracy: true }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId); // Cleanup geolocation watch
      };
    } else if (catchedValue) {
      // If a city name is manually entered, fetch data based on the city name
      fetchData(null, null, catchedValue);
    }
  }, [catchedValue]); // Re-run effect when the city name changes

    const catchValue = (e) => {
    const catchValue = e.target.innerText;
    setCatchedValue(catchValue);
    setContent(!content);
    
  };
  return (
    <>
      <Navbar src={logo_app} onClickSearch={handleChange}/>
      {content? <SearchBox catchValue={catchValue} content={content} onChange={handleChange}/>:null} 
      {/* Ensure dataWeather is an object */}
       <WeatherDisplay dataWeather={result}  />
    
 
    </>
  );
}

export default App;
