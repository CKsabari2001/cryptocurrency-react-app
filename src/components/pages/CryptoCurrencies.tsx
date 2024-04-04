// Mui
import { Box, useMediaQuery } from "@mui/material";
// Styled Components
import { DrawerHeader } from "../styled/sideBarStyled.ts";
// Components
import CryptoLists from "./cryptoCurrencies/CryptoLists.tsx";
import SideBar from "../sidebar/SideBar.tsx";
// Redux
import { useGetCryptosQuery } from "../../app/store/services/cryptoApi.ts";
// Types
import { CryptoCoinsData } from "../../types.ts";

function CryptoCurrencies() {
  const md = useMediaQuery("(min-width: 900px)");

  const { data: cryptoData, isFetching: cryptoDataIsFetching } = useGetCryptosQuery({});
  const cryptoCoins: CryptoCoinsData[] = cryptoData?.data?.coins;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, px: md ? 8 : 5 }}>
          <DrawerHeader />
          <CryptoLists data={cryptoCoins} isFetching={cryptoDataIsFetching} />
        </Box>
      </Box>
    </>
  );
}

export default CryptoCurrencies;
