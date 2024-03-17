import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import Login from "./Components/Login";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { Link,useNavigate  } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const navigate= useNavigate ()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Login",
      icon: <LoginIcon />,
      link: "/login",
    },
  ];

  const handleLogin  =()=>{
    navigate("/login")
  }
  return (
    <nav>
      <div className="nav-logo-container">
        <h1 className="sizefont">Creation Media </h1>
      </div>
      <div className="navbar-links-container">
        {/* <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
        
        <button className="primary-button">Join Us</button> */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => setOpenMenu(false)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item?.link ? (
                    <Link
                      to={item?.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItemText primary={item.text} />
                    </Link>
                  ) : (
                    <ListItemText primary={item.text} />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      {!isSmallScreen && !isMediumScreen && (
        <Box sx={{ textAlign: "center", marginTop: "16px" }}>
          <Button variant="text" color="secondary" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      )}
    </nav>
  );
};

export default Navbar;
