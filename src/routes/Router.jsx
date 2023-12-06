import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage.jsx";
import Layout from "../layout/Layout.jsx";
import ApartmentPage from "../components/ApartmentPage.jsx";

const BrowserRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/ApartmentPage",
        element: <ApartmentPage />,
      },
      {
        path: "/404",
        element: <HomePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={BrowserRouter} />;
}
