// Mui
import { Grid, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
// Millify
import millify from "millify";
// Types
import { CoinDataValueStats, CoinStats } from "../../../../types";
// Styles
import { cH6, cP } from "../../../styled/Typography";
import { cChartCardContent, cChartCard } from "../../../styled/CryptoChartLoader";
function CryptoValueCoinStats({ data }: { data: CoinDataValueStats }) {
  const md = useMediaQuery("(min-width: 900px)");

  const volume = data["24hVolume"];
  const coinStats: CoinStats[] = [
    { title: "Price to USD", data: data.price },
    { title: "Rank", data: data.rank },
    { title: "24h Volume", data: volume },
    { title: "Market Cap", data: data.marketCap },
    { title: "All-Time-High(daily avg.)", data: data.allTimeHigh.price },
  ];

  return (
    <>
      <Grid item xs={12} md={6} lg={5}>
        <Card className="crypto-card" variant="outlined" sx={cChartCard}>
          <CardContent sx={cChartCardContent}>
            <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={{ xs: 1, md: 3 }}>
              {coinStats.map((stat, i) => (
                <Grid key={i} item xs={12} sm={6}>
                  <div style={{ marginBottom: md ? 16 : 8 }}>
                    <Typography variant={"body1"} component="h6" sx={cH6}>
                      {stat.title}
                    </Typography>
                  </div>
                  <Typography variant="h6" component="p" sx={cP}>
                    {millify(stat.data)}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default CryptoValueCoinStats;
