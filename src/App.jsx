import './App.css'; 
import React, { Suspense, lazy } from "react";
import Navbar from './components/Navbar';
import logo_app from './assets/images/logoApp.png';
import { useWeather } from './components/ProviderWeather.jsx';
import ProviderWeather from './components/ProviderWeather.jsx';
import WeatherMap from './components/WeatherMap.jsx';

import WeatherForecast from './components/WeatherForecast.JSX';
// Lazy load the components
const WeatherDisplay = lazy(() => import('./components/WeatherDisplay'));
const SearchBox = lazy(() => import('./components/SearchBox.jsx'));
const Footer = lazy(() => import('./components/Footer'));
const ContactUs = lazy(() => import('./components/ContactUs.jsx'));

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
  } = useWeather() || {};

  return (
    <>
      <Navbar src={logo_app} onClickSearch={handleChange} />
      {content && (
        <Suspense fallback={<div>Loading Search Box...</div>}>
          <SearchBox catchValue={catchValue} content={content} onChange={handleChange} />
        </Suspense>
      )}
      <Suspense fallback={<div>Loading Weather Display...</div>}>
        <WeatherDisplay dataWeather={result} />
      </Suspense>
      <Suspense>
        <WeatherMap city="Rabat" />
      </Suspense>
     <WeatherForecast/>
      
      <Suspense fallback={<div>Loading Contact Us...</div>}>
        <ContactUs />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
