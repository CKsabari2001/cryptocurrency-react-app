import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

export const chartOption = {
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
