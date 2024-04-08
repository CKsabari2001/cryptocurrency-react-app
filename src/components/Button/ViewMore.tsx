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

function ViewMore({ text, isFetching }: TypographyProps) {
  if (isFetching) {
    return <Skeleton variant="text" sx={scVButton} />;
  }

  return (
    <RevealOnViewRight>
      <Link to={"/CryptoCurrencies"}>
        <Button variant="text" sx={cVButton}>
          {text}
        </Button>
      </Link>
    </RevealOnViewRight>
  );
}

export default ViewMore;
