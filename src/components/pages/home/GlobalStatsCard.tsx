//MUI
import { Card, CardContent, useMediaQuery } from "@mui/material";
import GlobalStatsCardItem from "./GlobalStatsCardItem";
// Types
import { GlobalStatsCardProps } from "../../../types";
function GlobalStatsCard({ globalStats, isFetching }: GlobalStatsCardProps) {
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <Card
      className="crypto-card"
      variant="outlined"
      sx={{
        maxWidth: "50rem",
        mt: md ? 5 : 3,
        transformStyle: "preserve-3d",
      }}>
      <CardContent
        sx={{
          padding: md ? "50px !important" : "30px!important",
        }}>
        <GlobalStatsCardItem globalStats={globalStats} isFetching={isFetching} />
      </CardContent>
    </Card>
  );
}

export default GlobalStatsCard;
