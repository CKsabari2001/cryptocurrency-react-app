// Mui
import { Box, useMediaQuery } from "@mui/material";
// Styled Components
import { DrawerHeader } from "../styled/sideBarStyled.ts";
// components
import SideBar from "../sidebar/SideBar.tsx";
import NewsList from "./news/NewsLists.tsx";
import NewsListSelect from "./news/NewsListSelect.tsx";
// Redux
import { useGetCryptoNewsQuery } from "../../app/store/services/cryptoNewsApi.ts";
import { useAppSelector } from "../../app/store/hooks.ts";

function News() {
  const md = useMediaQuery("(min-width: 900px)");

  let cryptoSelectedName = useAppSelector((state) => state.newsSelect.value);
  cryptoSelectedName.toLocaleLowerCase();

  if (cryptoSelectedName == "") {
    cryptoSelectedName = "/bitcoinist";
  }

  const { data: cryptoNewsData, isFetching: cryptoNewsDataIsFetching } = useGetCryptoNewsQuery({
    params: {
      source: cryptoSelectedName,
    },
  });

  const cryptoNews = cryptoNewsData?.data;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, px: md ? 8 : 5 }}>
          <DrawerHeader />
          <NewsListSelect isFetching={cryptoNewsDataIsFetching} />
          <NewsList data={cryptoNews} isFetching={cryptoNewsDataIsFetching} />
        </Box>
      </Box>
    </>
  );
}

export default News;
