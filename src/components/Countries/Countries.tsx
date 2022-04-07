import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryCard from "../Country/Country";

/* interface Props {
  data: {}[];
  setData: React.Dispatch<React.SetStateAction<{}[]>>;
} */

const Countries = () => {
  const { searchText } = useParams();
  const [data, setData] = useState<{}[]>([]);
  console.log(searchText, "searchText");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        alert("Network error. Try again");
      });
  }, [searchText]);

  return (
    <Container sx={{ padding: "1rem" }}>
      <h1 data-testid="header">List of countries</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.map((item: {}, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CountryCard item={item} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Countries;
