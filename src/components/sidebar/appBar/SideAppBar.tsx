// Mui
import { Toolbar, useMediaQuery } from "@mui/material";
// Styled Components
import { AppBar } from "../../styled/sideBarStyled.ts";
// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";
// Types
import { SideBarProps } from "../../../types.ts";
// components
import SideBarHeader from "../appBar/SideBarHeader.tsx";

function SideAppBar({ open, handleDrawerOpen }: SideBarProps) {
  const md = useMediaQuery("(min-width: 900px)");

  const cToolBar = {
    backgroundColor: variables.bgColorPrimary,
    py: md ? 2 : 1,
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={cToolBar}>
        <SideBarHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      </Toolbar>
    </AppBar>
  );
}

export default SideAppBar;
