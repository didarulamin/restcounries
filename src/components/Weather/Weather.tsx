import { Container, Paper } from "@material-ui/core";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Weather() {
  let { capital } = useParams();
  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=726f4b436038e3f96b726a4fd3e3a0a2&query=${capital}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "weather");
        setWeather(data);
        if (data.success === false) {
          alert("error. Check Api key");
        }
      })
      .catch((err) => {
        console.log(err);
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
            <h1>Weather of {capital}</h1>
            <p>Weather icon :</p>
            <img src={weather?.current?.weather_icons[0]} alt="" />
            <p>Temperature : {weather?.current?.temperature}</p>
            <p>Wind Speed : {weather?.current?.wind_speed}</p>
            <p>precip : {weather?.current?.precip}</p>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
