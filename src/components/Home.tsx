// Import React components
import SideBar from "./SideBar";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { DrawerHeader } from "./styled/sideBarStyled";

import millify from "millify";

// Redux
// import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { useGetCryptosQuery } from "../app/store/services/cryptoApi.ts";
function Home() {
  // const dispatch = useAppDispatch();
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const { data, isFetching } = useGetCryptosQuery({ page: 1, limit: 50 });
  const globalStats = data?.data?.stats;

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography
            variant={isMobileScreen ? "h4" : "h5"}
            component="h2"
            gutterBottom
          >
            Global Crypto Stats
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobileScreen ? "body1" : "body2"}
                component="h6"
              >
                Total Cryptocurrencies
              </Typography>
              <Typography variant="h6" component="p">
                {millify(globalStats.total)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobileScreen ? "body1" : "body2"}
                component="h6"
              >
                Total Exchanges
              </Typography>
              <Typography variant="h6" component="p">
                {millify(globalStats.totalExchanges)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobileScreen ? "body1" : "body2"}
                component="h6"
              >
                Total Market Cap
              </Typography>
              <Typography variant="h6" component="p">
                {millify(globalStats.totalMarketCap)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobileScreen ? "body1" : "body2"}
                component="h6"
              >
                Total 24h Volume
              </Typography>
              <Typography variant="h6" component="p">
                {millify(globalStats.total24hVolume)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobileScreen ? "body1" : "body2"}
                component="h6"
              >
                Total Markets
              </Typography>
              <Typography variant="h6" component="p">
                {millify(globalStats.totalMarkets)}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Home;
