import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  item: any;
}

export default function CountryCard({ item }: Props) {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/weather/${item.capital[0]}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item?.flags?.png}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.capital[0]}
          </Typography>
          <Typography variant="body2" component="div">
            <Typography paragraph>Population :{item?.population}</Typography>
            <Typography paragraph> Latitude : {item?.latlng[0]}</Typography>
            <Typography paragraph> Longitude : {item?.latlng[1]}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Capital Weather
        </Button>
      </CardActions>
    </Card>
  );
}
