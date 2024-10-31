import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import logo_app from './assets/images/logoApp.png';
import WeatherDisplay from './components/WeatherDisplay'; 
import SearchBox from './components/SearchBox.jsx';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs.jsx';
import { useWeather } from './components/ProviderWeather.jsx';
import ProviderWeather from './components/ProviderWeather.jsx';

function App() {
  return (
    <ProviderWeather>
      <MainContent />
    </ProviderWeather>
  );
}

function MainContent() {
  const {
    catchValue,
    fetchData,
    handleChange,
    result,
    content,
    catchedValue,
    onClickSearch,
  } = useWeather() || {};

  return (
    <>
      <Navbar src={logo_app}  onClickSearch={ onClickSearch} />
      {content && <SearchBox catchValue={catchValue} content={content} onChange={handleChange} />}
      <WeatherDisplay dataWeather={result} />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
