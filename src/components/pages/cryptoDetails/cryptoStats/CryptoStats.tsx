// MUI
import { Grid, useMediaQuery } from "@mui/material";
// Components
import CryptoStatsLoader from "./cryptoStatsLoader/CryptoStatsLoader";
import CryptoValueTop from "./CryptoValueTop";
import CryptoValueCoinStats from "./CryptoValueCoinStats";
import CryptoValueMarketStats from "./CryptoValueMarketStats";
// Types
import { CryptoStatsProps } from "../../../../types";
// Styles
import { cGrid } from "../../../styled/Card";

function CryptoStats({ data, isFetching }: CryptoStatsProps) {
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  if (isFetching) {
    return <CryptoStatsLoader />;
  }

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowSpacing={5}
      columnSpacing={lg ? 0 : md ? 4 : 0}
      sx={cGrid}>
      <CryptoValueTop data={data} />
      <CryptoValueCoinStats data={data} />
      <CryptoValueMarketStats data={data} />
    </Grid>
  );
}

export default CryptoStats;
