import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

//Components
import City from './components/City';
import Data from './components/Data';
import Extra from './components/Extra';

//Assets
import humidity from "./assets/humidity.png";
import wind from "./assets/wind.png";

const API = '9b9114dda266b0993c495a8a95363e6d';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&lang=tr&units=metric&appid=${API}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (city !== '') {
      getWeather();
    }
    else {
      setWeather(null);
    }
  }, [city]);

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container">
      <City onChange={changeCity} value={city} />
      {weatherData && <Data weatherData={weatherData} />}
      <div className="elementContainer">
        {weatherData && (
          <>
            <Extra
              icon={humidity}
              percent={`${weatherData.main.humidity}%`}
              text="Nem"
            />
            <Extra
              icon={wind}
              percent={`${weatherData.wind.speed} m/s`}
              text="Rüzgar"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;