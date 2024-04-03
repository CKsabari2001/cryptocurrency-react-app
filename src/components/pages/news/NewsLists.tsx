import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";

// MUI
import { Typography, Grid, useMediaQuery, Card, CardContent, Skeleton } from "@mui/material";

// Types
interface News {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  createdAt: number;
  source: {
    name: string;
  };
}
interface Props {
  data: News[];
  isFetching: boolean;
}

function NewsLists({ data, isFetching }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  const [NewsList, setNewsList] = useState(data);

  useEffect(() => {
    setNewsList(data);
  }, [data]);

  // Const Styled Components
  const cH6 = {
    fontSize: md ? "18px" : "16px",
    fontWeight: 700,
    color: variables.bgColorPrimary,
  };
  const cP = {
    fontSize: md ? "16px" : "14px",
    color: variables.textColorTertiary,
    fontWeight: 500,
  };

  function limitWords(str: string, maxWords: number) {
    const words = str.split(" ");
    if (words.length > maxWords) {
      const sliced = words.slice(0, maxWords).join(" ");
      const lastSpace = sliced.lastIndexOf(" ");

      const truncated = sliced.substring(0, lastSpace > 0 ? lastSpace : maxWords);
      return truncated + "...";
    }
    return str;
  }

  if (isFetching) {
    return (
      <>
        <Grid container rowSpacing={md ? 8 : 5} columnSpacing={lg ? 10 : md ? 6 : 4}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Grid key={i} item xs={12} sm={6} md={4} xl={3}>
              <Card className="cryptoNews-card loader" variant="outlined">
                <CardContent
                  sx={{
                    margin: 0,
                    padding: 0,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <div className="card-header">
                    <Skeleton variant="rounded" width={"100%"} height={md ? 250 : 200} />
                  </div>
                  <div className="card-content-container" style={{ flexGrow: 1 }}>
                    <div className="card-body">
                      <Skeleton variant="text" sx={{ fontSize: cH6.fontSize }} />
                      <Skeleton variant="text" sx={{ fontSize: cP.fontSize }} />
                    </div>
                    <div className="card-footer">
                      <Skeleton variant="text" sx={{ fontSize: cP.fontSize, minWidth: "100px" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }

  return (
    <React.Fragment>
      <Grid container rowSpacing={md ? 8 : 5} columnSpacing={lg ? 10 : md ? 6 : 4}>
        {NewsList?.map((news: News, i) => {
          const utcTime = news.createdAt;
          const utcMoment = moment.utc(utcTime);
          const localMoment = utcMoment.local();
          const relativeTime = localMoment.startOf("second").fromNow();

          return (
            <Grid item key={i} xs={12} sm={6} md={4} xl={3}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <Card
                  className="cryptoNews-card"
                  variant="outlined"
                  sx={{
                    transition: "all 0.5s ease-in-out",
                    "h6, p": {
                      transition: "all 0.5s ease-in-out",
                    },

                    "&:hover": {
                      backgroundColor: variables.bgColorPrimary,
                      cursor: "pointer",
                      transition: "all 0.5s ease-in-out",

                      "h6, p": {
                        color: `${variables.textColorSecondary} !important`,
                      },
                    },
                  }}>
                  <CardContent
                    sx={{
                      margin: 0,
                      padding: 0,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <div className="card-header">
                      <img src={news.thumbnail} alt="" className="card-header-img" />
                    </div>
                    <div className="card-content-container" style={{ flexGrow: 1 }}>
                      <div className="card-body">
                        <Typography
                          variant="h6"
                          component="h6"
                          className="card-title"
                          sx={cH6}
                          dangerouslySetInnerHTML={{ __html: news.title }}></Typography>
                        <Typography
                          variant={isMobileScreen ? "body1" : "body2"}
                          component="p"
                          sx={cP}
                          dangerouslySetInnerHTML={{
                            __html: limitWords(news.description, 30),
                          }}></Typography>
                      </div>
                      <div className="card-footer">
                        <Typography
                          variant={isMobileScreen ? "body1" : "body2"}
                          component="p"
                          sx={{
                            ...cP,
                            color: variables.bgColorPrimary,
                            fontWeight: 700,
                          }}>
                          {relativeTime}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default NewsLists;
