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
import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FeedIcon from "@mui/icons-material/Feed";

// Styled components for the SideBar
import { DrawerHeader } from "./styled/sideBarStyled.ts";
import { AppBar } from "./styled/sideBarStyled.ts";
import { Drawer } from "./styled/sideBarStyled.ts";

import { useMediaQuery } from "@mui/material";

import { NavLink } from "react-router-dom";

// Scss Variables
import variables from "../assets/scss/_Variables.module.scss";

export default function SideBar() {
  const theme = useTheme();
  // const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const sm = useMediaQuery("(min-width: 600px)");
  const md = useMediaQuery("(min-width: 900px)");
  // const lg = useMediaQuery("(min-width: 1200px)");
  // const xl = useMediaQuery("(min-width: 1536px)");

  const [open, setOpen] = React.useState(false);

  const sideBarMenus = [
    {
      text: "Home",
      icon: <HomeIcon fontSize={sm ? "large" : "medium"} />,
      path: "/",
    },
    {
      text: "Cryptocurrencies",
      icon: <CurrencyExchangeIcon fontSize={sm ? "large" : "medium"} />,
      path: "/cryptocurrencies",
    },
    {
      text: "News",
      icon: <FeedIcon fontSize={sm ? "large" : "medium"} />,
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
        <Toolbar
          sx={{
            backgroundColor: variables.bgColorPrimary,
            py: md ? 2 : 1,
          }}
        >
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
            <MenuIcon fontSize={sm ? "large" : "medium"} />
          </IconButton>
          <Typography
            variant="h1"
            component="h1"
            noWrap
            className="title"
            sx={{
              fontSize: md ? "44px" : "34px",
              fontWeight: "bold",
            }}
          >
            Cryptoverse
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon
                sx={{ fill: variables.textColorPrimary }}
                fontSize={sm ? "large" : "medium"}
              />
            ) : (
              <ChevronLeftIcon
                sx={{ fill: variables.textColorPrimary }}
                fontSize={sm ? "large" : "medium"}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarMenus.map((obj) => (
            <NavLink
              key={obj.text}
              to={obj.path}
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
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
                    sx={{
                      opacity: open ? 1 : 0,
                      span: {
                        fontFamily: "'Roboto', sans-serif",
                      },
                    }}
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
