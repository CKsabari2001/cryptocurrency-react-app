// Import React components
import SideBar from "../SideBar.tsx";
import { Box, useMediaQuery } from "@mui/material";
import { DrawerHeader } from "../styled/sideBarStyled.ts";

// Import React components
import CryptoLists from "./cryptoCurrencies/CryptoLists.tsx";

// // Redux
import { useGetCryptosQuery } from "../../app/store/services/cryptoApi.ts";

function CryptoCurrencies() {
  const md = useMediaQuery("(min-width: 900px)");

  const { data: cryptoData, isFetching: cryptoDataIsFetching } =
    useGetCryptosQuery({});
  const cryptoCoins = cryptoData?.data?.coins;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, px: md ? 8 : 5 }}>
          <DrawerHeader />
          <CryptoLists data={cryptoCoins} isFetcing={cryptoDataIsFetching} />
        </Box>
      </Box>
    </>
  );
}

export default CryptoCurrencies;
