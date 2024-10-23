import Image from 'next/image';

const WeatherApp = () => {
  return (
    <form className="flex flex-col items-center px-6 py-8 mt-8 rounded-lg bg-sky-300 gap-y-8">
      <h1 className="text-4xl font-semibold text-white">Weather App 🌦️</h1>
      <input
        placeholder="Enter your city name"
        className="px-4 py-2 rounded-lg"
      />
      <button
        type="submit"
        className="hover:bg-sky-600 w-[200px] px-4 py-2 font-medium text-white rounded-lg bg-sky-500"
      >
        Get Weather
      </button>
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex items-center px-8 gap-x-4">
          <Image
            src="/images/rain.png"
            alt="Weather Image"
            width={150}
            height={150}
          />
          <div className="text-white">
            <h1 className="text-2xl font-semibold">27.42 °C</h1>
            <h2 className="text-xl">Sleman</h2>
            <h2 className="text-xl">Rain</h2>
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
              <h3>74%</h3>
              <h3>Humidity</h3>
            </div>
          </div>
          <div className="flex items-center self-start gap-x-4">
            <Image
              src="/images/wind.png"
              alt="Wind Speed"
              width={50}
              height={50}
            />
            <div className="text-white">
              <h3>2.47 km/h</h3>
              <h3>Wind Speed</h3>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default WeatherApp;
