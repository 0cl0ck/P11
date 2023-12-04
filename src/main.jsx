import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
  },

  {
    path: "/flat",
    element: <App />,
  },
  {
    path: "/404",
    element: <App />,
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <h1>About</h1>,
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
