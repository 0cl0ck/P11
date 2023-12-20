import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Router.jsx";
import "./index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar);
library.add(faChevronDown);
library.add(faChevronUp);
library.add(faChevronLeft);
library.add(faChevronRight);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
