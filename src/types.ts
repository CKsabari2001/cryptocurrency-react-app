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
  link?: string;
  index?: number;
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
  isHomePage?: boolean;
}

export interface CryptoListsProps {
  data?: CryptoCoinsData[];
  isFetching: boolean;
  isHomePage?: boolean;
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
  isHomePage: boolean;
}

export interface NewsCardProps {
  data: {
    news: CryptoNewsData;
    relativeTime: string;
  };
  isHover: boolean;
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

export interface CoinDataValueStats {
  name: string;
  price: number;
  rank: number;
  "24hVolume": number;
  marketCap: number;
  allTimeHigh: {
    price: number;
  };
  numberOfMarkets: number;
  numberOfExchanges: number;
  supply: {
    confirmed: boolean;
    total: number;
    circulating: number;
  };
}

export interface CryptoStatsProps {
  data: CoinDataValueStats;
  isFetching: boolean;
}

export interface CoinStats {
  title: string;
  data: number;
}

export interface OtherStats {
  title: string;
  data: string | boolean;
}

export interface CryptoDescriptionData {
  name: string;
  description: string;
  links: Links[];
}

export interface CryptoDescriptionProps {
  data: CryptoDescriptionData;
  isFetching: boolean;
}

export interface Links {
  name: string;
  url: string;
  type: string;
}
