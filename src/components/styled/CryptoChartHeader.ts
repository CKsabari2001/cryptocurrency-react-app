// Mui
import { createStyles, Theme } from "@mui/material";
// Scss variables
import variables from "../../assets/scss/_Variables.module.scss";

export const cH2 = (theme: Theme) =>
  createStyles({
    fontFamily: " 'Roboto', sans-serif",
    fontSize: theme.breakpoints.up("md") ? "34px" : "24px",
    fontWeight: 700,
    color: variables.textColorPrimary,
    marginBottom: theme.breakpoints.up("md") ? "0" : "10px",
  });
export const cH6 = (theme: Theme) =>
  createStyles({
    fontFamily: "'Lato', sans-serif",
    fontSize: theme.breakpoints.up("md") ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
    padding: theme.breakpoints.up("md") ? "0" : "0 10px",
    paddingLeft: theme.breakpoints.up("md") ? "30px" : "0",
    marginBottom: "0",

    span: {
      color: variables.bgColorPrimary,
      fontWeight: "800 !important",
    },
  });
export const cBox = (theme: Theme) =>
  createStyles({
    display: "flex",
    flexDirection: theme.breakpoints.up("md") ? "row" : "column",
    justifyContent: "space-between",
    alignItems: "center",
  });
export const cBox2 = () =>
  createStyles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });
