import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import Weather from "./components/Weather/Weather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
    text: {
      primary: "#000000",
    },
  },
});

function App() {
  // const [weather, setWeather] = useState([]);
  // const [error, setError] = useState(false);
  // const [light, setLight] = React.useState<Boolean>(true);
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/countries/:searchText" element={<Countries />}></Route>
          <Route path="weather/:capital" element={<Weather />}></Route>
          <Route path="/error" element={<div>404</div>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
