// MUI
import { Box, useMediaQuery } from "@mui/material";
// Styled Components
import { DrawerHeader } from "../styled/sideBarStyled.ts";
// Components
import SideBar from "../sidebar/SideBar.tsx";
import GlobalStats from "./home/GlobalStats.tsx";
import TopCrypto from "./home/TopCrypto.tsx";
import TopNews from "./home/TopNews.tsx";
import Footer from "../Footer.tsx";
// Custom Motion Components
import FadeInOut from "../motionAnimations/PageFadeInOut.tsx";
function Home() {
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <FadeInOut>
        <Box className="main" component="main" sx={{ flexGrow: 1, p: 3, px: md ? 8 : 5 }}>
          <DrawerHeader />
          <GlobalStats />
          <TopCrypto />
          <TopNews />
        </Box>
        <Box component="div" sx={{ flexGrow: 1 }}>
          <Footer />
        </Box>
      </FadeInOut>
    </Box>
  );
}

export default Home;
