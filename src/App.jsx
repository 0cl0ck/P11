import React from "react";
import Banner from "./components/Banner.Jsx";
import LocationGrid from "./components/LocationGrid.jsx";
import "./App.scss";
console.log("Rendering App");
function App() {
  return (
    <>
      <Banner />
      <LocationGrid />
    </>
  );
}

export default App;
