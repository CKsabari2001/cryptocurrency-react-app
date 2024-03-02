// Import React components
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import { DrawerHeader } from "./styled/sideBarStyled";

// Import React components
import NewsList from "./NewsLists.tsx";
import NewsListSelect from "./NewsListSelect";

// Redux
import { useGetCryptoNewsQuery } from "../app/store/services/cryptoNewsApi.ts";
import { useAppSelector } from "../app/store/hooks.ts";

function News() {
  let cryptoSelectedName = useAppSelector((state) => state.newsSelect.value);
  cryptoSelectedName.toLocaleLowerCase();

  if (cryptoSelectedName == "") {
    cryptoSelectedName = "cryptocurrency";
  }

  const { data: cryptoNewsData, isFetching: cryptoNewsDataIsFetching } =
    useGetCryptoNewsQuery({
      params: {
        q: cryptoSelectedName,
        sortBy: "popularity",
        apiKey: "Test",
      },
    });

  const cryptoNews = cryptoNewsData?.articles;

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
              <NewsListSelect />
              <NewsList data={cryptoNews} />
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default News;
