// Mui
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// Types
import { SideBarProps } from "../../../types";

function SideBarHeader({ open, handleDrawerOpen }: SideBarProps) {
  const sm = useMediaQuery("(min-width: 600px)");
  const md = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: "none" }),
        }}>
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
        }}>
        Cryptoverse
      </Typography>
    </>
  );
}

export default SideBarHeader;
