import { useParams } from "react-router-dom";

// MUI
import SideBar from "../SideBar.tsx";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { DrawerHeader } from "../styled/sideBarStyled.ts";

// Redux
import { useGetCryptoCoinQuery } from "../../app/store/services/cryptoApi.ts";

// Components
import CryptoStats from "./cryptoDetails/CryptoStats.tsx";
import CryptoDescription from "./cryptoDetails/CryptoDescription.tsx";
import CryptoChart from "./cryptoDetails/cryptoChart/CryptoChart.tsx";

function CryptoDetails() {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const { coinId } = useParams();
  const { data: coinData, isFetching: coinDataIsFetching } =
    useGetCryptoCoinQuery({
      id: coinId ?? "",
    });
  const coin = coinData?.data?.coin;

  if (coinDataIsFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <div className="title-section">
            <Typography
              variant={isMobileScreen ? "h4" : "h5"}
              component="h2"
              gutterBottom
            >
              {coin.name} ({coin.name}-{coin.symbol}) Price
            </Typography>
            <Typography
              variant={isMobileScreen ? "body1" : "body2"}
              component="h6"
            >
              {coin.name} live price in US dollars.
            </Typography>
          </div>
          <CryptoChart data={coin} />
          <CryptoStats data={coin} />
          <CryptoDescription data={coin} />
        </Box>
      </Box>
    </>
  );
}

export default CryptoDetails;
