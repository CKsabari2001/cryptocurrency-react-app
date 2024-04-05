// Mui
import { Card, CardContent, Grid, Skeleton, useMediaQuery } from "@mui/material";
// Styles
import { cH1, cH6, cP } from "../../../../styled/Typography";
import { cChartCard, cChartCardContent } from "../../../../styled/CryptoChartLoader";

function CryptoStatsLoader() {
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowSpacing={5}
      columnSpacing={lg ? 0 : md ? 4 : 0}
      sx={{
        pt: md ? "100px" : "50px",
      }}>
      <Grid item xs={12} justifyContent={"center"} sx={{ textAlign: "center", mb: md ? 3 : 1 }}>
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}>
          <Skeleton variant="text" sx={{ fontSize: cH1 }} />
          <Skeleton variant="text" sx={{ fontSize: cH6 }} />
        </div>
      </Grid>
      {[1, 2].map((i) => (
        <Grid key={i} item xs={12} md={6} lg={5}>
          <Card className="crypto-card" variant="outlined" sx={cChartCard}>
            <CardContent sx={cChartCardContent}>
              <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={{ xs: 1, md: 3 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Grid key={i} item xs={12} sm={6}>
                    <Skeleton variant="text" sx={{ fontSize: cH6, maxWidth: "200px" }} />
                    <Skeleton variant="text" sx={{ fontSize: cP, maxWidth: "100px" }} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CryptoStatsLoader;
