import React, { useEffect, useState } from "react";
// Moments
import moment from "moment-timezone";
// MUI
import { Grid, useMediaQuery } from "@mui/material";
// Types
import { NewsListsProps, CryptoNewsData } from "../../../types";
// Components
import NewsCard from "./NewsCard";
import NewsCardLoader from "./NewsCardLoader";

function NewsLists({ data, isFetching }: NewsListsProps) {
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  const [NewsList, setNewsList] = useState(data);

  useEffect(() => {
    setNewsList(data);
  }, [data]);

  if (isFetching) {
    return <NewsCardLoader />;
  }

  return (
    <React.Fragment>
      <Grid container rowSpacing={md ? 8 : 5} columnSpacing={lg ? 10 : md ? 6 : 4}>
        {NewsList?.map((news: CryptoNewsData, i) => {
          const utcTime = news.createdAt;
          const utcMoment = moment.utc(utcTime);
          const localMoment = utcMoment.local();
          const relativeTime = localMoment.startOf("second").fromNow();

          return (
            <Grid item key={i} xs={12} sm={6} md={4} xl={3}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <NewsCard data={{ relativeTime, news }} />
              </a>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default NewsLists;
