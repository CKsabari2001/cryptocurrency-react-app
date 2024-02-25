// Import React components
import SideBar from "./SideBar";
import { Box, Typography } from "@mui/material";
import { DrawerHeader } from "./styled/sideBarStyled";

function CryptoDetails() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>
            <h1>Crypto Details Page</h1>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CryptoDetails;
