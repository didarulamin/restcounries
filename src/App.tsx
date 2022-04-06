import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import Weather from "./components/Weather/Weather";

function App() {
  // const [weather, setWeather] = useState([]);
  // const [error, setError] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/countries/:searchText" element={<Countries />}></Route>
        <Route path="weather/:capital" element={<Weather />}></Route>
        <Route path="/error" element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
