import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import Countries from "../components/Countries/Countries";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route, MemoryRouter, Routes } from "react-router-dom";

const searchText = "Ban";

const server = setupServer(
  rest.get(
    `https://restcountries.com/v3.1/name/${searchText}`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            name: {
              common: "Bangladesh",
              official: "People's Republic of Bangladesh",
              nativeName: {
                ben: {
                  official: "বাংলাদেশ গণপ্রজাতন্ত্রী",
                  common: "বাংলাদেশ",
                },
              },
            },
            tld: [".bd"],
            cca2: "BD",
            ccn3: "050",
            cca3: "BGD",
            cioc: "BAN",
            independent: true,
            status: "officially-assigned",
            unMember: true,
            currencies: { BDT: { name: "Bangladeshi taka", symbol: "৳" } },
            idd: { root: "+8", suffixes: ["80"] },
            capital: ["Dhaka"],
            altSpellings: [
              "BD",
              "People's Republic of Bangladesh",
              "Gônôprôjatôntri Bangladesh",
            ],
            region: "Asia",
            subregion: "Southern Asia",
            languages: { ben: "Bengali" },
            translations: {
              ara: { official: "جمهورية بنغلاديش الشعبية", common: "بنغلاديش" },
              ces: {
                official: "Bangladéšská lidová republika",
                common: "Bangladéš",
              },
              cym: {
                official: "Gweriniaeth Pobl Bangladesh",
                common: "Bangladesh",
              },
              deu: {
                official: "Volksrepublik Bangladesch",
                common: "Bangladesch",
              },
              est: {
                official: "Bangladeshi Rahvavabariik",
                common: "Bangladesh",
              },
              fin: {
                official: "Bangladeshin kansantasavalta",
                common: "Bangladesh",
              },
              fra: {
                official: "La République populaire du Bangladesh",
                common: "Bangladesh",
              },
              hrv: {
                official: "Narodna Republika Bangladeš",
                common: "Bangladeš",
              },
              hun: { official: "Banglades", common: "Banglades" },
              ita: {
                official: "Repubblica popolare del Bangladesh",
                common: "Bangladesh",
              },
              jpn: {
                official: "バングラデシュ人民共和国",
                common: "バングラデシュ",
              },
              kor: { official: "방글라데시 인민 공화국", common: "방글라데시" },
              nld: {
                official: "Volksrepubliek Bangladesh",
                common: "Bangladesh",
              },
              per: { official: "جمهوری خلق بنگلادش", common: "بنگلادش" },
              pol: {
                official: "Ludowa Republika Bangladeszu",
                common: "Bangladesz",
              },
              por: {
                official: "República Popular do Bangladesh",
                common: "Bangladesh",
              },
              rus: {
                official: "Народная Республика Бангладеш",
                common: "Бангладеш",
              },
              slk: {
                official: "Bangladéšska ľudová republika",
                common: "Bangladéš",
              },
              spa: {
                official: "República Popular de Bangladesh",
                common: "Bangladesh",
              },
              swe: {
                official: "Folkrepubliken Bangladesh",
                common: "Bangladesh",
              },
              urd: { official: "عوامی جمہوریہ بنگلہ دیش", common: "بنگلہ دیش" },
              zho: { official: "孟加拉人民共和国", common: "孟加拉国" },
            },
            latlng: [24.0, 90.0],
            landlocked: false,
            borders: ["MMR", "IND"],
            area: 147570.0,
            demonyms: {
              eng: { f: "Bangladeshi", m: "Bangladeshi" },
              fra: { f: "Bangladaise", m: "Bangladais" },
            },
            flag: "\uD83C\uDDE7\uD83C\uDDE9",
            maps: {
              googleMaps: "https://goo.gl/maps/op6gmLbHcvv6rLhH6",
              openStreetMaps: "https://www.openstreetmap.org/relation/184640",
            },
            population: 164689383,
            gini: { "2016": 32.4 },
            fifa: "BAN",
            car: { signs: ["BD"], side: "left" },
            timezones: ["UTC+06:00"],
            continents: ["Asia"],
            flags: {
              png: "https://flagcdn.com/w320/bd.png",
              svg: "https://flagcdn.com/bd.svg",
            },
            coatOfArms: {
              png: "https://mainfacts.com/media/images/coats_of_arms/bd.png",
              svg: "https://mainfacts.com/media/images/coats_of_arms/bd.svg",
            },
            startOfWeek: "sunday",
            capitalInfo: { latlng: [23.72, 90.4] },
            postalCode: { format: "####", regex: "^(\\d{4})$" },
          },

          {
            name: {
              common: "Lebanon",
              official: "Lebanese Republic",
              nativeName: {
                ara: { official: "الجمهورية اللبنانية", common: "لبنان" },
                fra: { official: "République libanaise", common: "Liban" },
              },
            },
            tld: [".lb"],
            cca2: "LB",
            ccn3: "422",
            cca3: "LBN",
            cioc: "LBN",
            independent: true,
            status: "officially-assigned",
            unMember: true,
            currencies: { LBP: { name: "Lebanese pound", symbol: "ل.ل" } },
            idd: { root: "+9", suffixes: ["61"] },
            capital: ["Beirut"],
            altSpellings: [
              "LB",
              "Lebanese Republic",
              "Al-Jumhūrīyah Al-Libnānīyah",
            ],
            region: "Asia",
            subregion: "Western Asia",
            languages: { ara: "Arabic", fra: "French" },
            translations: {
              ara: { official: "الجمهورية اللبنانية", common: "لبنان" },
              ces: { official: "Libanonská republika", common: "Libanon" },
              cym: { official: "Lebanese Republic", common: "Lebanon" },
              deu: { official: "Libanesische Republik", common: "Libanon" },
              est: { official: "Liibanoni Vabariik", common: "Liibanon" },
              fin: { official: "Libanonin tasavalta", common: "Libanon" },
              fra: { official: "République libanaise", common: "Liban" },
              hrv: { official: "Libanonska Republika", common: "Libanon" },
              hun: { official: "Libanoni Köztársaság", common: "Libanon" },
              ita: { official: "Repubblica libanese", common: "Libano" },
              jpn: { official: "レバノン共和国", common: "レバノン" },
              kor: { official: "레바논 공화국", common: "레바논" },
              nld: { official: "Libanese Republiek", common: "Libanon" },
              per: { official: "جمهوری لبنان", common: "لبنان" },
              pol: { official: "Republika Libańska", common: "Liban" },
              por: { official: "República Libanesa", common: "Líbano" },
              rus: { official: "Ливанская Республика", common: "Ливан" },
              slk: { official: "Libanonská republika", common: "Libanon" },
              spa: { official: "República Libanesa", common: "Líbano" },
              swe: { official: "Republiken Libanon", common: "Libanon" },
              urd: { official: "جمہوریہ لبنان", common: "لبنان" },
              zho: { official: "黎巴嫩共和国", common: "黎巴嫩" },
            },
            latlng: [33.83333333, 35.83333333],
            landlocked: false,
            borders: ["ISR", "SYR"],
            area: 10452.0,
            demonyms: {
              eng: { f: "Lebanese", m: "Lebanese" },
              fra: { f: "Libanaise", m: "Libanais" },
            },
            flag: "\uD83C\uDDF1\uD83C\uDDE7",
            maps: {
              googleMaps: "https://goo.gl/maps/Sz5VCU8UFBqMyTdc9",
              openStreetMaps: "https://www.openstreetmap.org/relation/184843",
            },
            population: 6825442,
            gini: { "2011": 31.8 },
            fifa: "LBN",
            car: { signs: ["RL"], side: "right" },
            timezones: ["UTC+02:00"],
            continents: ["Asia"],
            flags: {
              png: "https://flagcdn.com/w320/lb.png",
              svg: "https://flagcdn.com/lb.svg",
            },
            coatOfArms: {
              png: "https://mainfacts.com/media/images/coats_of_arms/lb.png",
              svg: "https://mainfacts.com/media/images/coats_of_arms/lb.svg",
            },
            startOfWeek: "monday",
            capitalInfo: { latlng: [33.87, 35.5] },
            postalCode: {
              format: "#### ####|####",
              regex: "^(\\d{4}(\\d{4})?)$",
            },
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(
    <MemoryRouter initialEntries={[`/countries/${searchText}`]}>
      <Routes>
        <Route path="/countries/:searchText" element={<Countries />}></Route>
      </Routes>
    </MemoryRouter>
  );

  const capitalOne = await waitFor(() => screen.findByText("Dhaka"));
  const capitalOnePopulation = await waitFor(() =>
    screen.findByText("Population : 164689383")
  );
  const capitalOneLatitude = await waitFor(() =>
    screen.findByText("Latitude : 24")
  );
  const capitalOneLongitude = await waitFor(() =>
    screen.findByText("Longitude : 90")
  );

  const capitalTwo = await waitFor(() => screen.findByText("Beirut"));
  const capitalTwoPopulation = await waitFor(() =>
    screen.findByText("Population : 6825442")
  );
  const capitalTwoLatitude = await waitFor(() =>
    screen.findByText("Latitude : 33.83333333")
  );
  const capitalTwoLongitude = await waitFor(() =>
    screen.findByText("Longitude : 35.83333333")
  );

  expect(capitalOne).toBeInTheDocument();
  expect(capitalOnePopulation).toBeInTheDocument();
  expect(capitalOneLatitude).toBeInTheDocument();
  expect(capitalOneLongitude).toBeInTheDocument();
  expect(capitalTwo).toBeInTheDocument();
  expect(capitalTwoPopulation).toBeInTheDocument();
  expect(capitalTwoLatitude).toBeInTheDocument();
  expect(capitalTwoLongitude).toBeInTheDocument();
});
