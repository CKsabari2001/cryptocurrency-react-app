// Mui
import { Box, Typography, useMediaQuery } from "@mui/material";
// Millify
import millify from "millify";
// Components
import ChartSelectBox from "./chartSelectBox/ChartSelectBox";
// Types
import { CryptoCoinData } from "../../../../types";
// Styles
import { cH2, cH6, cBox, cBox2 } from "../../../styled/CryptoChartHeader";
// Motion Custom Animation
import RevealOnViewLeft from "../../../motionAnimations/RevealOnViewLeft";
import RevealOnViewRight from "../../../motionAnimations/RevealOnViewRight";

function CryptoChartHeader({ data }: { data: CryptoCoinData }) {
  const md = useMediaQuery("(min-width: 900px)");
  return (
    <>
      <Box
        className="chart-header"
        sx={{
          mb: md ? "2rem" : "1rem",
        }}>
        <ChartSelectBox />
        <Box sx={cBox}>
          <RevealOnViewLeft>
            <Typography variant={"h4"} component="h2" sx={cH2}>
              {data.name} Price Chart
            </Typography>
          </RevealOnViewLeft>
          <RevealOnViewRight>
            <Box sx={cBox2}>
              <Typography variant={"h5"} component="h3" gutterBottom sx={cH6}>
                Current {data.name} Change: <span>({data.change} %)</span>
              </Typography>
              <Typography variant={"h5"} component="h3" gutterBottom sx={cH6}>
                Current {data.name} Price: <span>$ {millify(data.price)}</span>
              </Typography>
            </Box>
          </RevealOnViewRight>
        </Box>
      </Box>
    </>
  );
}

export default CryptoChartHeader;
