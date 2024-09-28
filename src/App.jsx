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
  const handleChange=()=>{
      setContent(!content);
  }
 
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        if (lat && lon) {
          try {
            const response = await fetch(`${REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`);
            const data = await response.json();
            console.log('Fetched Data:', data); // Log data here
            setResult(data); 
            // Set result as object, not array
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        } else {
          console.error("Lat and Long are not available yet.");
        }
      });
    };

    fetchData();
  }, []); // Empty dependency array to run once on component mount

  return (
    <>
      <Navbar src={logo_app} onClickSearch={handleChange}/>
      {content? <SearchBox content={content} onChange={handleChange}/>:null} 
      {/* Ensure dataWeather is an object */}
       <WeatherDisplay dataWeather={result}  />
    
 
    </>
  );
}

export default App;
