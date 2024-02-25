// Import React components
import SideBar from "./SideBar";
import { Box, Typography } from "@mui/material";
import { DrawerHeader } from "./styled/sideBarStyled";

function CryptoCurrencies() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>
            <h1>Crypto Currencies Page</h1>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CryptoCurrencies;
