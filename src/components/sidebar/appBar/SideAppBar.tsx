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
// Custom Animated Components
import AppBarTransition from "../../motionAnimations/AppBarTransition.tsx";

function SideAppBar({ open, handleDrawerOpen }: SideBarProps) {
  const md = useMediaQuery("(min-width: 900px)");

  const cToolBar = {
    backgroundColor: variables.bgColorPrimary,
    py: md ? 2 : 1,
  };

  return (
    <AppBar position="fixed" open={open} className="app-header">
      <AppBarTransition>
        <Toolbar sx={cToolBar}>
          <SideBarHeader open={open} handleDrawerOpen={handleDrawerOpen} />
        </Toolbar>
      </AppBarTransition>
    </AppBar>
  );
}

export default SideAppBar;
