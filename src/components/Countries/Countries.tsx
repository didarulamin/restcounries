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
  // console.log(searchText, "searchText");

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

  // console.log(data, "data");
  return (
    <Box
      sx={{
        margin: "2rem",
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
            width: "100vh",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h3" component="div" align="center">
              Found countries
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 15 }}
          >
            {data?.map((item: {}, index: number) => (
              <Grid
                item
                xs={12}
                sm={data.length === 1 ? 12 : 4}
                md={data.length === 1 ? 15 : 3}
                key={index}
              >
                <CountryCard item={item} key={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Countries;
