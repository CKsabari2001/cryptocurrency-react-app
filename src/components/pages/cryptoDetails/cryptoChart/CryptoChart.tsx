// Mui
import { Card, CardContent } from "@mui/material";
// Redux
import { useGetCryptoPriceHistoryQuery } from "../../../../app/store/services/cryptoApi.ts";
import { useAppSelector } from "../../../../app/store/hooks.ts";
// Types
import { CryptoDetailsProps } from "../../../../types.ts";
import CryptoChartLoader from "./CryptoChartLoader.tsx";
import CryptoChartHeader from "./CryptoChartHeader.tsx";
import { cChartCard, cChartCardContent } from "../../../styled/CryptoChartLoader.ts";
import CryptoChartData from "./CryptoChartData.tsx";

const CryptoChart = ({ data, isFetching }: CryptoDetailsProps) => {
  const chartTimePeriod = useAppSelector((state) => state.chartSelect.value);

  const { data: priceHistory, isFetching: priceHistoryIsFetching } = useGetCryptoPriceHistoryQuery({
    params: {
      id: data?.uuid,
      timePeriod: chartTimePeriod == "" ? "1y" : chartTimePeriod,
    },
  });

  if (priceHistoryIsFetching || isFetching) {
    return <CryptoChartLoader />;
  }

  return (
    <>
      <Card className="crypto-card" variant="outlined" sx={cChartCard}>
        <CardContent sx={cChartCardContent}>
          <CryptoChartHeader data={data} />
          <CryptoChartData data={priceHistory} />
        </CardContent>
      </Card>
    </>
  );
};

export default CryptoChart;
