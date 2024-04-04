// Mui
import { Skeleton, Typography } from "@mui/material";
// Styles
import { cH1, scH1 } from "../styled/Typography";
// Types
import { TypographyProps } from "../../types";

function TypographyH2({ text, isFetching }: TypographyProps) {
  return (
    <>
      {isFetching ? (
        <Skeleton variant="text" sx={scH1} />
      ) : (
        <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
          {text}
        </Typography>
      )}
    </>
  );
}

export default TypographyH2;
