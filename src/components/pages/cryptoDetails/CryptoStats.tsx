// MUI
import { Grid, Typography, useMediaQuery } from "@mui/material";

import millify from "millify";

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
}
interface CoinStats {
  title: string;
  data: number;
}
interface OtherStats {
  title: string;
  data: string | boolean;
}

function CryptoStats({ data }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");
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
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography
          variant={isMobileScreen ? "h4" : "h5"}
          component="h2"
          gutterBottom
        >
          {data.name} Value Statistic
        </Typography>
        <Typography variant={isMobileScreen ? "body1" : "body2"} component="h6">
          A overview showing the state of {data.name}
        </Typography>
        <div className="stats">
          <ul>
            {coinStats.map((stat) => (
              <li key={stat.title}>
                <Typography
                  variant={isMobileScreen ? "body1" : "body2"}
                  component="h6"
                >
                  {stat.title}
                </Typography>
                <Typography variant="h6" component="p">
                  {millify(stat.data)}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant={isMobileScreen ? "h4" : "h5"}
          component="h2"
          gutterBottom
        >
          {data.name} Value Statistic
        </Typography>
        <Typography variant={isMobileScreen ? "body1" : "body2"} component="h6">
          A overview showing the state of {data.name}
        </Typography>
        <div className="stats">
          <ul>
            {otherStats.map((stat) => (
              <li key={stat.title}>
                <Typography
                  variant={isMobileScreen ? "body1" : "body2"}
                  component="h6"
                >
                  {stat.title}
                </Typography>
                <Typography variant="h6" component="p">
                  {stat.data}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Grid>
  );
}

export default CryptoStats;
