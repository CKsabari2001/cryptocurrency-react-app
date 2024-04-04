// React Router
import { useParams } from "react-router-dom";
// MUI
import { Box, useMediaQuery } from "@mui/material";
// Styled Components
import { DrawerHeader } from "../styled/sideBarStyled.ts";
// Redux
import { useGetCryptoCoinQuery } from "../../app/store/services/cryptoApi.ts";
// Components
import SideBar from "../sidebar/SideBar.tsx";
import CryptoStats from "./cryptoDetails/CryptoStats.tsx";
import CryptoDescription from "./cryptoDetails/CryptoDescription.tsx";
import CryptoChart from "./cryptoDetails/cryptoChart/CryptoChart.tsx";
import CryptoTitle from "./cryptoDetails/CryptoTitle.tsx";

function CryptoDetails() {
  const md = useMediaQuery("(min-width: 900px)");

  const { coinId } = useParams();
  const { data: coinData, isFetching: coinDataIsFetching } = useGetCryptoCoinQuery({
    id: coinId ?? "",
  });
  const coin = coinData?.data?.coin;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, px: md ? 8 : 5 }}>
          <DrawerHeader />
          <CryptoTitle data={coin} isFetching={coinDataIsFetching} />
          <CryptoChart data={coin} isFetching={coinDataIsFetching} />
          <CryptoStats data={coin} isFetching={coinDataIsFetching} />
          <CryptoDescription data={coin} isFetching={coinDataIsFetching} />
        </Box>
      </Box>
    </>
  );
}

export default CryptoDetails;
