// Mui
import { Grid, Typography, useMediaQuery } from "@mui/material";
// Types
import { CryptoDescriptionData } from "../../../../types";
// Styles
import { cH1 } from "../../../styled/Typography";
// Motion Custom Animation
import RevealOnView from "../../../motionAnimations/RevealOnView";

function CryptoDescriptionTop({ data }: { data: CryptoDescriptionData }) {
  const md = useMediaQuery("(min-width: 900px)");
  return (
    <Grid item xs={12} justifyContent={"center"} sx={{ textAlign: "center", mb: md ? 3 : 1 }}>
      <RevealOnView>
        <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
          About {data.name}
        </Typography>
      </RevealOnView>
    </Grid>
  );
}

export default CryptoDescriptionTop;
