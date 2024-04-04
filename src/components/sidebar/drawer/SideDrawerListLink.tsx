// Mui
import { ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
// React Router
import { NavLink } from "react-router-dom";
// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";
// Types
import { SideListLinkProps } from "../../../types";
function SideDrawerListLink({ data, open }: SideListLinkProps) {
  const obj = data;
  const md = useMediaQuery("(min-width: 900px)");

  const CListItemIcon = {
    minHeight: md ? 100 : 70,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    "&:hover": {
      backgroundColor: variables.bgColorPrimaryFaded,

      svg: {
        fill: variables.textColorSecondary,
      },

      span: {
        color: variables.textColorSecondary,
      },
    },
  };

  const cListItemIcon = {
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
  };

  const cListItemText = {
    opacity: open ? 1 : 0,
    span: {
      fontFamily: "'Roboto', sans-serif",
    },
  };

  return (
    <NavLink to={obj.path} className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton sx={CListItemIcon}>
          <ListItemIcon sx={cListItemIcon}>{obj.icon}</ListItemIcon>
          <ListItemText primary={obj.text} sx={cListItemText} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
}

export default SideDrawerListLink;
