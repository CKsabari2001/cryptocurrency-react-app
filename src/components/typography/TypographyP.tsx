// Mui
import { Skeleton, Typography, useMediaQuery } from "@mui/material";
// Styles
import { cP, scP } from "../styled/Typography";
// Types
import { TypographyProps } from "../../types";
import RevealOnView from "../motionAnimations/RevealOnView";

function TypographyP({ text, isFetching, index }: TypographyProps) {
  const md = useMediaQuery("(min-width: 900px)");

  if (isFetching) {
    return (
      <div
        style={{
          marginTop: md ? "30px" : "15px",
        }}>
        <Skeleton variant="text" sx={scP} />
      </div>
    );
  }

  return (
    <RevealOnView index={index} isHomePage={true} isHHeight={true}>
      <div
        style={{
          marginTop: md ? "30px" : "15px",
        }}>
        <Typography variant="h2" component="h2" gutterBottom sx={cP}>
          {text}
        </Typography>
      </div>
    </RevealOnView>
  );
}

export default TypographyP;
