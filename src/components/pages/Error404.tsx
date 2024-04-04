// React Router
import { Link } from "react-router-dom";
// Mui
import { Box, Typography, Button } from "@mui/material";
// Styles
import { cDiv, cH1, cButton } from "../styled/Error";

function Error404() {
  return (
    <>
      <Box component="section" sx={cDiv}>
        <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
          404
        </Typography>
        <Link to={"/"}>
          <Button variant="text" sx={cButton}>
            Home
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Error404;
