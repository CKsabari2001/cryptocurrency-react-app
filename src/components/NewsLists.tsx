import React, { useEffect, useState } from "react";
import moment from "moment";

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
  urlToImage: string;
  publishedAt: number;
  source: {
    name: string;
  };
}
interface Props {
  data?: News[];
  hideSearch?: boolean;
}

function NewsLists({ data }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const [NewsList, setNewsList] = useState(data);

  useEffect(() => {
    setNewsList(data);
  }, [data]);

  return (
    <React.Fragment>
      <Grid container spacing={isMobileScreen ? 5 : 2}>
        {NewsList?.map((news: News) => (
          <Grid
            item
            key={`${news.publishedAt}--${news.title}`}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <a href={news.url} target="_blank" rel="noreferrer">
              <Card className="cryptoNews-card">
                <CardContent sx={{ margin: 0, padding: 0, height: "100%" }}>
                  <div className="card-header">
                    <img
                      src={news.urlToImage}
                      alt=""
                      className="card-header-img"
                    />
                  </div>
                  <div className="card-content-container">
                    <div className="card-body">
                      <Typography
                        variant="h6"
                        component="h6"
                        className="card-title"
                      >
                        {news.title}
                      </Typography>
                      <Typography
                        variant={isMobileScreen ? "body1" : "body2"}
                        component="p"
                      >
                        {news.description}
                      </Typography>
                    </div>
                    <div className="card-footer">
                      <Typography
                        variant={isMobileScreen ? "body1" : "body2"}
                        component="p"
                      >
                        {moment(news.publishedAt).startOf("second").fromNow()}
                      </Typography>
                      <Typography
                        variant={isMobileScreen ? "body1" : "body2"}
                        component="p"
                      >
                        {news.source.name}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default NewsLists;
