// Import React components
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import { DrawerHeader } from "./styled/sideBarStyled";

// Import React components
import CryptoLists from "./CryptoLists";

// // Redux
import { useGetCryptosQuery } from "../app/store/services/cryptoApi.ts";

function CryptoCurrencies() {
  const { data: cryptoData, isFetching: cryptoDataIsFetching } =
    useGetCryptosQuery({});
  const cryptoCoins = cryptoData?.data?.coins;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {cryptoDataIsFetching ? (
            <h1>Loading...</h1>
          ) : (
            <CryptoLists data={cryptoCoins} />
          )}
        </Box>
      </Box>
    </>
  );
}

export default CryptoCurrencies;
