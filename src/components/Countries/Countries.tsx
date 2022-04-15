import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryCard from "../Country/Country";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";

/* interface Props {
  data: {}[];
  setData: React.Dispatch<React.SetStateAction<{}[]>>;
} */

const Countries = () => {
  const { searchText } = useParams();
  const [data, setData] = useState<{}[]>([]);
  const [loader, setLoader] = useState(true);
  console.log(searchText, "searchText");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setLoader(false);
      })
      .catch((error) => {
        // alert("Network error. Try again");
      });
  }, [searchText]);

  console.log(data, "data");
  return (
    <Container
      sx={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loader ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Box sx={{ margin: "3rem" }}>
            <Typography variant="h3" component="div" align="center">
              List of countries
            </Typography>
          </Box>

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
        </Box>
      )}
    </Container>
  );
};

export default Countries;
