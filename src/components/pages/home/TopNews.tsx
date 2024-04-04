// MUI
import { Grid, useMediaQuery } from "@mui/material";
// Redux
import { useGetCryptoNewsQuery } from "../../../app/store/services/cryptoNewsApi.ts";
// Styled Components
import TypographyH2 from "../../typography/TypographyH2";
import ViewMore from "../../Button/ViewMore.tsx";
// Components
import NewsLists from "../news/NewsLists.tsx";
function TopNews() {
  const { data: cryptoNewsData, isFetching: cryptoNewsDataIsFetching } = useGetCryptoNewsQuery({
    params: {
      source: "/bitcoinist",
    },
  });

  let cryptoNews = cryptoNewsData?.data;
  cryptoNews = cryptoNews?.slice(0, 10);

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
          <TypographyH2 text={"Top 10 Crypto News in the World"} isFetching={cryptoNewsDataIsFetching} />
        </Grid>
        <Grid item>
          <ViewMore text={"View More"} isFetching={cryptoNewsDataIsFetching} />
        </Grid>
      </Grid>
      <NewsLists data={cryptoNews} isFetching={cryptoNewsDataIsFetching} />
    </div>
  );
}

export default TopNews;
