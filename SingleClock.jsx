import { useEffect, useState } from "react";

import { timeZones } from "./timeZones";
import { useParams } from "react-router-dom";

export default function SingleClock() {
  const { cityKey } = useParams();
  const timeZoneData = timeZones[cityKey];
  const [time, setTime] = useState(getTime);

  const getTime = () =>
    new Date().toLocaleTimeString("sv-SE", {
      timeZone: timeZoneData?.timeZone,
    });

  useEffect(() => {
    if (!timeZoneData) return;
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(interval);
  }, [cityKey]);

  if (!timeZoneData) {
    return (
      <div className="p-6 bg-red-100 rounded-md text-red-700">
        City not found.
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center md:items-start md:flex-col p-6 w-full md:w-64 bg-slate-200 rounded-md mb-4 md:mr-4">
      <div className="text-2xl text-gray-600">{timeZoneData.city}</div>
      <div className="text-sm uppercase text-blue-700 font-bold md:mb-4">
        {timeZoneData.country}
      </div>
      <div className="text-4xl font-mono text-gray-900 font-semibold">
        {time}
      </div>
    </div>
  );
}
