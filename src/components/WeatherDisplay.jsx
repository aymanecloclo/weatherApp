import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bgWeather from "../assets/images/bg-weatherDisplay.jpg";
import { CiLocationOn } from "react-icons/ci";
import ConnectivityStatus from './ConnectivityStatus';
import speedIcon from '../assets/images/speed_wind.png'
const WeatherDisplay= ({ dataWeather, }) => {
  if (!dataWeather) return <ConnectivityStatus/> ;
const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString('en-US', options).replace(',', '');


  // Safely access properties
  const { name, sys, main, wind, visibility} = dataWeather;
   
  return (
  <div
  className="flex px-5  pt-24 text-slate-50/85 font-extrabold"
  id="weatherBox mx-0 relative"
  style={{
    backgroundImage: `url(${bgWeather})`,
    backgroundSize: 'cover',
    height: '100vh',
  }}
>
  {/* Container principal avec les styles pour l'affichage en plein écran */}
  
  {/* Div pour fixer le contraste */}
  <div className="bg-black/5 absolute top-0 left-0 w-full h-48"></div>

  <div className="z-20 w-full md:flex flex-col    ">
    {/* Section pour le nom de la ville et la date */}
    <div className="flex justify-between my-2">
      {/* Affichage du nom de la ville et du pays */}
      <h3 className='flex items-center gap-0.5'>
       <CiLocationOn size={20} /> {name},<span>{sys.country}</span>
      </h3>

      {/* Affichage de la date formatée */}
      <p className="date font-medium text-lg">{formattedDate}</p>
    </div>
    {/* two section weather card  */}
    <div className="flex flex-col lg:flex-row lg:gap-5 lg:px-5">
        <div className="flex gap-10 bg-slate-500/45 h-1/12 mx-2 py-5 rounded-md lg:w-5/12 shadow-xl">
      {/* Première colonne pour l'image et la température ressentie */}
          <div className="flex items-center">
        {/* Image de l'icône météo (à ajouter dans src) */}
              <img
                src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}
               alt="Weather Icon"
                className="w-1/2 object-cover"
               />

        {/* Température ressentie */}
               <h1 className="text-6xl font-light relative">
               {`${main.feels_like}`}
              <span className="absolute -top-2 text-sm">°C</span>
              </h1>
      </div>

      {/* Deuxième colonne */}
      <p className="flex flex-col font-semibold ">
    
        {/* Description de la météo */}
        <span className="text-nowrap capitalize text-xl font-bold">{dataWeather.weather[0].description}</span>

        {/* Température ressentie */}
        <span className="text-sm">{`T. ressentie ${main.feels_like}`}</span>

        {/* Températures max et min */}
        <div className="flex text-sm flex-wrap gap-2">
          <span className="text-nowrap">{`Max : ${main.temp_max} `}</span>
          <span className="text-nowrap">{`Min : ${main.temp_min} `}</span>
        </div>
      </p>
    </div>
     <p className="flex flex-col  gap items-center pt-5 ">
      {/* Vitesse et direction du vent */}
   
        
       
<div
  class=" w-5/12 duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-slate-500/45  h-72 dark:bg-[#22272B] rounded-3xl p-4 hover:w-6/12 hover:bg-slate-500/60 hover:dark:bg-[#0C66E4]"
>
  {/* speed wind card */}
  
  <div class="gap-4 relative flex flex-col  justify-center items-center  ">
    <h3 class=" text-xl text-center">Speed</h3>
   <img src={speedIcon} alt="" className='w-full h-  object-cover' />
   
  </div>
  <div class="absolute duration-300 -left-32 mt-2 group-hover:left-10 ">
    <p class="text-sm">{`Speed: ${wind.speed} m/s,`}</p>
    <p class="text-sm">{`Degree: ${wind.deg}°`}</p>
  </div>
</div>

  


      {/* Pression atmosphérique */}
      <span>{`${main.pressure} hPa`}</span>

      {/* Point de rosée */}
      <span>{`Dew point: ${main.dew_point}°C`}</span>

      {/* Visibilité */}
      <span>{`Visibility: ${visibility / 1000} km`}</span>

      {/* Humidité */}
      <span>{`Humidity: ${main.humidity}%`}</span>
    </p>
    </div>
    {/* Section pour l'affichage principal de la météo */}


    {/* Section pour les informations supplémentaires sur la météo */}
   
  </div>
  </div>


  );
};

WeatherDisplay.propTypes = {
  dataWeather: PropTypes.object
};

export default WeatherDisplay;
