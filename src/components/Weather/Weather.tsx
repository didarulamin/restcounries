import { Container } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Weather() {
  let { capital } = useParams();
  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_ke=30835b6e912e03bb4773bff87f6eff5b=${capital}`
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
          width: 300,
          height: 300,
          padding: "1rem",
        }}
      >
        <h1>Weather of {capital}</h1>
        <p>weather icon :</p>
        <img src={weather?.current?.weather_icons[0]} alt="" />
        <p>Temperature : {weather?.current?.temperature}</p>
        <p>Wind Speed : {weather?.current?.wind_speed}</p>
        <p>precip : {weather?.current?.precip}</p>
      </Box>
    </Container>
  );
}
