// Mui
import { MenuItem, Select } from "@mui/material";
// Scss Variables
import variables from "../../../../../assets/scss/_Variables.module.scss";
// Types
import { ChartSelectBoxMenuProps } from "../../../../../types";
function ChartSelectBoxMenu({ value, handleChange }: ChartSelectBoxMenuProps) {
  const timeFrameOptions = ["1h", "3h", "12h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  const cMenuProps = {
    PaperProps: {
      style: {
        maxHeight: "300px",
      },
    },
  };
  const cSelect = {
    fieldset: {
      borderColor: `${variables.bgColorPrimary} !important`,
      borderRadius: "15px!important",
    },
  };

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Time Frame"
        onChange={handleChange}
        MenuProps={cMenuProps}
        sx={cSelect}>
        {timeFrameOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default ChartSelectBoxMenu;
