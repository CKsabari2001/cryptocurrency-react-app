import { Box, Card, CardContent, Skeleton } from "@mui/material";
import {
  cChartCard,
  cChartCardContent,
  cH1s,
  cBox,
  cH2s,
  cH6s,
  cCharts,
} from "../../../styled/CryptoChartLoader";

function CryptoChartLoader() {
  return (
    <>
      <Card className="crypto-card" variant="outlined" sx={cChartCard}>
        <CardContent sx={cChartCardContent}>
          <Skeleton variant="rounded" sx={cH1s} />
          <Box sx={cBox}>
            <Skeleton variant="text" sx={cH2s} />
            <Skeleton variant="text" sx={cH6s} />
          </Box>
          <Skeleton variant="rounded" sx={cCharts} />
        </CardContent>
      </Card>
    </>
  );
}

export default CryptoChartLoader;
