// Mui
import { createStyles } from "@mui/material";
// Scss variables
import variables from "../../assets/scss/_Variables.module.scss";

export const inputLabel = () =>
  createStyles({
    color: `${variables.bgColorPrimary} !important`,
    fontSize: "14px",
  });
export const select = () =>
  createStyles({
    fieldset: {
      borderColor: `${variables.bgColorPrimary} !important`,
      borderRadius: "15px!important",
    },
  });
