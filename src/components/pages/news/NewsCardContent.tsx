// Mui
import { Typography } from "@mui/material";
// Styles
import { cNewsCardH6, cNewsCardP, cNewsCardBp } from "../../styled/NewsCard";
// Types
import { NewsCardProps } from "../../../types";
// Custom Functions
import { limitWords } from "../../../functions";
import NewsCardImgZoomHover from "../../motionAnimations/NewsCardImgZoomHover";

function NewsCardContent({ data, isHover }: NewsCardProps) {
  const news = data.news;
  const relativeTime = data.relativeTime;

  return (
    <>
      <div className="card-header">
        <NewsCardImgZoomHover isHover={isHover}>
          <img src={news.thumbnail} alt="" className="card-header-img" />
        </NewsCardImgZoomHover>
      </div>
      <div className="card-content-container" style={{ flexGrow: 1 }}>
        <div className="card-body">
          <Typography
            variant="h6"
            component="h6"
            className="card-title"
            sx={cNewsCardH6}
            dangerouslySetInnerHTML={{ __html: news.title }}></Typography>
          <Typography
            variant={"body1"}
            component="p"
            sx={cNewsCardP}
            dangerouslySetInnerHTML={{
              __html: limitWords(news.description, 30),
            }}></Typography>
        </div>
        <div className="card-footer">
          <Typography variant={"body1"} component="p" sx={cNewsCardBp}>
            {relativeTime}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default NewsCardContent;
