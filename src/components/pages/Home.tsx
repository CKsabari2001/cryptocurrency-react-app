import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";
// Import MUI
import SideBar from "../SideBar.tsx";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Button,
  Skeleton,
  Card,
  CardContent,
} from "@mui/material";
import { DrawerHeader } from "../styled/sideBarStyled.ts";
// // Redux
import {
  useGetCryptosQuery,
  useGetLimitedCryptosQuery,
} from "../../app/store/services/cryptoApi.ts";
import { useGetCryptoNewsQuery } from "../../app/store/services/cryptoNewsApi.ts";
// Scss Variables
import variables from "../../assets/scss/_Variables.module.scss";
// Components
import CryptoLists from "./cryptoCurrencies/CryptoLists.tsx";
import NewsLists from "./news/NewsLists.tsx";

function Home() {
  // const dispatch = useAppDispatch();
  // const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const sm = useMediaQuery("(min-width: 600px)");
  const md = useMediaQuery("(min-width: 900px)");
  // const lg = useMediaQuery("(min-width: 1200px)");
  // const xl = useMediaQuery("(min-width: 1536px)");

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

  // Const Styled Components
  const cH1 = {
    fontSize: md ? "38px" : "28px",
    fontWeight: 700,
    color: variables.textColorPrimary,
  };
  const cH6 = {
    fontSize: md ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
  };
  const cP = {
    fontSize: md ? "24px" : "22px",
    fontWeight: 800,
    color: variables.bgColorPrimary,
    fontFamily: "'Roboto', sans-serif",
  };

  const cVButton = {
    fontSize: md ? "18px" : "16px",
    fontWeight: 500,
    color: variables.bgColorPrimary,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "capitalize",
    padding: "10px 30px",

    "&:hover": {
      backgroundColor: "transparent",
      color: variables.bgColorPrimaryFaded,
    },
  };

  const globalCryptoStats = [
    {
      name: "Total Cryptocurrencies",
      stats: globalStats?.total,
    },
    {
      name: "Total Exchanges",
      stats: globalStats?.totalExchanges,
    },
    {
      name: "Total Market Cap",
      stats: globalStats?.totalMarketCap,
    },
    {
      name: "Total 24h Volume",
      stats: globalStats?.total24hVolume,
    },
    {
      name: "Total Markets",
      stats: globalStats?.totalMarkets,
    },
  ];
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, px: md ? 8 : 5 }}>
          <DrawerHeader />
          <div className={sm ? "text-left" : "text-center"}>
            {globalStatsDataIsFetching ? (
              <Skeleton variant="text" sx={{ fontSize: cH1.fontSize }} />
            ) : (
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ ...cH1, mb: md ? 5 : 3 }}
              >
                Global Crypto Stats
              </Typography>
            )}

            <Card
              className="crypto-card"
              variant="outlined"
              sx={{
                maxWidth: "50rem",
              }}
            >
              <CardContent
                sx={{
                  padding: md ? "50px !important" : "30px!important",
                }}
              >
                <Grid
                  container
                  rowSpacing={{ xs: 3, md: 5 }}
                  columnSpacing={{ xs: 1, md: 3 }}
                >
                  {globalCryptoStats.map((obj, i) => (
                    <Grid key={i} item xs={12} sm={6}>
                      {globalStatsDataIsFetching ? (
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: cH6.fontSize, maxWidth: "300px" }}
                        />
                      ) : (
                        <Typography
                          variant="h5"
                          component="h6"
                          sx={{ ...cH6, mb: md ? 2 : 1 }}
                        >
                          {obj.name}
                        </Typography>
                      )}

                      {globalStatsDataIsFetching ? (
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: cP.fontSize, maxWidth: "300px" }}
                        />
                      ) : (
                        <Typography variant="body1" component="p" sx={cP}>
                          {millify(obj.stats)}
                        </Typography>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </div>
          <div className="top-10">
            <Grid
              container
              rowSpacing={2}
              direction={sm ? "row" : "column"}
              justifyContent={sm ? "space-between" : "center"}
              alignItems={"center"}
              sx={{
                mb: md ? 5 : 3,
              }}
            >
              <Grid item>
                {limitedCryptosDataIsFetching ? (
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: cH1.fontSize,
                      width: "100px",
                      minWidth: "200px",
                      maxWidth: "400px",
                    }}
                  />
                ) : (
                  <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                      ...cH1,
                      textAlign: sm ? "left" : "center",
                    }}
                  >
                    Top 10 Cryptos in the World
                  </Typography>
                )}
              </Grid>
              <Grid item>
                {limitedCryptosDataIsFetching ? (
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: cVButton.fontSize,
                      width: "100px",
                      minWidth: "50px",
                      maxWidth: "100px",
                    }}
                  />
                ) : (
                  <Link to={"/CryptoCurrencies"}>
                    <Button variant="text" sx={cVButton}>
                      View More
                    </Button>
                  </Link>
                )}
              </Grid>
            </Grid>
            <CryptoLists
              data={cryptoCoins}
              isFetcing={limitedCryptosDataIsFetching}
              hideSearch
            />
          </div>
          <div className="top-10">
            <Grid
              container
              rowSpacing={2}
              direction={sm ? "row" : "column"}
              justifyContent={sm ? "space-between" : "center"}
              alignItems={"center"}
              sx={{
                mb: md ? 5 : 3,
              }}
            >
              <Grid item>
                {cryptoNewsDataIsFetching ? (
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: cH1.fontSize,
                      width: "100px",
                      minWidth: "200px",
                      maxWidth: "400px",
                    }}
                  />
                ) : (
                  <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                      ...cH1,

                      textAlign: sm ? "left" : "center",
                    }}
                  >
                    Top 10 Crypto News in the World
                  </Typography>
                )}
              </Grid>
              <Grid item>
                {cryptoNewsDataIsFetching ? (
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: cVButton.fontSize,
                      width: "100px",
                      minWidth: "50px",
                      maxWidth: "100px",
                    }}
                  />
                ) : (
                  <Link to={"/news"}>
                    <Button variant="text" sx={cVButton}>
                      View More
                    </Button>
                  </Link>
                )}
              </Grid>
            </Grid>
            <NewsLists data={cryptoNews} isFetcing={cryptoNewsDataIsFetching} />
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Home;
