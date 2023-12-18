import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

export default function Header() {
  const tabs = ["ABOUT", "POST FORMAT", "SITEMAP", "CONTACT"];
  const iconTabs = [
    <i className="fa-brands fa-facebook-f"></i>,
    <i className="fa-brands fa-twitter"></i>,
    <i className="fa-solid fa-at"></i>,
    <i className="fa-brands fa-pinterest"></i>,
    <i className="fa-brands fa-linkedin-in"></i>,
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header">
        <Toolbar className="tab-container">
          <div className="bar">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Box component={"div"} className="tab-box">
            {tabs?.map((tab, i) => (
              <Typography key={i} className="tabs">
                {tab}
              </Typography>
            ))}
          </Box>
          <Box className="icon-box">
            {iconTabs?.map((icon, i) => (
              <div key={i} className="icon">
                {icon}
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
