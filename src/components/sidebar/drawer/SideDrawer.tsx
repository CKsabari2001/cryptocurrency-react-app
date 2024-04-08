// Mui
import { Divider } from "@mui/material";
// Styled components for the SideBar
import { Drawer } from "../../styled/sideBarStyled";
// Types
import { SideBarProps } from "../../../types";
// Components
import SideDrawerHeader from "./SideDrawerHeader";
import SideDrawerList from "./SideDrawerList";

function SideDrawer({ open, handleDrawerClose }: SideBarProps) {
  return (
    <>
      <Drawer className="Test" variant="permanent" open={open}>
        <SideDrawerHeader handleDrawerClose={handleDrawerClose} />
        <Divider />
        <SideDrawerList open={open} />
      </Drawer>
    </>
  );
}

export default SideDrawer;
