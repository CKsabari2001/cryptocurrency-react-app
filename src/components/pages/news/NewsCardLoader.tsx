// MUI
import { Grid, useMediaQuery, Card, CardContent, Skeleton } from "@mui/material";
// Styles
import { cNewsCardH6, cNewsCardP } from "../../styled/NewsCard";

function NewsCardLoader() {
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <Grid container rowSpacing={md ? 8 : 5} columnSpacing={lg ? 10 : md ? 6 : 4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Grid key={i} item xs={12} sm={6} md={4} xl={3}>
            <Card className="cryptoNews-card loader" variant="outlined">
              <CardContent
                sx={{
                  margin: 0,
                  padding: 0,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <div className="card-header">
                  <Skeleton variant="rounded" width={"100%"} height={md ? 250 : 200} />
                </div>
                <div className="card-content-container" style={{ flexGrow: 1 }}>
                  <div className="card-body">
                    <Skeleton variant="text" sx={{ fontSize: cNewsCardH6 }} />
                    <Skeleton variant="text" sx={{ fontSize: cNewsCardP }} />
                  </div>
                  <div className="card-footer">
                    <Skeleton variant="text" sx={{ fontSize: cNewsCardP, minWidth: "100px" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default NewsCardLoader;
