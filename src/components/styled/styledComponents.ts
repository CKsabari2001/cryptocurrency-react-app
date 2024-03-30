// Mui
import { styled } from "@mui/system";
import { TextField } from "@mui/material";

// Scss Variables
import variables from "../../assets/scss/_Variables.module.scss";

export const StyledSearchBar = styled(TextField)({
  ".MuiInputBase-root": {
    borderRadius: "15px !important",
  },
  ".MuiFormLabel-root, .MuiFormLabel-root.Mui-focused": {
    color: variables.bgColorPrimary,
  },

  input: {
    color: variables.textColorTertiary,
    fontWeight: 700,
    fontFamily: "'Lato', sans-serif;",
  },
  fieldset: {
    borderColor: `${variables.bgColorPrimary} !important`,

    "&:hover": {
      borderColor: "#fff !important",
    },
  },

  ".css-14d3drv-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
      borderColor: variables.bgColorPrimary,
    },
});
