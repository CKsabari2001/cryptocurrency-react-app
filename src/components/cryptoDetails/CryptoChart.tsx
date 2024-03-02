import React from "react";

// Chart Js
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
import { Typography, useMediaQuery } from "@mui/material";
import millify from "millify";

// Components
import ChartSelectBox from "./ChartSelectBox.tsx";

// Redux
import { useGetCryptoPriceHistoryQuery } from "../../app/store/services/cryptoApi.ts";
import { useAppSelector } from "../../app/store/hooks.ts";

interface Props {
  data: {
    name: string;
    uuid: string;
    timePeriod: string;
    price: number;
    change: number;
  };
}
const CryptoChart = ({ data }: Props) => {
  const chartTimePeriod = useAppSelector((state) => state.chartSelect.value);
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const { data: priceHistory, isFetching: priceHistoryIsFetching } =
    useGetCryptoPriceHistoryQuery({
      params: {
        id: data.uuid,
        timePeriod: chartTimePeriod == "" ? "1y" : chartTimePeriod,
      },
    });
  const coinPriceHistory = [];
  const coinTimeStamp = [];

  for (let i = 0; i < priceHistory?.data?.history?.length; i++) {
    coinPriceHistory.push(priceHistory.data.history[i].price);
    coinTimeStamp.push(
      new Date(
        priceHistory.data.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }

  if (priceHistoryIsFetching) {
    return <div>Loading...</div>;
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );

  const chartData = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPriceHistory,
        borderColor: "#1971D2",
        backgroundColor: "#1976D2",
      },
    ],
  };

  const chartOption = {
    responsive: true,
    layout: {
      padding: 20,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        reverse: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: false,
        },
        title: {
          display: true,
          text: "Coin Price Chart",
        },
      },
    },
  };
  return (
    <>
      <div className="chart-header">
        <ChartSelectBox />
        <Typography
          variant={isMobileScreen ? "h4" : "h5"}
          component="h2"
          gutterBottom
        >
          {data.name} Price Chart
        </Typography>
        <div>
          <Typography
            variant={isMobileScreen ? "h4" : "h5"}
            component="h2"
            gutterBottom
          >
            {data.change} %
          </Typography>
          <Typography
            variant={isMobileScreen ? "h4" : "h5"}
            component="h2"
            gutterBottom
          >
            Current {data.name} Price: $ {millify(data.price)}
          </Typography>
        </div>
      </div>
      <Line data={chartData} options={chartOption} />
    </>
  );
};

export default CryptoChart;
