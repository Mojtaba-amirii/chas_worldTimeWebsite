import { useEffect, useState, useCallback } from "react";

import { timeZones } from "./timeZones";
import { Link } from "react-router-dom";

export default function Clock({ cityKey }) {
  const timeZoneData = timeZones[cityKey];
  const [time, setTime] = useState(getTime);

  const getTime = useCallback(
    () =>
      new Date().toLocaleTimeString("sv-SE", {
        timeZone: timeZoneData?.timeZone,
      }),
    [timeZoneData]
  );

  useEffect(() => {
    if (!timeZoneData) return;
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(interval);
  }, [getTime, timeZoneData]);

  if (!timeZoneData) {
    return (
      <div className="p-6 bg-red-100 rounded-md text-red-700">
        City not found.
      </div>
    );
  }

  return (
    <div
      className="flex md:flex-col justify-between items-center 
    md:items-start p-6 bg-slate-200 rounded-md w-full md:w-auto mb-4"
    >
      <div className="text-lg text-gray-600">{timeZoneData.city}</div>
      <div className="text-3xl text-gray-900 font-semibold font-mono">
        {time}
      </div>
      <div className=" text-gray-600 underline hover:text-gray-400">
        <Link to={`clock/${cityKey}`}>Bigger</Link>
      </div>
    </div>
  );
}
