// Mui
import { Grid, Skeleton, useMediaQuery } from "@mui/material";
// Styles
import { cH1 } from "../../../../styled/Typography";
import { cGrid } from "../../../../styled/Card";

import CryptoDescriptionCardLoader from "./CryptoDescriptionCardLoader";

function CryptoDescriptionLoader() {
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  const cDiv = {
    maxWidth: "500px",
    margin: "0 auto",
  };

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowSpacing={5}
      columnSpacing={lg ? 0 : md ? 4 : 0}
      sx={cGrid}>
      <Grid item xs={12} justifyContent={"center"} sx={{ textAlign: "center", mb: md ? 3 : 1 }}>
        <div style={cDiv}>
          <Skeleton variant="text" sx={{ fontSize: cH1 }} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <CryptoDescriptionCardLoader />
      </Grid>
    </Grid>
  );
}

export default CryptoDescriptionLoader;
