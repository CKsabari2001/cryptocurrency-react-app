import { Link } from "react-router-dom";

import { useMediaQuery, Typography, Button } from "@mui/material";

// Scss Variables
import variables from "../../assets/scss/_Variables.module.scss";

function Error404() {
  // const sm = useMediaQuery("(min-width: 600px)");
  const md = useMediaQuery("(min-width: 900px)");

  const cH1 = {
    fontSize: md ? "158px" : "108px",
    fontWeight: 700,
    color: variables.textColorSecondary,
  };

  const cVButton = {
    fontSize: md ? "26px" : "20px",
    fontWeight: 500,
    color: variables.textColorSecondary,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "capitalize",
    padding: "10px 30px",

    "&:hover": {
      backgroundColor: "transparent",
      color: variables.textColorPrimary,
    },
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: variables.bgColorPrimary,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ ...cH1, mb: md ? 2 : 3 }}
        >
          404
        </Typography>
        <Link to={"/"}>
          <Button variant="text" sx={cVButton}>
            Home
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Error404;
