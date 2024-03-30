// MUI
import {
  Card,
  CardContent,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";

import millify from "millify";

// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";

interface Props {
  data: {
    name: string;
    price: number;
    rank: number;
    "24hVolume": number;
    marketCap: number;
    allTimeHigh: {
      price: number;
    };
    numberOfMarkets: number;
    numberOfExchanges: number;
    supply: {
      confirmed: boolean;
      total: number;
      circulating: number;
    };
  };

  isFetching: boolean;
}
interface CoinStats {
  title: string;
  data: number;
}
interface OtherStats {
  title: string;
  data: string | boolean;
}

function CryptoStats({ data, isFetching }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  // Const Styled Components

  const cH1 = {
    fontFamily: " 'Roboto', sans-serif",
    fontSize: md ? "38px" : "28px",
    fontWeight: 700,
    color: variables.textColorPrimary,
  };
  const cH6 = {
    fontFamily: "'Lato', sans-serif",
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

  if (isFetching) {
    return (
      <Grid
        container
        justifyContent={"space-between"}
        rowSpacing={5}
        columnSpacing={lg ? 0 : md ? 4 : 0}
        sx={{
          pt: md ? "100px" : "50px",
        }}
      >
        <Grid
          item
          xs={12}
          justifyContent={"center"}
          sx={{ textAlign: "center", mb: md ? 3 : 1 }}
        >
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: cH1.fontSize }} />
            <Skeleton variant="text" sx={{ fontSize: cH6.fontSize }} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Card
            className="crypto-card"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "100%",
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
                {[1, 2, 3, 4, 5].map((i) => (
                  <Grid key={i} item xs={12} sm={6}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: cH6.fontSize, maxWidth: "200px" }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: cP.fontSize, maxWidth: "100px" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Card
            className="crypto-card"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "100%",
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
                {[1, 2, 3, 4, 5].map((i) => (
                  <Grid key={i} item xs={12} sm={6}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: cH6.fontSize, maxWidth: "200px" }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: cP.fontSize, maxWidth: "100px" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }

  const volume = data["24hVolume"];
  const coinStats: CoinStats[] = [
    { title: "Price to USD", data: data.price },
    { title: "Rank", data: data.rank },
    { title: "24h Volume", data: volume },
    { title: "Market Cap", data: data.marketCap },
    { title: "All-Time-High(daily avg.)", data: data.allTimeHigh.price },
  ];
  const otherStats: OtherStats[] = [
    { title: "Number of Markets", data: millify(data.numberOfMarkets) },
    { title: "Number of Exchanges", data: millify(data.numberOfExchanges) },
    { title: "Approved Supply", data: data.supply.confirmed ? "Yes" : "No" },
    { title: "Total Supply", data: millify(data.supply.total) },
    { title: "Circulating Supply", data: millify(data.supply.circulating) },
  ];

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowSpacing={5}
      columnSpacing={lg ? 0 : md ? 4 : 0}
      sx={{
        pt: md ? "100px" : "50px",
      }}
    >
      <Grid
        item
        xs={12}
        justifyContent={"center"}
        sx={{ textAlign: "center", mb: md ? 3 : 1 }}
      >
        <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
          {data.name} Value Statistic
        </Typography>
        <Typography
          variant={isMobileScreen ? "body1" : "body2"}
          component="h6"
          sx={cH6}
        >
          A overview showing the state of {data.name}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Card
          className="crypto-card"
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: "100%",
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
              {coinStats.map((stat, i) => (
                <Grid key={i} item xs={12} sm={6}>
                  <Typography
                    variant={isMobileScreen ? "body1" : "body2"}
                    component="h6"
                    sx={{ ...cH6, mb: md ? 2 : 1 }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography variant="h6" component="p" sx={cP}>
                    {millify(stat.data)}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Card
          className="crypto-card"
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: "100%",
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
              {otherStats.map((stat, i) => (
                <Grid key={i} item xs={12} sm={6}>
                  <Typography
                    variant={isMobileScreen ? "body1" : "body2"}
                    component="h6"
                    sx={{ ...cH6, mb: md ? 2 : 1 }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography variant="h6" component="p" sx={cP}>
                    {stat.data}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CryptoStats;
