import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

// MUI
import {
  Typography,
  Grid,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";

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
  data?: News[];
  hideSearch?: boolean;
  isFetcing?: boolean;
}

function NewsLists({ data, isFetcing }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const [NewsList, setNewsList] = useState(data);

  useEffect(() => {
    setNewsList(data);
  }, [data]);

  if (isFetcing) {
    return <h2>Loading...</h2>;
  }

  return (
    <React.Fragment>
      <Grid container spacing={isMobileScreen ? 5 : 2}>
        {NewsList?.map((news: News, i) => {
          const utcTime = news.createdAt;
          const utcMoment = moment.utc(utcTime);
          const localMoment = utcMoment.local();
          const relativeTime = localMoment.startOf("second").fromNow();

          return (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <Card className="cryptoNews-card">
                  <CardContent
                    sx={{
                      margin: 0,
                      padding: 0,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="card-header">
                      <img
                        src={news.thumbnail}
                        alt=""
                        className="card-header-img"
                      />
                    </div>
                    <div
                      className="card-content-container"
                      style={{ flexGrow: 1 }}
                    >
                      <div className="card-body">
                        <Typography
                          variant="h6"
                          component="h6"
                          className="card-title"
                          dangerouslySetInnerHTML={{ __html: news.title }}
                        ></Typography>
                        <Typography
                          variant={isMobileScreen ? "body1" : "body2"}
                          component="p"
                          dangerouslySetInnerHTML={{ __html: news.description }}
                        ></Typography>
                      </div>
                      <div className="card-footer">
                        <Typography
                          variant={isMobileScreen ? "body1" : "body2"}
                          component="p"
                        >
                          {relativeTime}
                        </Typography>
                        {/* <Typography
                        variant={isMobileScreen ? "body1" : "body2"}
                        component="p"
                      >
                        {news.source.name}
                      </Typography> */}
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
