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
import {
  Card,
  CardContent,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import millify from "millify";

// Components
import ChartSelectBox from "./ChartSelectBox.tsx";

// Scss Variables
import variables from "../../../../assets/scss/_Variables.module.scss";

// Redux
import { useGetCryptoPriceHistoryQuery } from "../../../../app/store/services/cryptoApi.ts";
import { useAppSelector } from "../../../../app/store/hooks.ts";

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
  const md = useMediaQuery("(min-width: 900px)");

  const { data: priceHistory, isFetching: priceHistoryIsFetching } =
    useGetCryptoPriceHistoryQuery({
      params: {
        id: data?.uuid,
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

  // Const Styled Components
  const cH2 = {
    fontFamily: " 'Roboto', sans-serif",
    fontSize: md ? "34px" : "24px",
    fontWeight: 700,
    color: variables.textColorPrimary,
    marginBottom: md ? "0" : "10px",
  };
  const cH6 = {
    fontFamily: "'Lato', sans-serif",
    fontSize: md ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
    padding: md ? "0" : "0 10px",
    paddingLeft: md ? "30px" : "0",
    marginBottom: "0",

    span: {
      color: variables.bgColorPrimary,
      fontWeight: "800 !important",
    },
  };

  if (priceHistoryIsFetching) {
    return (
      <>
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
            {" "}
            <Skeleton
              variant="rounded"
              sx={{
                width: "100%",
                maxWidth: md ? "300px" : "100%",
                height: md ? "40px" : "30px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: md ? "row" : "column",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Skeleton
                variant="text"
                sx={{
                  fontSize: cH2.fontSize,
                  width: "100%",
                  maxWidth: "600px",
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  fontSize: cH6.fontSize,
                  width: "100%",
                  maxWidth: "400px",
                }}
              />
            </div>
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: md ? "500px" : "300px" }}
            />
          </CardContent>
        </Card>
      </>
    );
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
        borderColor: variables.bgColorPrimary,
        backgroundColor: variables.bgColorPrimary,
      },
    ],
  };

  const chartOption = {
    responsive: true,
    layout: {
      padding: 0,
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
          <div
            className="chart-header"
            style={{
              marginBottom: md ? "2rem" : "1rem",
            }}
          >
            <ChartSelectBox />
            <div
              style={{
                display: "flex",
                flexDirection: md ? "row" : "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant={isMobileScreen ? "h4" : "h5"}
                component="h2"
                sx={cH2}
              >
                {data.name} Price Chart
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant={isMobileScreen ? "h4" : "h5"}
                  component="h3"
                  gutterBottom
                  sx={cH6}
                >
                  Current {data.name} Change: <span>({data.change} %)</span>
                </Typography>
                <Typography
                  variant={isMobileScreen ? "h4" : "h5"}
                  component="h3"
                  gutterBottom
                  sx={cH6}
                >
                  Current {data.name} Price:{" "}
                  <span>$ {millify(data.price)}</span>
                </Typography>
              </div>
            </div>
          </div>
          <Line data={chartData} options={chartOption} />
        </CardContent>
      </Card>
    </>
  );
};

export default CryptoChart;
