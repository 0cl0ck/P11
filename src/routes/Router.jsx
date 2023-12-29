import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Layout from "../layout/Layout.jsx";
import ApartmentPage from "../pages/ApartmentPage.jsx";
import About from "../About.jsx";
import NotFound from "../NotFound.jsx";

const BrowserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/apartment/:id",
        element: <ApartmentPage />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={BrowserRouter} />;
}
