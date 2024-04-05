// Mui
import { createStyles, Theme } from "@mui/material";
// Scss variables
import variables from "../../assets/scss/_Variables.module.scss";

export const cH1 = (theme: Theme) =>
  createStyles({
    fontFamily: " 'Roboto', sans-serif",
    fontSize: theme.breakpoints.up("md") ? "38px" : "28px",
    fontWeight: 700,
    color: variables.textColorPrimary,
    mb: 0,
  });
export const cH2 = (theme: Theme) =>
  createStyles({
    fontFamily: " 'Roboto', sans-serif",
    fontSize: theme.breakpoints.up("md") ? "34px" : "24px",
    fontWeight: 700,
    color: variables.textColorPrimary,
    marginBottom: theme.breakpoints.up("md") ? "0" : "10px",
  });
export const scH1 = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "38px" : "28px",
    with: "100%",
    maxWidth: "300px",
  });

export const cH6 = (theme: Theme) =>
  createStyles({
    fontFamily: "'Lato', sans-serif",
    fontSize: theme.breakpoints.up("md") ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
  });

export const scH6 = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "38px" : "28px",
    maxWidth: "300px",
  });

export const cP = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "24px" : "22px",
    fontWeight: 800,
    color: variables.bgColorPrimary,
    fontFamily: "'Roboto', sans-serif",
  });
export const scP = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "24px" : "22px",
    maxWidth: "300px",
  });

export const cLink = (theme: Theme) =>
  createStyles({
    fontFamily: "'Lato', sans-serif",
    fontSize: theme.breakpoints.up("md") ? "18px" : "16px",
    color: variables.bgColorPrimary,
    fontWeight: 700,
    textDecoration: "none",

    "&:hover": {
      color: variables.bgColorPrimaryFaded,
    },
  });
