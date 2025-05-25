import { useEffect, useState } from "react";

export default function Clock({ city, timeZone }) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("sv-SE", { timeZone })
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("sv-SE", { timeZone }));
    };
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="flex md:flex-col justify-between items-center md:items-start p-6 bg-slate-200 rounded-md w-full md:w-auto mb-4">
      <div className="text-lg text-gray-600">{city}</div>
      <div className="text-3xl text-gray-900 font-semibold font-mono">
        {time}
      </div>
      <div className="text-gray-600 underline hover:text-gray-400">
        <button
          type="button"
          onClick={() => alert(`More info about ${city}`)}
          className="focus:outline-none"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
