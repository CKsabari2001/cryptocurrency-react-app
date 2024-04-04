// Types
import { CryptoChartDataProps } from "./types";

export function limitWords(str: string, maxWords: number) {
  const words = str.split(" ");
  if (words.length > maxWords) {
    const sliced = words.slice(0, maxWords).join(" ");
    const lastSpace = sliced.lastIndexOf(" ");

    const truncated = sliced.substring(0, lastSpace > 0 ? lastSpace : maxWords);
    return truncated + "...";
  }
  return str;
}

export function extractCoinPriceHistoryAndTimestamps(coinData: CryptoChartDataProps) {
  const coinPriceHistory = [];
  const coinTimeStamp = [];
  for (let i = 0; i < coinData?.data?.history?.length; i++) {
    coinPriceHistory.push(coinData.data.history[i].price);
    coinTimeStamp.push(new Date(coinData.data.history[i].timestamp * 1000).toLocaleDateString());
  }
  const obj = {
    coinPriceHistory,
    coinTimeStamp,
  };

  return obj;
}
