import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { timeZones } from "./timeZones";

export default function SingleClock() {
  const params = useParams();
  const timeZoneData = timeZones[params.cityKey];
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("sv-SE", { timeZone: timeZoneData.timeZone })
      );
    }, 1000);
  }, []);

  return (
    <div
      className="flex justify-between items-center md:items-start
      md:flex-col p-6 w-full md:w-64 bg-slate-200 rounded-md mb-4 md:mr-4"
    >
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
