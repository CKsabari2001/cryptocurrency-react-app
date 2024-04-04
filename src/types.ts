import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

export interface SideBarProps {
  open?: boolean;
  handleDrawerOpen?: () => void;
  handleDrawerClose?: () => void;
}

export interface SideListLinkProps {
  data: {
    text: string;
    icon: JSX.Element;
    path: string;
  };
  open: boolean | undefined;
}

export interface GlobalStatsCardProps {
  globalStats: {
    total: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
    totalMarkets: number;
  };
  isFetching: boolean;
}

export interface TypographyProps {
  text: string;
  isFetching: boolean;
}

export interface CryptoSearchBarProps {
  isFetching: boolean;
  hideSearch?: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface CryptoCoinsData {
  uuid: string;
  name: string;
  rank: number;
  iconUrl: string;
  price: number;
  marketCap: number;
  change: number;
}

export interface CryptoCardProps {
  coinList?: CryptoCoinsData[];
  isFetching: boolean;
}

export interface CryptoListsProps {
  data?: CryptoCoinsData[];
  isFetching: boolean;
  hideSearch?: boolean;
}

export interface CryptoNewsData {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  createdAt: number;
  source: {
    name: string;
  };
}

export interface NewsListsProps {
  data: CryptoNewsData[];
  isFetching: boolean;
}

export interface NewsCardProps {
  data: {
    news: CryptoNewsData;
    relativeTime: string;
  };
}

export interface CryptoCoinData {
  name: string;
  uuid: string;
  timePeriod: string;
  price: number;
  change: number;
  symbol: string;
}

export interface CryptoDetailsProps {
  data: CryptoCoinData;
  isFetching: boolean;
}

export interface PriceHistoryItem {
  price: number;
  timestamp: number;
}

export interface PriceHistoryData {
  history: PriceHistoryItem[];
}

export interface CryptoChartDataProps {
  data: PriceHistoryData;
}

export interface ChartSelectBoxMenuProps {
  value?: string;
  cryptoName?: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}
