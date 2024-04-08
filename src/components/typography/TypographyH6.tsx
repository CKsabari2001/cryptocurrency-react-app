// Mui
import { Skeleton, Typography } from "@mui/material";
// Styles
import { cH6, scH6 } from "../styled/Typography";
// Types
import { TypographyProps } from "../../types";
import RevealOnView from "../motionAnimations/RevealOnView";
function TypographyH6({ text, isFetching, index }: TypographyProps) {
  if (isFetching) {
    return <Skeleton variant="text" sx={scH6} />;
  }

  return (
    <RevealOnView index={index} isHomePage={true} isHHeight={true}>
      <Typography variant="h6" component="h2" gutterBottom sx={cH6}>
        {text}
      </Typography>
    </RevealOnView>
  );
}

export default TypographyH6;
