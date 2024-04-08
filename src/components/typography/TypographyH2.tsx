// Mui
import { Skeleton, Typography } from "@mui/material";
// Styles
import { cH1, scH1 } from "../styled/Typography";
// Types
import { TypographyProps } from "../../types";
// Motion Animation Components
import RevealOnViewLeft from "../motionAnimations/RevealOnViewLeft";

function TypographyH2({ text, isFetching }: TypographyProps) {
  if (isFetching) {
    return <Skeleton variant="text" sx={scH1} />;
  }

  return (
    <RevealOnViewLeft>
      <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
        {text}
      </Typography>
    </RevealOnViewLeft>
  );
}

export default TypographyH2;
