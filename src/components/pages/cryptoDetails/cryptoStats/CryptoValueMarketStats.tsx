// Mui
import { Grid, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
// Millify
import millify from "millify";
// Styles
import { cH6, cP } from "../../../styled/Typography";
import { cChartCardContent, cChartCard } from "../../../styled/CryptoChartLoader";
// Types
import { CoinDataValueStats, OtherStats } from "../../../../types";
// Motion Custom Animation
import RevealOnViewRight from "../../../motionAnimations/RevealOnViewRight";

function CryptoValueMarketStats({ data }: { data: CoinDataValueStats }) {
  const md = useMediaQuery("(min-width: 900px)");

  const otherStats: OtherStats[] = [
    { title: "Number of Markets", data: millify(data.numberOfMarkets) },
    { title: "Number of Exchanges", data: millify(data.numberOfExchanges) },
    { title: "Approved Supply", data: data.supply.confirmed ? "Yes" : "No" },
    { title: "Total Supply", data: millify(data.supply.total) },
    { title: "Circulating Supply", data: millify(data.supply.circulating) },
  ];
  return (
    <>
      <Grid item xs={12} md={6} lg={5}>
        <RevealOnViewRight>
          <Card className="crypto-card" variant="outlined" sx={cChartCard}>
            <CardContent sx={cChartCardContent}>
              <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={{ xs: 1, md: 3 }}>
                {otherStats.map((stat, i) => (
                  <Grid key={i} item xs={12} sm={6}>
                    <div style={{ marginBottom: md ? 16 : 8 }}>
                      <Typography variant={"body1"} component="h6" sx={cH6}>
                        {stat.title}
                      </Typography>
                    </div>
                    <Typography variant="h6" component="p" sx={cP}>
                      {stat.data}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </RevealOnViewRight>
      </Grid>
    </>
  );
}

export default CryptoValueMarketStats;
