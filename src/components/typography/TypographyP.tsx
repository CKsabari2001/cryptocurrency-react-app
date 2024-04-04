// Mui
import { Skeleton, Typography, useMediaQuery } from "@mui/material";
// Styles
import { cP, scP } from "../styled/Typography";
// Types
import { TypographyProps } from "../../types";
function TypographyP({ text, isFetching }: TypographyProps) {
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <div
      style={{
        marginTop: md ? "30px" : "15px",
      }}>
      {isFetching ? (
        <Skeleton variant="text" sx={scP} />
      ) : (
        <Typography variant="h2" component="h2" gutterBottom sx={cP}>
          {text}
        </Typography>
      )}
    </div>
  );
}

export default TypographyP;
