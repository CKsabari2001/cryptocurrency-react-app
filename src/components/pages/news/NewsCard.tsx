import React from "react";
// Mui
import { Card, CardContent } from "@mui/material";
// Styles
import { cNewsCard } from "../../styled/NewsCard";
// Components
import NewsCardContent from "./NewsCardContent";
// Types
import { NewsCardProps } from "../../../types";
import NewsCardZoomHover from "../../motionAnimations/NewsCardZoomHover";

function NewsCard({ data }: NewsCardProps) {
  const [isHover, setIsHover] = React.useState(false);

  function toggleHover() {
    setIsHover((value) => !value);
  }

  return (
    <>
      <NewsCardZoomHover>
        <Card
          className="cryptoNews-card"
          variant="outlined"
          sx={cNewsCard}
          onMouseOver={toggleHover}
          onMouseOut={toggleHover}>
          <CardContent
            sx={{
              margin: 0,
              padding: 0,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>
            <NewsCardContent data={data} isHover={isHover} />
          </CardContent>
        </Card>
      </NewsCardZoomHover>
    </>
  );
}

export default NewsCard;
