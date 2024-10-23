import React from 'react';
import PropTypes from 'prop-types';
import bgWeather from "../assets/images/bg-weatherDisplay.jpg";
import { CiLocationOn } from "react-icons/ci";
import ConnectivityStatus from './ConnectivityStatus';
import speedIcon from '../assets/images/speed_wind.png';
import CardCarousel from './CardCarousel';
// Import des icônes
import pressureIcon from '../assets/images/pressure.png';
import humidity from '../assets/images/humidity.png';
import visibilityIcon from '../assets/images/visibility.png';
import windIcon from '../assets/images/speed_wind.png';
import pressureMer from '../assets/images/niveau-de-la-mer.png';
import nuages from '../assets/images/nuages.png';
import max_temp from '../assets/images/max_temp.png';
import min_temp from '../assets/images/min_temp.png';
import sunny from '../assets/images/sunny.jpg';
import cold from '../assets/images/cold.jpg';
import littleSunny from '../assets/images/littleSunny.jpg';
const WeatherDisplay = ({ dataWeather }) => {
  if (!dataWeather) return <ConnectivityStatus />;

  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', options).replace(',', '');

  const { name, sys, main, wind, visibility, weather, clouds } = dataWeather;

  // Tableau de données à afficher dans le carrousel
  const dataArray = [
    {
      title: 'Pression Atmosphérique',
      value: main?.pressure,
      unit: 'hPa',
      icon: pressureIcon, // Icône pour la pression
    },
    {
      title: 'Pression Niveau de la Mer',
      value: main?.sea_level || 'N/A', // Affiche N/A si la donnée est absente
      unit: 'hPa',
      icon: pressureMer,
    },
    {
      title: 'Humidité',
      value: main?.humidity,
      unit: '%',
      icon: humidity, // Icône pour l'humidité
    },
    {
      title: 'Vitesse du vent',
      value: (wind?.speed * 3.6).toFixed(1), // Conversion en km/h
      unit: 'km/h',
      icon: windIcon, // Icône pour la vitesse du vent
    },
    {
      title: 'Visibilité',
      value: visibility || 'N/A', // Valeur de la visibilité en mètres
      unit: 'm',
      icon: visibilityIcon, // Icône pour la visibilité
    },
    {
      title: 'Niveau de nuages',
      value: clouds?.all || 0, // Niveau de nuages en pourcentage
      unit: '%',
      icon: nuages, // Tu peux ajouter une icône ici si tu veux
    },
    {
      title: 'Température Min',
      value: Number(main?.temp_min),
      unit: '°C',
      icon: min_temp , // Icône pour la température minimale si nécessaire
    },
    {
      title: 'Température Max',
      value: main?.temp_max,
      unit: '°C',
      icon: max_temp, // Icône pour la température maximale si nécessaire
    },
  ];
  let feelslike=Math.floor(Number(main?.feels_like));
  
  const getBackground = (feelsLike ) => {
    if (feelsLike >= 29) {
      return `url(${sunny })`;
    } else if (feelsLike > 20) {
      return `url(${littleSunny})` ;
    } else if (feelsLike > 10) {
      return `url(${bgWeather})`;
    } else {
      return `url(${cold})`;
    }
  };
  let styleComponent={
        backgroundImage: getBackground(feelslike),
        backgroundSize: 'cover',
        backgroundPosition:'center',
        height: '100vh !important',
      }
  return (
    <div
      className="flex pt-24 text-slate-50/85 font-extrabold min-h-screen px-0"
      id="weatherBox mx-0 relative"
      style={styleComponent}
    >
      {/* Overlay for contrast */}
      <div className="bg-black/5 absolute top-0 left-0 w-full h-48"></div>

      <div className="z-20 w-full md:flex flex-col ">
        <div className="flex  my-2">
          {/* City Name and Country */}
          <h3 className='flex items-center gap-0.5 px-10 text-2xl'>
            <CiLocationOn size={20} /> {name}, <span>{sys?.country}</span>
          </h3>
          {/* Date */}
          <p className="date font-medium pe-10 text-2xl ">{formattedDate}</p>
        </div>

        <div className="flex-col lg:flex lg:gap-5 lg:px-5 my-20">
          <div className="flex gap-10 bg-slate-500/45 h-1/12 mx-2 py-5 rounded-md md:w-[600px] -shadow-xl xs:flex-col ">
            <div className="flex items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                alt="Weather Icon"
                className="w-1/2 object-cover"
              />
              <h1 className="text-6xl xxs:text-4xl font-extralight relative">
                {`${Math.floor(Number(main?.feels_like))}`}
                <span className="absolute -top-2 text-sm">°C</span>
              </h1>
            </div>

            <div className="flex flex-col font-semibold xs:items-center gap-2 ">
              <span className="capitalize text-xl    ">{weather[0]?.description}</span>
              <span className="text-sm md:text-xl">{`Feels like: ${main?.feels_like}°C`}</span>
              <div className="flex text-sm flex-wrap gap-2 md:text-xl">
                <span>{`Max: ${main?.temp_max}°C`}</span>
                <span>{`Min: ${main?.temp_min}°C`}</span>
              </div>
            </div>
          </div>

          {/* Carrousel de cartes météo */}
         
        </div>
         <CardCarousel cards={dataArray} />
      </div>
    </div>
  );
};

WeatherDisplay.propTypes = {
  dataWeather: PropTypes.object,
};

export default WeatherDisplay;
