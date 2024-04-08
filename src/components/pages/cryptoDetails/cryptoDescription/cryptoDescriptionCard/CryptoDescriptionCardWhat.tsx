// Mui
import { Box, Grid, Typography } from "@mui/material";
// HTML Parser
import HTMLReactParser from "html-react-parser/lib/index";
// Styles
import { cH2, cH6 } from "../../../../styled/Typography";
// Types
import { CryptoDescriptionData } from "../../../../../types";
// Motion Custom Animation
import RevealOnView from "../../../../motionAnimations/RevealOnView";
import RevealOnViewLeft from "../../../../motionAnimations/RevealOnViewLeft";
function CryptoDescriptionCardWhat({ data }: { data: CryptoDescriptionData }) {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          mb: 1,
        }}>
        <RevealOnViewLeft>
          <Typography variant="h4" component="h2" gutterBottom sx={cH2}>
            What is {data.name}
          </Typography>
        </RevealOnViewLeft>
      </Box>
      <RevealOnView>
        <Typography variant="body1" component="h6" sx={cH6}>
          {HTMLReactParser(data.description)}
        </Typography>
      </RevealOnView>
    </Grid>
  );
}

export default CryptoDescriptionCardWhat;
