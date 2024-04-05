import { Card, CardContent, Grid, Skeleton, useMediaQuery } from "@mui/material";
// Scss Variables
import variables from "../../../../assets/scss/_Variables.module.scss";

function CryptoCardLoader() {
  const md = useMediaQuery("(min-width: 900px)");

  // Const Styled Components
  const cH6 = {
    fontSize: md ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
  };
  const cP = {
    fontSize: md ? "16px" : "14px",
  };

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <Card className="crypto-card" variant="outlined" sx={{ margin: "auto", mt: 5 }}>
            <CardContent sx={{ p: 3 }}>
              <div className="card-header">
                <Skeleton variant="text" sx={{ fontSize: cH6.fontSize, width: "100px" }} />

                <Skeleton variant="circular" width={40} height={40} />
              </div>
              <div className="card-body">
                <Skeleton variant="text" sx={{ fontSize: cP.fontSize }} />
                <Skeleton variant="text" sx={{ fontSize: cP.fontSize }} />
                <Skeleton variant="text" sx={{ fontSize: cP.fontSize }} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default CryptoCardLoader;
