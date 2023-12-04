import React from "react";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.Jsx";
import Main from "./components/Main.jsx";
import LocationGrid from "./components/LocationGrid.jsx";
import Footer from "./components/Footer.jsx";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <LocationGrid />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
