import { Container, Paper } from "@material-ui/core";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Weather() {
  let { capital } = useParams();
  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=30835b6e912e03bb4773bff87f6eff5b&query=${capital}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "weather");
        setWeather(data);
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
    <Container>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            <h1 data-testid="weather-capital">
              Weather of {weather?.location?.name}
            </h1>
            <p>Weather icon :</p>
            <img src={weather?.current?.weather_icons[0]} alt="weather-icon" />
            <p>Temperature : {weather?.current?.temperature}</p>
            <p>Wind Speed : {weather?.current?.wind_speed}</p>
            <p>precip : {weather?.current?.precip}</p>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
