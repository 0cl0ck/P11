// import React from "react";
// import ReactDOM from "react-dom/client";
// import Navbar from "./layout/Navbar.jsx";
// import Footer from "./layout/Footer.jsx";
// import { Outlet } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.scss";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Main from "./layout/Main.jsx";

// const Layout = () => (
//   <>
//     <Navbar />
//     <Main>
//       <Outlet />
//     </Main>
//     <Footer />
//   </>
// );

// const BrowserRouter = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <h1>404</h1>,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "/about",
//         element: <h1>About</h1>,
//       },
//       {
//         path: "/flat",
//         element: <App />,
//       },
//       {
//         path: "/404",
//         element: <App />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={BrowserRouter} />
//   </React.StrictMode>
// );

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Layout from "../layout/Layout.jsx";

const BrowserRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/flat",
        element: <App />,
      },
      {
        path: "/404",
        element: <App />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={BrowserRouter} />;
}
