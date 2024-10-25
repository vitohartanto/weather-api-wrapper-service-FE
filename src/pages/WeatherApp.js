'use client';

import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import WeatherSlider from '../components/WeatherSlider';
import { getIconSource } from '@/utils/getIconSource';

const devURL = 'http://localhost:5000';
const prodURL = 'https://weather-api-wrapper-service-be.vercel.app';

const getBaseURL = () => {
  return process.env.NODE_ENV === 'development' ? devURL : prodURL;
};

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);

    setWeatherData(null);

    try {
      const response = await axios.get(`${getBaseURL()}/weather`, {
        params: { city },
      });

      setWeatherData(response.data);
    } catch (error) {
      console.error('Failed to fetch weather data!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-6 py-12 mt-8 bg-indigo-300 rounded-2xl gap-y-8"
      >
        <h1 className="text-4xl font-bold text-center text-white">
          Weather App 🌦️
        </h1>
        <input
          placeholder="Enter your location name"
          className="px-4 py-2 rounded-lg"
          value={city}
          onChange={handleCityChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="hover:bg-sky-600 w-[200px] px-4 py-2 font-medium text-white rounded-lg bg-sky-500"
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>

        {weatherData && (
          <div className="flex flex-col items-center gap-y-4">
            <div className="flex items-center px-8 gap-x-4">
              <Image
                src={getIconSource(weatherData.icon)}
                alt="Weather Image"
                width={150}
                height={150}
              />
              <div className="text-white">
                <h1 className="text-2xl font-semibold">
                  {weatherData.temp} °C
                </h1>
                <h2 className="text-xl">{weatherData.resolvedAddress}</h2>
                <h2 className="text-xl">{weatherData.conditions}</h2>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex items-center self-start gap-x-4">
                <Image
                  src="/images/humidity.png"
                  alt="Humidity"
                  width={50}
                  height={50}
                />
                <div className="text-white">
                  <h3>{weatherData.humidity} %</h3>
                  <h3>Humidity</h3>
                </div>
              </div>
              <div className="flex items-center self-start gap-x-4">
                <Image
                  src="/images/windLogo.png"
                  alt="Wind Speed"
                  width={50}
                  height={50}
                />
                <div className="text-white">
                  <h3>{weatherData.windspeed} km/h</h3>
                  <h3>Wind Speed</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
      {/* {weatherData && (
        <div>
          <WeatherSlider hourlyData={weatherData.hours} />
        </div>
      )} */}
    </div>
  );
};

export default WeatherApp;
