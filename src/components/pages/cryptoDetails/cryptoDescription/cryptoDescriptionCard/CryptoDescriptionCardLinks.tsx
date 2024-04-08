// Mui
import { Box, Grid, Typography } from "@mui/material";
// Types
import { CryptoDescriptionData } from "../../../../../types";
// Components
import CryptoDescriptionCardLinkList from "./CryptoDescriptionCardLinkList";
// Styles
import { cH2 } from "../../../../styled/Typography";
// Motion Custom Animation
import RevealOnViewLeft from "../../../../motionAnimations/RevealOnViewLeft";
function CryptoDescriptionCardLinks({ data }: { data: CryptoDescriptionData }) {
  return (
    <Grid item xs={12} lg={10} xl={8}>
      <Box
        sx={{
          mb: 1,
        }}>
        <RevealOnViewLeft>
          <Typography variant="h4" component="h2" gutterBottom sx={cH2}>
            {data.name} Links
          </Typography>
        </RevealOnViewLeft>
      </Box>
      <Grid
        container
        justifyContent={"space-between"}
        rowSpacing={{ xs: 3, md: 5 }}
        columnSpacing={{ xs: 3, sm: 5, md: 10, lg: 0 }}>
        <CryptoDescriptionCardLinkList data={data} />
      </Grid>
    </Grid>
  );
}

export default CryptoDescriptionCardLinks;
