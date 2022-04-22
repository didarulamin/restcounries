import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

interface Props {
  item: any;
}

export default function CountryCard({ item }: Props) {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/weather/${item.capital[0]}`);
  };

  return (
    <Card sx={{ maxWidth: 250, maxHeight: 500 }}>
      <CardActionArea>
        <Box sx={{ height: "200px" }}>
          <img
            src={item?.flags?.png}
            alt="flag"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <CardContent>
          {/* <h1 data-testid="capital-name">{item?.capital[0]}</h1> */}
          <Typography variant="h6">{item?.capital[0]}</Typography>
          <Typography component="div">
            <Typography variant="subtitle1">
              Population : {item?.population}
            </Typography>
            <Typography variant="subtitle1">
              Latitude : {item?.latlng[0]}
            </Typography>
            <Typography variant="subtitle1">
              Longitude : {item?.latlng[1]}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: "90%", marginBottom: "1rem" }}
          variant="outlined"
          onClick={handleClick}
        >
          Weather
        </Button>
      </CardActions>
    </Card>
  );
}
