import React from 'react';

const Data = ({ weatherData }) => {
  return (
    <>
      <div className="image">
        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
      </div>
      <div className="temperature">{Math.round((weatherData.main.temp))}&deg;C
        <div className="feelsLike">Hissedilen
          <div className="feelsLikeTemperature">{Math.round((weatherData.main.feels_like))}&deg;C</div>
        </div>
      </div>
      <div className="weatherInfo">
        {weatherData.weather[0].description.toUpperCase()}
      </div>
      <div className="location">
        {weatherData.name} ({weatherData.sys.country})
      </div>
    </>
  );
};

export default Data;