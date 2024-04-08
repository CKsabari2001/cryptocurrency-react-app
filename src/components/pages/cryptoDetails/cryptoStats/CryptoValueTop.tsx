// Mui
import { Grid, Typography, useMediaQuery } from "@mui/material";
// Types
import { CoinDataValueStats } from "../../../../types";
// Styles
import { cH1, cH6 } from "../../../styled/Typography";
// Motion Custom Animation
import RevealOnView from "../../../motionAnimations/RevealOnView";
function CryptoValueTop({ data }: { data: CoinDataValueStats }) {
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <Grid item xs={12} justifyContent={"center"} sx={{ textAlign: "center", mb: md ? 3 : 1 }}>
        <RevealOnView>
          <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
            {data.name} Value Statistic
          </Typography>
          <Typography variant={"body1"} component="h6" sx={cH6}>
            A overview showing the state of {data.name}
          </Typography>
        </RevealOnView>
      </Grid>
    </>
  );
}

export default CryptoValueTop;
