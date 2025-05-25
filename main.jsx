import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Root from "./Root";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
import SingleClock from "./SingleClock";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "clock/:cityKey", element: <SingleClock /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
