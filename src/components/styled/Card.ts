// Mui
import { createStyles, Theme } from "@mui/material";

export const cGrid = (theme: Theme) =>
  createStyles({
    pt: theme.breakpoints.up("md") ? "100px" : "50px",
  });
