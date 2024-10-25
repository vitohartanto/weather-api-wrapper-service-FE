import WeatherApp from '@/pages/WeatherApp';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-indigo-500 ">
        <WeatherApp />
        <Toaster position="top-right" />
      </div>
    </div>
  );
}
