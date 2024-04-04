// Mui
import { Button, Skeleton } from "@mui/material";
// React Router
import { Link } from "react-router-dom";
// Types
import { TypographyProps } from "../../types";
// Styles
import { cVButton, scVButton } from "../styled/Button";

function ViewMore({ text, isFetching }: TypographyProps) {
  return (
    <>
      {isFetching ? (
        <Skeleton variant="text" sx={scVButton} />
      ) : (
        <Link to={"/CryptoCurrencies"}>
          <Button variant="text" sx={cVButton}>
            {text}
          </Button>
        </Link>
      )}
    </>
  );
}

export default ViewMore;
