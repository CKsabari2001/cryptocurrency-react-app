import React from "react";
import { Link } from "react-router-dom";

// Import MUI
import SideBar from "../SideBar.tsx";
import { Box, Typography, Grid, useMediaQuery, Button } from "@mui/material";
import { DrawerHeader } from "../styled/sideBarStyled.ts";

import millify from "millify";

// // Redux
import {
  useGetCryptosQuery,
  useGetLimitedCryptosQuery,
} from "../../app/store/services/cryptoApi.ts";

import { useGetCryptoNewsQuery } from "../../app/store/services/cryptoNewsApi.ts";

// Components
import CryptoLists from "./cryptoCurrencies/CryptoLists.tsx";
import NewsLists from "./news/NewsLists.tsx";

function Home() {
  // const dispatch = useAppDispatch();
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const { data: globalStatsData, isFetching: globalStatsDataIsFetching } =
    useGetCryptosQuery({});
  const globalStats = globalStatsData?.data?.stats;

  const { data: limitedCryptosData, isFetching: limitedCryptosDataIsFetching } =
    useGetLimitedCryptosQuery({
      limit: 10,
    });
  const cryptoCoins = limitedCryptosData?.data?.coins;

  const { data: cryptoNewsData, isFetching: cryptoNewsDataIsFetching } =
    useGetCryptoNewsQuery({
      params: {
        q: "cryptocurrency",
        sortBy: "popularity",
        apiKey: import.meta.env.VITE_NEWS_API_KEY,
      },
    });
  let cryptoNews = cryptoNewsData?.articles;
  cryptoNews = cryptoNews?.slice(0, 10);

  const dataIsFetching =
    globalStatsDataIsFetching ||
    limitedCryptosDataIsFetching ||
    cryptoNewsDataIsFetching;

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {dataIsFetching ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <div className="global-stats">
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
              </div>
              <div className="top-10">
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item>
                    <Typography
                      variant={isMobileScreen ? "h4" : "h5"}
                      component="h2"
                      gutterBottom
                    >
                      Top 10 Cryptos in the World
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to={"/CryptoCurrencies"}>
                      <Button variant="text">View More</Button>
                    </Link>
                  </Grid>
                </Grid>
                <CryptoLists data={cryptoCoins} hideSearch />
              </div>
              <div className="top-10">
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item>
                    <Typography
                      variant={isMobileScreen ? "h4" : "h5"}
                      component="h2"
                      gutterBottom
                    >
                      Top 10 Crypto News in the World
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to={"/news"}>
                      <Button variant="text">View More</Button>
                    </Link>
                  </Grid>
                </Grid>
                <NewsLists data={cryptoNews} />
              </div>
            </>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Home;
