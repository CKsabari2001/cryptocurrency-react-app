// Mui
import { List, useMediaQuery } from "@mui/material";
import { CurrencyExchange, Feed, Home } from "@mui/icons-material";
// Types
import { SideBarProps } from "../../../types";
// Components
import SideDrawerListLink from "./SideDrawerListLink";
// Motion Animation Component
import SideAppBarTransition from "../../motionAnimations/SideAppBarTransition";
function SideList({ open }: SideBarProps) {
  const sm = useMediaQuery("(min-width: 600px)");

  const sideBarMenus = [
    {
      text: "Home",
      icon: <Home fontSize={sm ? "large" : "medium"} />,
      path: "/",
    },
    {
      text: "Cryptocurrencies",
      icon: <CurrencyExchange fontSize={sm ? "large" : "medium"} />,
      path: "/cryptocurrencies",
    },
    {
      text: "News",
      icon: <Feed fontSize={sm ? "large" : "medium"} />,
      path: "/news",
    },
  ];

  return (
    <List>
      {sideBarMenus.map((obj, i) => (
        <SideAppBarTransition key={i} index={i}>
          <SideDrawerListLink data={obj} open={open} />
        </SideAppBarTransition>
      ))}
    </List>
  );
}

export default SideList;
