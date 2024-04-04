// Mui
import { createStyles, Theme } from "@mui/material";
// Scss variables
import variables from "../../assets/scss/_Variables.module.scss";

export const cDiv = () =>
  createStyles({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: variables.bgColorPrimary,
  });
export const cH1 = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "158px" : "108px",
    fontWeight: 700,
    color: variables.textColorSecondary,
    mb: theme.breakpoints.up("md") ? 2 : 3,
  });
export const cButton = (theme: Theme) =>
  createStyles({
    fontSize: theme.breakpoints.up("md") ? "26px" : "20px",
    fontWeight: 500,
    color: variables.textColorSecondary,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "capitalize",
    padding: "10px 30px",

    "&:hover": {
      backgroundColor: "transparent",
      color: variables.textColorPrimary,
    },
  });
