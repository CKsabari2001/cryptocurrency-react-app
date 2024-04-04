// Mui
import { IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// Styled components for the SideBar
import { DrawerHeader } from "../../styled/sideBarStyled";
import { SideBarProps } from "../../../types";
// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";

function SideDrawerHeader({ handleDrawerClose }: SideBarProps) {
  const theme = useTheme();
  const sm = useMediaQuery("(min-width: 600px)");
  return (
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? (
          <ChevronRight sx={{ fill: variables.textColorPrimary }} fontSize={sm ? "large" : "medium"} />
        ) : (
          <ChevronLeft sx={{ fill: variables.textColorPrimary }} fontSize={sm ? "large" : "medium"} />
        )}
      </IconButton>
    </DrawerHeader>
  );
}

export default SideDrawerHeader;
