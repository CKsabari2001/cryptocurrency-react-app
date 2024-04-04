// Mui
import { Card, CardContent } from "@mui/material";
// Styles
import { cNewsCard } from "../../styled/NewsCard";
// Components
import NewsCardContent from "./NewsCardContent";
// Types
import { NewsCardProps } from "../../../types";

function NewsCard({ data }: NewsCardProps) {
  return (
    <>
      <Card className="cryptoNews-card" variant="outlined" sx={cNewsCard}>
        <CardContent
          sx={{
            margin: 0,
            padding: 0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}>
          <NewsCardContent data={data} />
        </CardContent>
      </Card>
    </>
  );
}

export default NewsCard;
