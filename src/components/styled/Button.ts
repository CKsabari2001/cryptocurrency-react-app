// Mui
import { createStyles, Theme } from "@mui/material";
// Scss variables
import variables from "../../assets/scss/_Variables.module.scss";

export const cVButton = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "18px" : "16px",
    fontWeight: 500,
    color: variables.bgColorPrimary,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "capitalize",
    padding: "10px 30px",

    "&:hover": {
      backgroundColor: "transparent",
      color: variables.bgColorPrimaryFaded,
    },
  });
export const scVButton = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "18px" : "16px",
    width: "100px",
    minWidth: "50px",
    maxWidth: "100px",
  });
