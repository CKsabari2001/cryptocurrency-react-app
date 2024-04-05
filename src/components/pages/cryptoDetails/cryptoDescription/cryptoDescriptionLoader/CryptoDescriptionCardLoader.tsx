// Mui
import { Card, CardContent, Grid, Skeleton } from "@mui/material";
// Styles
import { cH2, cH6 } from "../../../../styled/Typography";
import { cChartCard, cChartCardContent } from "../../../../styled/CryptoChartLoader";
// Components
import CryptoDescriptionCardContentLoader from "./CryptoDescriptionCardContentLoader";
function CryptoDescriptionCardLoader() {
  const cSkeletonH2 = { fontSize: cH2, width: "100%", maxWidth: "200px" };
  const cSkeletonH6 = { fontSize: cH6, width: "100%" };

  return (
    <Card className="crypto-card" variant="outlined" sx={cChartCard}>
      <CardContent sx={cChartCardContent}>
        <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={{ xs: 1, md: 3 }}>
          <Grid item xs={12}>
            <Skeleton variant="text" sx={cSkeletonH2} />
            <Skeleton variant="text" sx={cSkeletonH6} />
          </Grid>
          <Grid item xs={12} lg={10} xl={8}>
            <Skeleton variant="text" sx={cSkeletonH2} />
            <Grid
              container
              justifyContent={"space-between"}
              rowSpacing={{ xs: 3, md: 5 }}
              columnSpacing={{ xs: 3, sm: 5, md: 10, lg: 0 }}>
              <CryptoDescriptionCardContentLoader />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CryptoDescriptionCardLoader;
