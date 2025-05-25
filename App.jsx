import Clock from "./Clock";

export default function App() {
  return (
    <div>
      <nav className="flex justify-between items-center p-8 bg-blue-400">
        <h1 className="text-4xl font-extrabold text-white">World Time</h1>
        <ul className="flex gap-4">
          <li>
            <a href="#about" className="text-white hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Clock cityKey="paris" />
          <Clock cityKey="stockholm" />
        </div>
      </main>
    </div>
  );
}
