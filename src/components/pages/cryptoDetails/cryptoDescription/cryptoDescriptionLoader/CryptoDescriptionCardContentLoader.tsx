// Mui
import { Grid, Skeleton } from "@mui/material";
// Styles
import { cH6 } from "../../../../styled/Typography";

function CryptoDescriptionCardContentLoader() {
  const cGrid = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const cSkeleton = {
    fontSize: cH6,
    width: "100%",
    maxWidth: "100px",
  };

  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <Grid key={i} item xs={12} sm={6} lg={5} sx={cGrid}>
          <Skeleton variant="text" sx={cSkeleton} />
          <Skeleton variant="text" sx={cSkeleton} />
        </Grid>
      ))}
    </>
  );
}

export default CryptoDescriptionCardContentLoader;
