import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@material-ui/core";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/countries/${name}`);
  };

  return (
    <div>
      <Container>
        <Box sx={{ mt: 5, width: 500, mx: "auto" }}>
          <TextField
            inputProps={{ "data-testid": "content-input" }}
            fullWidth
            label="Country"
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
      </Container>
    </div>
  );
}
