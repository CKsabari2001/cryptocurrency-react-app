// Mui
import { Button, Skeleton } from "@mui/material";
// React Router
import { Link } from "react-router-dom";
// Types
import { TypographyProps } from "../../types";
// Styles
import { cVButton, scVButton } from "../styled/Button";
// Motion Animation Components
import RevealOnViewRight from "../motionAnimations/RevealOnViewRight";

function ViewMore({ text, isFetching, link }: TypographyProps) {
  if (isFetching) {
    return <Skeleton variant="text" sx={scVButton} />;
  }

  if (link === undefined || link === null) {
    link = "/";
  }

  return (
    <RevealOnViewRight>
      <Link to={link}>
        <Button variant="text" sx={cVButton}>
          {text}
        </Button>
      </Link>
    </RevealOnViewRight>
  );
}

export default ViewMore;
