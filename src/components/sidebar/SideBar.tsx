import * as React from "react";
// Mui
import CssBaseline from "@mui/material/CssBaseline";
// Components
import SideAppBar from "./appBar/SideAppBar.tsx";
import SideDrawer from "./drawer/SideDrawer.tsx";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <SideAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideDrawer open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
}
