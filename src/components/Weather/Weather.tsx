import { Container, Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherBackground from "../../assets/Weather-Background.png";

export default function Weather() {
  let { capital } = useParams();
  const [weather, setWeather] = useState<any>();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=30835b6e912e03bb4773bff87f6eff5b&query=${capital}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "weather");
        setWeather(data);
        setLoader(false);
        if (data.success === false) {
          alert(data.error.info);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(
          "content must be served over HTTPS.This is limitation of api and this works find in local machine. Please install this app in local machine and check"
        );
      });
  }, [capital]);

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: "100vh",
        height: "100vh",
        backgroundImage: `url(${WeatherBackground})`,

        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {loader ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vh",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Paper>
          <Box
            sx={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 data-testid="weather-capital">
              Weather of {weather?.location?.name}
            </h2>

            <img src={weather?.current?.weather_icons[0]} alt="weather-icon" />
            <span>Temperature : {weather?.current?.temperature}</span>
            <span>Wind Speed : {weather?.current?.wind_speed}</span>
            <span>precip : {weather?.current?.precip}</span>
          </Box>
        </Paper>
      )}
    </Box>
  );
}
