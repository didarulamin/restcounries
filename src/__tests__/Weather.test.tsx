import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";

import { Route, MemoryRouter, Routes } from "react-router-dom";
import Weather from "../components/Weather/Weather";

const capital = "Dhaka";

const server = setupServer(
  rest.get(
    `http://api.weatherstack.com/current?access_key=30835b6e912e03bb4773bff87f6eff5b&query=${capital}`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          request: {
            type: "City",
            query: "Dhaka, Bangladesh",
            language: "en",
            unit: "m",
          },
          location: {
            name: "Dhaka",
            country: "Bangladesh",
            region: "",
            lat: "23.723",
            lon: "90.409",
            timezone_id: "Asia/Dhaka",
            localtime: "2022-04-15 15:52",
            localtime_epoch: 1650037920,
            utc_offset: "6.0",
          },
          current: {
            observation_time: "09:52 AM",
            temperature: 44,
            weather_code: 113,
            weather_icons: [
              "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
            ],
            weather_descriptions: ["Sunny"],
            wind_speed: 23,
            wind_degree: 195,
            wind_dir: "SSW",
            pressure: 1001,
            precip: 0,
            humidity: 20,
            cloudcover: 7,
            feelslike: 47,
            uv_index: 10,
            visibility: 10,
            is_day: "yes",
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data and display weather info on card", async () => {
  render(
    <MemoryRouter initialEntries={[`/weather/${capital}`]}>
      <Routes>
        <Route path="/weather/:capital" element={<Weather />}></Route>
      </Routes>
    </MemoryRouter>
  );

  const weatherIcon_Dhaka = await waitFor(() =>
    screen.findByAltText("weather-icon")
  );
  const Temperature_Dhaka = await waitFor(() =>
    screen.findByText("Temperature : 44")
  );
  const WindSpeed_Dhaka = await waitFor(() =>
    screen.findByText("Wind Speed : 23")
  );
  const precip_Dhaka = await waitFor(() => screen.findByText("precip : 0"));
  expect(Temperature_Dhaka).toBeInTheDocument();
  expect(WindSpeed_Dhaka).toBeInTheDocument();
  expect(precip_Dhaka).toBeInTheDocument();
  expect(weatherIcon_Dhaka).toHaveAttribute(
    "src",
    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
  );
});
