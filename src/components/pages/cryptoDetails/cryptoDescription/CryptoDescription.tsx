// MUI
import { Grid, useMediaQuery } from "@mui/material";
// Components
import CryptoDescriptionTop from "./CryptoDescriptionTop";
import CryptoDescriptionCard from "./cryptoDescriptionCard/CryptoDescriptionCard";
import CryptoDescriptionLoader from "./cryptoDescriptionLoader/CryptoDescriptionLoader";
// Types
import { CryptoDescriptionProps } from "../../../../types";
// Styles
import { cGrid } from "../../../styled/Card";

function CryptoDescription({ data, isFetching }: CryptoDescriptionProps) {
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  if (isFetching) {
    return <CryptoDescriptionLoader />;
  }

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowSpacing={5}
      columnSpacing={lg ? 0 : md ? 4 : 0}
      sx={cGrid}>
      <CryptoDescriptionTop data={data} />
      <CryptoDescriptionCard data={data} />
    </Grid>
  );
}

export default CryptoDescription;
