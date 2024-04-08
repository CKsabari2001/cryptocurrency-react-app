// Import MUI
import { Grid, useMediaQuery } from "@mui/material";
// // Redux
import { useGetLimitedCryptosQuery } from "../../../app/store/services/cryptoApi.ts";
// Components
import CryptoLists from "../cryptoCurrencies/CryptoLists.tsx";
import TypographyH2 from "../../typography/TypographyH2";
import ViewMore from "../../Button/ViewMore.tsx";
function TopCrypto() {
  const { data: limitedCryptosData, isFetching: limitedCryptosDataIsFetching } = useGetLimitedCryptosQuery({
    limit: 10,
  });
  const cryptoCoins = limitedCryptosData?.data?.coins;

  const sm = useMediaQuery("(min-width: 600px)");
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <div className="top-10">
      <Grid
        container
        rowSpacing={2}
        direction={sm ? "row" : "column"}
        justifyContent={sm ? "space-between" : "center"}
        alignItems={"center"}
        sx={{
          mb: md ? 5 : 3,
        }}>
        <Grid item flexGrow={1}>
          <TypographyH2 text={"Top 10 Cryptos in the World"} isFetching={limitedCryptosDataIsFetching} />
        </Grid>
        <Grid item>
          <ViewMore text={"View More"} isFetching={limitedCryptosDataIsFetching} />
        </Grid>
      </Grid>
      <CryptoLists data={cryptoCoins} isFetching={limitedCryptosDataIsFetching} isHomePage />
    </div>
  );
}

export default TopCrypto;
