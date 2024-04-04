import { useParams } from "react-router-dom";

// MUI
import SideBar from "../sidebar/SideBar.tsx";
import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";
import { DrawerHeader } from "../styled/sideBarStyled.ts";

// Scss Variables
import variables from "../../assets/scss/_Variables.module.scss";

// Redux
import { useGetCryptoCoinQuery } from "../../app/store/services/cryptoApi.ts";

// Components
import CryptoStats from "./cryptoDetails/CryptoStats.tsx";
import CryptoDescription from "./cryptoDetails/CryptoDescription.tsx";
import CryptoChart from "./cryptoDetails/cryptoChart/CryptoChart.tsx";

function CryptoDetails() {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");
  const md = useMediaQuery("(min-width: 900px)");

  const { coinId } = useParams();
  const { data: coinData, isFetching: coinDataIsFetching } = useGetCryptoCoinQuery({
    id: coinId ?? "",
  });
  const coin = coinData?.data?.coin;

  console.log(coinDataIsFetching);

  // Const Styled Components
  const cH1 = {
    fontFamily: " 'Roboto', sans-serif",
    fontSize: md ? "38px" : "28px",
    fontWeight: 700,
    color: variables.textColorPrimary,
  };
  const cH6 = {
    fontFamily: "'Lato', sans-serif",
    fontSize: md ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, px: md ? 8 : 5 }}>
          <DrawerHeader />
          <div
            className="title-section"
            style={{
              marginBottom: md ? "80px" : "30px",
            }}>
            {coinDataIsFetching ? (
              <>
                <div
                  style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}>
                  <Skeleton variant="text" sx={{ fontSize: cH1.fontSize }} />
                  <Skeleton variant="text" sx={{ fontSize: cH6.fontSize }} />
                </div>
              </>
            ) : (
              <>
                <Typography variant={isMobileScreen ? "h4" : "h5"} component="h2" gutterBottom sx={cH1}>
                  {coin.name} ({coin.name}-{coin.symbol}) Price
                </Typography>
                <Typography variant={isMobileScreen ? "body1" : "body2"} component="h6" sx={cH6}>
                  {coin.name} live price in US dollars.
                </Typography>
              </>
            )}
          </div>
          <CryptoChart data={coin} isFetching={coinDataIsFetching} />
          <CryptoStats data={coin} isFetching={coinDataIsFetching} />
          <CryptoDescription data={coin} isFetching={coinDataIsFetching} />
        </Box>
      </Box>
    </>
  );
}

export default CryptoDetails;
