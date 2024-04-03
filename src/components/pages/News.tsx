// Import React components
import SideBar from "../SideBar.tsx";
import { Box } from "@mui/material";
import { DrawerHeader } from "../styled/sideBarStyled.ts";

// Import React components
import NewsList from "./news/NewsLists.tsx";
import NewsListSelect from "./news/NewsListSelect.tsx";

// Redux
import { useGetCryptoNewsQuery } from "../../app/store/services/cryptoNewsApi.ts";
import { useAppSelector } from "../../app/store/hooks.ts";

function News() {
  let cryptoSelectedName = useAppSelector((state) => state.newsSelect.value);
  cryptoSelectedName.toLocaleLowerCase();

  if (cryptoSelectedName == "") {
    cryptoSelectedName = "/coindesk";
  }

  const { data: cryptoNewsData, isFetching: cryptoNewsDataIsFetching } =
    useGetCryptoNewsQuery({
      params: {
        source: cryptoSelectedName,
      },
    });

  const cryptoNews = cryptoNewsData?.data;

  console.log(cryptoNewsData);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {cryptoNewsDataIsFetching ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <NewsListSelect isFetching={cryptoNewsDataIsFetching} />
              <NewsList data={cryptoNews} />
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default News;
