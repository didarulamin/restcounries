import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@material-ui/core";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

/* interface Props {
  setLight: React.Dispatch<React.SetStateAction<Boolean>>;
  light: Boolean;
} */

export default function Home() {
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/countries/${name}`);
  };

  return (
    <Container>
      {/* <Button onClick={() => setLight(!light)}>Toggle Theme Mode</Button> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          flexDirection: "column",
          // width: "100vw",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            align="center"
            sx={{
              marginBottom: "1rem",
            }}
          >
            Where is the World?
          </Typography>

          <TextField
            inputProps={{ "data-testid": "content-input" }}
            fullWidth
            label="Search for a country"
            id="fullWidth"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            data-testid="search-button"
            disabled={name.length === 0}
            sx={{ mt: 5, width: 500, mx: "auto" }}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
