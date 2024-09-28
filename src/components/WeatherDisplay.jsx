import React from 'react';
import PropTypes from 'prop-types';

const WeatherDisplay= ({ dataWeather }) => {
  if (!dataWeather) return <div>No data available</div>;
const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString('en-US', options).replace(',', '');



  // Safely access properties
  const { name, sys, main, wind, visibility} = dataWeather;
   
  return (
    <div className="flex px-5 h-screen pt-24 bg-sky-200 text-slate-50 font-bold" id='weatherBox mx-0'>
    <div className="w-full flex flex-col">
    <div className=" flex  justify-between  my-2">
      <h3>{name},<span>{sys.country}</span></h3>
      <p className="date text-red-500">{formattedDate}</p>
    </div>
    <div className=" grid grid-cols-2 gap-10 bg-slate-500/45 h-1/12 mx-2 py-5 p-12 rounded-md ">
    <div className="flex justify-end">
      <img src="" alt="" />
      <h1 className='text-4xl  '>{`${main.feels_like}°C`}</h1>
    </div>
     
      <p className='flex flex-col '>
        <span className='text-nowrap'>{dataWeather.weather[0].description}</span>
        <span className='text-sm'>{`T. ressentie ${main.feels_like} `}</span>
        <span className='flex text-sm text-nowrap'>
          <span>{`Max : ° ${main.temp_max}  `}</span>
          <span>{`Min : ${main.temp_min} °`}</span>
        </span>
    
      </p>
    </div>
      <p></p>
      <p className="grid grid-cols-2 grid-rows-3 gap- w-1/2">
        <span>{wind.speed}m/s {wind.deg}°</span>
        <span>{main.pressure}hPa</span>
        <span>Dew point: {main.dew_point}°C</span>
        <span>Visibility: {visibility / 1000}km</span>
        <span>Humidity: {main.humidity}%</span>
      </p>
    </div>
    </div>
  );
};

WeatherDisplay.propTypes = {
  dataWeather: PropTypes.object
};

export default WeatherDisplay;
