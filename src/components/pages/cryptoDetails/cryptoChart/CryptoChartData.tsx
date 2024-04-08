// Chart Js
import { Line } from "react-chartjs-2";
// Scss Variables
import variables from "../../../../assets/scss/_Variables.module.scss";
// Types
import { CryptoChartDataProps } from "../../../../types";
// Functions
import { extractCoinPriceHistoryAndTimestamps } from "../../../../functions";
// Data
import { chartOption } from "../../../../chartJs";
// Motion Custom Animation
import RevealOnView from "../../../motionAnimations/RevealOnView";
function CryptoChartData({ data }: { data: CryptoChartDataProps }) {
  const priceHistory = data;
  const coinDataObj = extractCoinPriceHistoryAndTimestamps(priceHistory);

  const chartData = {
    labels: coinDataObj.coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinDataObj.coinPriceHistory,
        borderColor: variables.bgColorPrimary,
        backgroundColor: variables.bgColorPrimary,
      },
    ],
  };

  return (
    <RevealOnView>
      <Line data={chartData} options={chartOption} />
    </RevealOnView>
  );
}

export default CryptoChartData;
