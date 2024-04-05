// Mui
import { Skeleton, Typography } from "@mui/material";
// Styles
import { cH6, scH6 } from "../styled/Typography";
// Types
import { TypographyProps } from "../../types";
function TypographyH6({ text, isFetching }: TypographyProps) {
  return (
    <div>
      {isFetching ? (
        <Skeleton variant="text" sx={scH6} />
      ) : (
        <Typography variant="h6" component="h2" gutterBottom sx={cH6}>
          {text}
        </Typography>
      )}
    </div>
  );
}

export default TypographyH6;
