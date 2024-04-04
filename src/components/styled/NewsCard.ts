// Mui
import { createStyles, Theme } from "@mui/material";
// Scss variables
import variables from "../../assets/scss/_Variables.module.scss";

export const cNewsCard = () =>
  createStyles({
    transition: "all 0.5s ease-in-out",
    "h6, p": {
      transition: "all 0.5s ease-in-out",
    },

    "&:hover": {
      backgroundColor: variables.bgColorPrimary,
      cursor: "pointer",
      transition: "all 0.5s ease-in-out",

      "h6, p": {
        color: `${variables.textColorSecondary} !important`,
      },
    },
  });

export const cNewsCardH6 = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "18px" : "16px",
    fontWeight: 700,
    color: variables.bgColorPrimary,
  });
export const cNewsCardP = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "16px" : "14px",
    color: variables.textColorTertiary,
    fontWeight: 500,
  });
export const cNewsCardBp = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "16px" : "14px",
    color: variables.bgColorPrimary,
    fontWeight: 700,
  });
