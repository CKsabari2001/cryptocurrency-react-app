// MUI
import { Typography, useMediaQuery } from "@mui/material";
// Styles
import { cH6, cH1 } from "../../styled/Typography.ts";
// Components
import CryptoTitleLoader from "./cryptoStats/cryptoStatsLoader/CryptoTitleLoader.tsx";
// Types
import { CryptoDetailsProps } from "../../../types.ts";

function CryptoTitle({ data, isFetching }: CryptoDetailsProps) {
  const coin = data;

  const md = useMediaQuery("(min-width: 900px)");

  const cDiv = {
    marginBottom: md ? "13px" : "8px",
  };

  return (
    <div
      className="title-section"
      style={{
        marginBottom: md ? "80px" : "30px",
      }}>
      {isFetching ? (
        <CryptoTitleLoader />
      ) : (
        <>
          <div style={cDiv}>
            <Typography variant={"h4"} component="h2" gutterBottom sx={cH1}>
              {coin.name} ({coin.name}-{coin.symbol}) Price
            </Typography>
          </div>
          <Typography variant={"body1"} component="h6" sx={cH6}>
            {coin.name} live price in US dollars.
          </Typography>
        </>
      )}
    </div>
  );
}

export default CryptoTitle;
