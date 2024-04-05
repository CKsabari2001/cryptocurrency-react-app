// Mui
import { Box, Grid, Typography } from "@mui/material";
// HTML Parser
import HTMLReactParser from "html-react-parser/lib/index";
// Styles
import { cH2, cH6 } from "../../../../styled/Typography";
// Types
import { CryptoDescriptionData } from "../../../../../types";
function CryptoDescriptionCardWhat({ data }: { data: CryptoDescriptionData }) {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          mb: 1,
        }}>
        <Typography variant="h4" component="h2" gutterBottom sx={cH2}>
          What is {data.name}
        </Typography>
      </Box>
      <Typography variant="body1" component="h6" sx={cH6}>
        {HTMLReactParser(data.description)}
      </Typography>
    </Grid>
  );
}

export default CryptoDescriptionCardWhat;
