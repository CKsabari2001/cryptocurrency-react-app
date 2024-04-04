// MUI
import { Box, InputLabel, FormControl } from "@mui/material";
// Types
import { SelectChangeEvent } from "@mui/material/Select";
// Redux
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks.ts";
import { setChartSelectValue } from "../../../../app/store/features/chartSelect.ts";
// Scss Variables
import variables from "../../../../assets/scss/_Variables.module.scss";
import ChartSelectBoxMenu from "./ChartSelectBoxMenu.tsx";

function ChartSelectBox() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.chartSelect.value);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setChartSelectValue(event.target.value as string));
  };

  const cInputLabel = {
    color: `${variables.bgColorPrimary} !important`,
    fontSize: "14px",
  };

  return (
    <>
      <Box className="chart-select-box">
        <FormControl sx={{ width: "100%", maxWidth: "300px" }}>
          <InputLabel id="demo-simple-select-label" sx={cInputLabel}>
            Time Frame
          </InputLabel>
          <ChartSelectBoxMenu value={value} handleChange={handleChange} />
        </FormControl>
      </Box>
    </>
  );
}

export default ChartSelectBox;
