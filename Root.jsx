import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav className="flex justify-between items-center p-8 bg-blue-400">
        <h1 className="text-4xl font-extrabold text-white">World Time</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
