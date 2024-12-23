import Clock from "./components/Clock";

function App() {
  return (
    <>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <h1 className="text-4xl font-extrabold text-white">World Time</h1>

        <ul className="flex space-x-4">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="p-8">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
          <Clock city="Paris" timeZone="Europe/Paris" />
          <Clock city="Stockholm" timeZone="Europe/Stockholm" />
          <Clock city="New York" timeZone="America/New_York" />
          <Clock city="Sydney" timeZone="Australia/Sydney" />
        </div>
      </main>
    </>
  );
}

export default App;
