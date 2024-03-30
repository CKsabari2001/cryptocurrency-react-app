// MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Redux
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks.ts";
import { setChartSelectValue } from "../../../../app/store/features/chartSelect.ts";

// "timePeriod must be one of 1h, 3h, 12h, 24h, 7d, 30d, 3m, 1y, 3y, 5y

// Scss Variables
import variables from "../../../../assets/scss/_Variables.module.scss";

function ChartSelectBox() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.chartSelect.value);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setChartSelectValue(event.target.value as string));
  };

  return (
    <>
      <Box className="chart-select-box">
        <FormControl sx={{ width: "100%", maxWidth: "300px" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: `${variables.bgColorPrimary} !important`,
              fontSize: "14px",
            }}
          >
            Time Frame
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Time Frame"
            onChange={handleChange}
            sx={{
              fieldset: {
                borderColor: `${variables.bgColorPrimary} !important`,
                borderRadius: "15px!important",
              },
            }}
          >
            <MenuItem value={"1h"}>1h</MenuItem>
            <MenuItem value={"3h"}>3h</MenuItem>
            <MenuItem value={"12h"}>12h</MenuItem>
            <MenuItem value={"24h"}>24h</MenuItem>
            <MenuItem value={"7d"}>7d</MenuItem>
            <MenuItem value={"30d"}>30d</MenuItem>
            <MenuItem value={"3m"}>3m</MenuItem>
            <MenuItem value={"1y"}>1y</MenuItem>
            <MenuItem value={"3y"}>3y</MenuItem>
            <MenuItem value={"5y"}>5y</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default ChartSelectBox;
