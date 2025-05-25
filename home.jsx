import Clock from "./Clock";

const cities = ["stockholm", "london", "new-york"];

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4">
      {cities.map((cityKey) => (
        <Clock key={cityKey} cityKey={cityKey} />
      ))}
    </div>
  );
}
