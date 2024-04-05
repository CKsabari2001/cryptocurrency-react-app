// Mui
import { Grid, Typography, useMediaQuery } from "@mui/material";
// Types
import { CryptoDescriptionData } from "../../../../types";
// Styles
import { cH1 } from "../../../styled/Typography";

function CryptoDescriptionTop({ data }: { data: CryptoDescriptionData }) {
  const md = useMediaQuery("(min-width: 900px)");
  return (
    <Grid item xs={12} justifyContent={"center"} sx={{ textAlign: "center", mb: md ? 3 : 1 }}>
      <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
        About {data.name}
      </Typography>
    </Grid>
  );
}

export default CryptoDescriptionTop;
