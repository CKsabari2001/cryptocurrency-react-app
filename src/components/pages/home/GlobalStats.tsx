//MUI
import { useMediaQuery } from "@mui/material";
import { useGetCryptosQuery } from "../../../app/store/services/cryptoApi";
// Components
import GlobalStatsCard from "./GlobalStatsCard";
import TypographyH2 from "../../typography/TypographyH2";
function GlobalStats() {
  const sm = useMediaQuery("(min-width: 600px)");

  const { data: globalStatsData, isFetching: globalStatsDataIsFetching } = useGetCryptosQuery({});
  const globalStats = globalStatsData?.data?.stats;

  return (
    <div className={sm ? "text-left" : "text-center"}>
      <TypographyH2 text={"Global Crypto Stats"} isFetching={globalStatsDataIsFetching} />
      <GlobalStatsCard globalStats={globalStats} isFetching={globalStatsDataIsFetching} />
    </div>
  );
}

export default GlobalStats;
