// Mui
import { createStyles, Theme } from "@mui/material";
// Styles For Font Size
import { cH2, cH6 } from "./Typography";

export const cChartCard = () =>
  createStyles({
    width: "100%",
    maxWidth: "100%",
  });
export const cChartCardContent = (theme: Theme) =>
  createStyles({
    padding: theme.breakpoints.up("md") ? "50px !important" : "30px!important",
  });
export const cH1s = (theme: Theme) =>
  createStyles({
    width: "100%",
    maxWidth: theme.breakpoints.up("md") ? "300px" : "100%",
    height: theme.breakpoints.up("md") ? "40px" : "30px",
  });
export const cBox = (theme: Theme) =>
  createStyles({
    display: "flex",
    flexDirection: theme.breakpoints.up("md") ? "row" : "column",
    justifyContent: "space-between",
    marginBottom: "20px",
  });
export const cH2s = () =>
  createStyles({
    fontSize: cH2,
    width: "100%",
    maxWidth: "600px",
  });
export const cH6s = () =>
  createStyles({
    fontSize: cH6,
    width: "100%",
    maxWidth: "400px",
  });

export const cCharts = (theme: Theme) =>
  createStyles({ width: "100%", height: theme.breakpoints.up("md") ? "500px" : "300px" });
