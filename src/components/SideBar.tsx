import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// Styled components for the SideBar
import { DrawerHeader } from "./styled/sideBarStyled.ts";
import { AppBar } from "./styled/sideBarStyled.ts";
import { Drawer } from "./styled/sideBarStyled.ts";

import { useMediaQuery } from "@mui/material";

import { NavLink } from "react-router-dom";

export default function SideBar() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = React.useState(isLg);

  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const sideBarMenus = [
    {
      text: "Home",
      icon: <InboxIcon />,
      path: "/",
    },
    {
      text: "Cryptocurrencies",
      icon: <MailIcon />,
      path: "/cryptocurrencies",
    },
    {
      text: "News",
      icon: <MailIcon />,
      path: "/news",
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant={isMobileScreen ? "h4" : "h5"}
            component="h1"
            noWrap
            className="title"
          >
            Cryptoverse
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarMenus.map((obj) => (
            <NavLink
              key={obj.text}
              to={obj.path}
              className={({ isActive }) => (isActive ? "nav-link-active" : "")}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {obj.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={obj.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
}
