//MUI
import { Grid } from "@mui/material";
// Millify
import millify from "millify";
// Types
import { GlobalStatsCardProps } from "../../../types";
// Styled
import TypographyH6 from "../../typography/TypographyH6";
import TypographyP from "../../typography/TypographyP";

function GlobalStatsCardItem({ globalStats, isFetching }: GlobalStatsCardProps) {
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
    <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={{ xs: 1, md: 3 }}>
      {globalCryptoStats.map((obj, i) => (
        <Grid key={i} item xs={12} sm={6}>
          <TypographyH6 text={obj.name} isFetching={isFetching} />
          <TypographyP text={millify(obj.stats)} isFetching={isFetching} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GlobalStatsCardItem;
