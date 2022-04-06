import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/");
  };

  return (
    <div>
      <h1>Error</h1>
      <Button onClick={handleClick} />
    </div>
  );
}
